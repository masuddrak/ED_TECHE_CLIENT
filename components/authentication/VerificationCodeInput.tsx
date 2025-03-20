import { useState, useRef,  } from "react";
import BaseInput from "../base/BaseInput";
import { Button } from "../ui/button";

const VerificationCodeInput = () => {
  const length = 6;
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  console.log(inputRefs.current);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.some((digit) => digit === "")) {
      alert("Please enter a valid OTP.");
      return;
    }
    console.log(otp.join(""));
  };

  return (
    <div
      className="flex items-center flex-col space-y-3
"
    >
      <div className="flex gap-2">
        {otp.map((_, index) => (
          <BaseInput
            key={index}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="w-[40px]"
          />
        ))}
      </div>
      <Button onClick={handleSubmit}>Verify OTP</Button>
    </div>
  );
};

export default VerificationCodeInput;
