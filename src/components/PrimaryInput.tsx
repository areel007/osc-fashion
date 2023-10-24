import { ReactEventHandler, ReactNode } from "react";

type InputProps = {
    inputType: string;
    placeholder: string | undefined;
    icon: ReactNode | undefined;
    inputValue: string | number | undefined;
    handleChange: ReactEventHandler;
}

export const PrimaryInput = ({ inputType, placeholder, icon, inputValue, handleChange }: InputProps) => {
    return <div className="flex gap-[5px] items-center">
        {icon}
        <input type={inputType} placeholder={placeholder} value={inputValue} onChange={handleChange} />
    </div>
}