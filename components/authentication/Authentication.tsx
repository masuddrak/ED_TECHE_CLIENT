import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import VerificationCodeInput from "@/components/authentication/VerificationCodeInput";
const Authentication = () => {
  const [isSignUp, setIsSignup] = useState(true);
  const [isSignInUp, setIsSignInup] = useState(false);
  const [isSendVerifyCode, setIsSendVerifyCode] = useState(false);
  const [getEmail,setGetEmail]=useState("")
  const checkSignUp = (value: boolean) => {
    setIsSignup(value);
  };
  const checkSignIn = (value: boolean) => {
    setIsSignInup(value);
  };
  const checkSendVerifyCode = (value: boolean) => {
    setIsSendVerifyCode(value);
  };
  console.log(getEmail)
  return (
    <>
      {isSignUp && (
        <div>
          <SignUp
            checkSignUp={checkSignUp}
            checkSignIn={checkSignIn}
            checkSendVerifyCode={checkSendVerifyCode}
            setGetEmail={setGetEmail}
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
          <VerificationCodeInput getEmail={getEmail}></VerificationCodeInput>
        </div>
      )}
    </>
  );
};

export default Authentication;
