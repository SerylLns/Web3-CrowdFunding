import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] text-grayLight mb-2 ">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[12px] sm:px-[15px] p-[20px] focus:border-pink-500 focus:border outline-none border-[1px] 
          border-grayLight bg-transparent text-white text-[14px] 
          placeholder:text-grayDarker rounded-[10px] sm:win-w-[300px]"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[12px] sm:px-[15px] p-[20px] focus:border-pink-500 focus:border outline-none border-[1px] 
            border-grayLight bg-transparent text-white text-[14px] 
            placeholder:text-grayDarker rounded-[10px] sm:win-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;
