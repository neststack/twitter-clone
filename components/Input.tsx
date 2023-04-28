'use client';

import { useEffect, useState } from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  const [modifiedType, setModifiedType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((value) => !value);
  };

  useEffect(() => {
    if (type === 'password') {
      if (showPassword) {
        setModifiedType('text');
      } else {
        setModifiedType('password');
      }
    }
  }, [type, showPassword]);

  return (
    <div className="relative">
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={modifiedType}
        className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
      />
      {type === 'password' && (
        <div
          onClick={toggleShowPassword}
          className="absolute h-full w-16 right-0 top-0 cursor-pointer flex items-center"
        >
          {showPassword ? (
            <VscEyeClosed
              size={24}
              color="white"
              className="w-full"
              title="Hide password"
            />
          ) : (
            <VscEye
              size={24}
              color="white"
              className="w-full"
              title="Show password"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
