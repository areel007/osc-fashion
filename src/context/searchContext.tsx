import { ReactEventHandler, ReactNode, createContext, useState } from "react";

type SearchBoxProps = {
    children: ReactNode;
}

type SearchBoxType = {
    textInput: string;
    handleChange: ReactEventHandler;
    handleSubmit: ReactEventHandler;
}

export const SearchBoxContext = createContext<SearchBoxType | undefined>(undefined);

export const SearchBoxContextProvider = ({ children }: SearchBoxProps) => {
    const [textInput, setTextInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
    };

    const handleSubmit = () => {
        alert(textInput);
    }

    return (
        <SearchBoxContext.Provider value={{ textInput, handleChange, handleSubmit }}>
            {children}
        </SearchBoxContext.Provider>
    );
};
