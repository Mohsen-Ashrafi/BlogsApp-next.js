"use client";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Loading from "@/ui/Loading";

const schema = yup.object({
  name: yup
    .string()
    .min(5, "Name is invalid.")
    .max(30)
    .required("Name is required"),
  email: yup.string().email("Email is invalid.").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();

  const onSubmit = async (values: unknown) => {
    const typedValues = values as {
      name: string;
      email: string;
      password: string;
    };
    await signup(typedValues);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6 -mt-16">
        Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RHFTextField<FormValues>
          label="First and Last Name"
          name="name"
          register={register}
          errors={errors}
          dir="ltr"
          isRequired
        />
        <RHFTextField<FormValues>
          label="Email"
          name="email"
          register={register}
          errors={errors}
          dir="ltr"
          isRequired
        />
        <RHFTextField<FormValues>
          label="Password"
          name="password"
          register={register}
          errors={errors}
          type="password"
          dir="ltr"
          isRequired
        />
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <Button type="submit" variantType="primary" className="w-full">
              Confirm
            </Button>
          )}
        </div>
      </form>
      <Link
        href="/signin"
        className="text-secondary-0 bg-blue-500 p-3 rounded-xl mt-6 text-center
      hover:bg-blue-400 transition-all duration-300
      "
      >
        Signin
      </Link>
    </div>
  );
}

export default Signup;
