"use client";
import React, { useState } from "react";
import BaseInput from "../base/BaseInput";
import { Button } from "../ui/button";
import { sendVerificationCode, signUp } from "@/lib/auth/api";
import Loading from "../base/Loading";
interface Props {
  checkSignUp: (value: boolean) => void;
  checkSignIn: (value: boolean) => void;
  checkSendVerifyCode: (value: boolean) => void;
  setGetEmail: React.Dispatch<React.SetStateAction<string>>;
}
const SignUp: React.FC<Props> = ({
  checkSignUp,
  checkSignIn,
  checkSendVerifyCode,
  setGetEmail,
}) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const signUpData = await signUp(formData?.email, formData?.password);
    if (signUpData.message === "user already exist" || signUpData.status) {
      setGetEmail(formData?.email);

      const verifyData = await sendVerificationCode(formData?.email);
      console.log(verifyData);
      if (verifyData.success) {
        checkSendVerifyCode(true);
        setLoading(false);
        checkSignUp(false);
      } else {
        console.log(verifyData.success);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
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
            <span
              className="text-blue-700 cursor-pointer"
              onClick={() => {
                checkSignIn(true);
                checkSignUp(false);
              }}
            >
              Sign In
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default SignUp;
