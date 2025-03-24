import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeModal } from "@/store/slices/modal/modalSlice";
import { IoMdClose } from "react-icons/io";

const BaseModal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);

  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-50 w-full h-screen justify-center items-center"
      onClick={() => dispatch(closeModal())}
    >
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className=" p-4 pt-2 rounded-sm shadow-lg  inset-1 w-[400px]  bg-white relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className=" absolute to-0 right-1 cursor-pointer "
            onClick={() => dispatch(closeModal())}
          >
            <IoMdClose />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
