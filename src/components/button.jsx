// write button card here




import React from "react";

const Button = ({ text }) => {
  return (
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      {text}
    </button>
  );
};

export default Button;