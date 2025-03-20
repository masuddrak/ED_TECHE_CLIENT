import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import VerificationCodeInput from "@/components/authentication/VerificationCodeInput";
const Authentication = () => {
  const [isSignUp, setIsSignup] = useState(true);
  const [isSignInUp, setIsSignInup] = useState(false);
  const [isSendVerifyCode, setIsSendVerifyCode] = useState(false);
  const checkSignUp = (value: boolean) => {
    setIsSignup(value);
  };
  const checkSignIn = (value: boolean) => {
    setIsSignInup(value);
  };
  const checkSendVerifyCode = (value: boolean) => {
    setIsSendVerifyCode(value);
  };
  return (
    <>
      {isSignUp && (
        <div>
          <SignUp
            checkSignUp={checkSignUp}
            checkSignIn={checkSignIn}
            checkSendVerifyCode={checkSendVerifyCode}
          ></SignUp>
        </div>
      )}
      {isSignInUp && (
        <div>
          <SignIn checkSignUp={checkSignUp} checkSignIn={checkSignIn}></SignIn>
        </div>
      )}
      {isSendVerifyCode && (
        <div>
          <VerificationCodeInput></VerificationCodeInput>
        </div>
      )}
    </>
  );
};

export default Authentication;
