"use client"

import RHFTextField from "@/ui/RHFTextField";
import { useForm, SubmitHandler } from "react-hook-form";

// export const metadata = {
//   title: "Signup",
// };

type FormValues = {
  email: string;
  name: string;
  password: string;
};

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField<FormValues>
          label="First and Last Name"
          name="name"
          register={register}
          errors={errors}
          dir="ltr"
        />
        <RHFTextField<FormValues>
          label="email"
          name="email"
          register={register}
          errors={errors}
          dir="ltr"
        />
        <RHFTextField<FormValues>
          label="password"
          name="password"
          register={register}
          errors={errors}
          type="password"
          dir="ltr"
        />
        {/* <Button variant="contained" /> */}
        <button>signin</button>
      </form>
    </div>
  );
}

export default Signup;
