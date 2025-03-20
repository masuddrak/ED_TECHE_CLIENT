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
      className="fixed inset-0 flex items-center justify-center  bg-black opacity-75 "
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="bg-[#fff] p-4 pt-2 rounded-sm shadow-lg min-w-[400px] relative"
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
  );
};

export default BaseModal;
