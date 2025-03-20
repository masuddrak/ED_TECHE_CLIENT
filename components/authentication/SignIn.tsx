"use client";
import React, { useState } from "react";
import BaseInput from "../base/BaseInput";
import { Button } from "../ui/button";
import {  signUp } from "@/lib/auth/api";
interface Props {
    checkSignIn: (value: boolean) => void;
    checkSignUp: (value: boolean) => void;
}
const SignIn: React.FC<Props> = ({ checkSignIn,checkSignUp }) => {
  const [formData, setFormData] = useState({
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

   await signUp(formData?.email, formData?.password);
   
  };

  return (
    <>
      <div>
        <form onSubmit={handelForm}>
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

          <Button variant="outline" type="submit" className="w-full mt-4">
            Sign In
          </Button>
        </form>

        <p className="text-center">
          Don&apos;t have an account?{" "}
          <span className="text-blue-700 cursor-pointer" onClick={() => { checkSignIn(false); checkSignUp(true)}}>Sign up</span>
        </p>
      </div>
    </>
  );
};

export default SignIn;
