import React, { useState } from "react";
import { RiFileCopy2Line } from "react-icons/ri";

const CopyToClipboard = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className='relative'>
      <span
        onClick={handleCopy}
        className='cursor-pointer'>
        <RiFileCopy2Line className='inline-block text-gray-600 hover:text-gray-800 transition duration-300' />
      </span>
      {isCopied && (
        <span className='absolute left-0 bottom-0 bg-gray-900 text-white px-2 py-1 rounded-md text-xs'>
          Copied!
        </span>
      )}
    </div>
  );
};

export default CopyToClipboard;
