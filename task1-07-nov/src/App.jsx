import React from "react";
import ShoppingCart from "./ShoppingCart";
import UploadResume from "./temp/resume";

export default function App() {
  return (
    <>
      {/* <div className="min-h-screen bg-gray-50 p-8">
        <ShoppingCart />
      </div> */}

      <div className="bg-gray-900 min-h-screen text-white">
        <UploadResume />
      </div>

    </>
  );
}
