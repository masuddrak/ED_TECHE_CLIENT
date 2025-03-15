"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement } from "@/store/slices/counterSlice";
export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4 mt-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
}
