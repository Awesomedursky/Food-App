import React from 'react';

const Button = ({ children, inverted }) => {
  return (
    <div
      className={`${
        inverted
          ? 'dark:bg-[#F17E6C] dark:border border border-[#F17E6C] text-[#F17E6C] hover:bg-[#F17E6C] dark:hover:bg-transparent dark:hover:border hover:text-white hover:border hover:border-[#F17E6C] dark:text-white'
          : 'text-white dark:bg-transparent bg-[#F17E6C] border dark:hover:bg-[#F17E6C] hover:border-[#F17E6C] hover:bg-white hover:text-[#F17E6C] dark:hover:text-white'
      } transition-all px-3 py-1 rounded-lg font-bold duration-300 ring-none`}
    >
      {children}
    </div>
  );
};

export default Button;
