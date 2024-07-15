import React from "react";

const Loading = () => {
  return (
    <div className="absolute w-screen min-h-screen bg-teal-400 inset-0 flex justify-center items-center">
      {Array(3)
        .fill(1)
        .map((item, idx) => (
          <span
            className={`w-6 h-6 rounded-full mx-4 bg-gray-50 animate-bounce`}
            style={{ animationDelay: `${idx * 100}ms` }}
          ></span>
        ))}
    </div>
  );
};

export default Loading;
