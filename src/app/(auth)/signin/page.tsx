"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// export const metadata = {
//   title: "Signup",
// };

const schema = yup.object({
  email: yup.string().email("Email is invalid.").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values: unknown) => {
    const typedValues = values as {
      name: string;
      email: string;
      password: string;
    };
    await signin(typedValues);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        Signin
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
        <Button type="submit" variantType="primary" className="w-full">
          Login
        </Button>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        Signup
      </Link>
    </div>
  );
}

export default Signin;
