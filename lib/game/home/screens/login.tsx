import React from "react";
import Image from "next/image";
import { Power, RefreshCcw, Moon } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-red-400 to-blue-400">
      <div className="text-center w-96 mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/bg/user.png"
            alt="User Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h2 className="text-xl text-white">Guest</h2>

        <div className="flex justify-center items-center gap-6 mt-6">
          <button className="text-white hover:text-gray-300">
            <Moon size={24} />
          </button>
          <button className="text-white hover:text-gray-300">
            <RefreshCcw size={24} />
          </button>
          <button className="text-white hover:text-gray-300">
            <Power size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
