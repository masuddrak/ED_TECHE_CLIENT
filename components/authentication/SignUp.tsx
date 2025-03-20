"use client";
import React, { useState } from "react";
import BaseInput from "../base/BaseInput";
import { Button } from "../ui/button";
import { sendVerificationCode, signUp } from "@/lib/auth/api";
interface Props {
  checkSignUp: (value: boolean) => void;
  checkSignIn: (value: boolean) => void;
  checkSendVerifyCode: (value: boolean) => void;
}
const SignUp: React.FC<Props> = ({ checkSignUp,checkSignIn,checkSendVerifyCode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChanche = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handelForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await signUp(formData?.email, formData?.password);
    if (data.message === "user already exist" || data.status) {
      checkSignUp(false);
      checkSendVerifyCode(true)
      const data = await sendVerificationCode(formData?.email);
      console.log(data);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handelForm}>
          <BaseInput
            type="text"
            name="name"
            label="Name"
            placeholder="Type Name..."
            onChange={handelChanche}
          />
          <BaseInput
            type="email"
            name="email"
            label="Email"
            placeholder="Type Email..."
            onChange={handelChanche}
          />
          <BaseInput
            type="password"
            name="password"
            label="Password"
            placeholder="Type Password..."
            onChange={handelChanche}
          />

          <Button type="submit" className="w-full mt-4">
            Sign up
          </Button>
        </form>

        <p className="text-center">
          Allready have an account?{" "}
          <span className="text-blue-700 cursor-pointer" onClick={() => { checkSignIn(true); checkSignUp(false)}}>Sign In</span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
