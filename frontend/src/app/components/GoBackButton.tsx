"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='mt-4 inline-block bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md cursor-pointer'
    >
      ← Geri Dön
    </button>
  );
};

export default GoBackButton;
