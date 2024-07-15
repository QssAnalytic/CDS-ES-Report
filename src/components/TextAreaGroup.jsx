import React from "react";

const TextAreaGroup = ({ label, name, placeholder, value, setValue }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="form-control">
      <label className="input-group input-group-vertical">
        <span className="font-semibold text-base">{label}</span>
        <textarea
          className="textarea textarea-bordered h-56"
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        ></textarea>
      </label>
    </div>
  );
};

export default TextAreaGroup;
