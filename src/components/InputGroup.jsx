import React from "react";

const InputGroup = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  setValue,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="form-control max-w-xs">
      <label className="input-group input-group-vertical">
        <span className="font-base font-semibold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className="input input-bordered"
          onChange={handleChange}
          name={name}
        />
      </label>
    </div>
  );
};

export default InputGroup;
