"use client";
import { useCategories } from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import FileInput from "@/ui/FileInput";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/ui/Button";
import * as yup from "yup";
import useCreatePost from "./useCreatePost";
import Loading from "@/ui/Loading";
import { useRouter } from "next/navigation";
import useEditPost from "./useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";

interface CreatePostFormProps {
  postToEdit?: {
    _id: string;
    title: string;
    briefText: string;
    text: string;
    slug: string;
    readingTime: number;
    category: {
      _id: string;
      title?: string;
    };
    coverImage?: File;
    coverImageUrl?: string;
  };
}
interface ExtendedFile extends File {
  fileName?: string;
}
type FormValues = yup.InferType<typeof schema> & {
  coverImage?: File | null;
};
type SafePostToEdit = Partial<CreatePostFormProps["postToEdit"]>;

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "Title must be at least 5 characters long")
      .required("Title is required"),
    briefText: yup
      .string()
      .min(5, "Brief description must be at least 10 characters long")
      .required("Brief description is required"),
    text: yup
      .string()
      .min(5, "Content must be at least 10 characters long")
      .required("Content is required"),
    slug: yup.string().required("Slug is required"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("Reading time is required")
      .typeError("Reading time must be a number"),
    category: yup.string().required("Category is required"),
  })
  .required();

function CreatePostForm({
  postToEdit = {} as SafePostToEdit,
}: {
  postToEdit?: SafePostToEdit;
}) {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    slug,
    readingTime,
    briefText,
    category,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      slug,
      readingTime,
      briefText,
      category: category._id,
      coverImage,
    };
  }
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
  const { isCreating, createPost } = useCreatePost();
  const { isEditing, editPost } = useEditPost();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImageUrl) {
      async function fetchMyApi() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyApi();
    }
  }, [editId, setValue, prevCoverImageUrl]);

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="Title"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="briefText"
        label="BriefText"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="text"
        label="Text"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="slug"
        label="Slug"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="readingTime"
        label="ReadingTime"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFSelect
        name="category"
        label="Category"
        register={register}
        isRequired
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "Cover image is required" }}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="Cover post"
              name="coverImage"
              isRequired
              dir="ltr"
              type="file"
              {...rest}
              value={(value as ExtendedFile)?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            width={300}
            height={200}
            alt="cover-iamge"
            src={coverImageUrl}
          />
          <ButtonIcon
            type="button"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="w-6 h-6 !absolute !left-0 !top-0"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <div>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <Button variantType="primary" type="submit" className="w-full">
            Submit
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreatePostForm;
