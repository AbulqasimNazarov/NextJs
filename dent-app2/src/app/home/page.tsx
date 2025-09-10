"use client";

import Tooth3D from "@/app/components/Tooth3D";
import Navbar from "@/app/components/navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center flex-1 w-full">
        <Tooth3D />
      </div>
    </div>
  );
}
