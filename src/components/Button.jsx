import React from "react";
import classnames from "tailwindcss-classnames";

const Button = ({ children, bg, type, handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit ? handleSubmit : () => null}
      type="button"
      className={classnames(
        "text-center transition  text-sm sm:text-base border border-inherit font-manrope tracking-wide font-semibold rounded-lg p-3 ",
        bg,
        bg === "bg-[#32D583]"
          ? "text-white hover:text-[#32D583] hover:border-[#E6E7EC] border-[#32D583] hover:bg-white"
          : "border-[#E6E7EC] text-[#101828] hover:shadow-lg",
        type === "big" ? `w-full ` : "  flex justify-between items-center gap-2"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
