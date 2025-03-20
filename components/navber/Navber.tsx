"use client";

import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modal/modalSlice";
import BaseModal from "../modal/BaseModal";
import Authentication from "../authentication/Authentication";

const Navber = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <div className="flex justify-between max-w-[1400px] mx-auto">
          <div>Navber</div>
          <Link href="/login">Login</Link>
          <BaseModal>
            <Authentication></Authentication>
          </BaseModal>
          <div>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded"
              onClick={() => dispatch(openModal())}
            >
              click
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navber;
