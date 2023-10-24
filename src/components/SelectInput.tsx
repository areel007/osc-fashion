import { ReactEventHandler, useState } from "react"

type SelectInputProps = {
    selectedValue: string;
    handleSelectAction: ReactEventHandler;
    options: string[];
}

export const SelectInput = ({ selectedValue, handleSelectAction, options }: SelectInputProps) => {
    const [isDropdown, setIsDropdown] = useState(false)
    const handleOpenOptions = () => {
        setIsDropdown(prev => !prev)
    }

    return <div className="relative">
        <div className={`flex items-center justify-between w-full p-[10px] rounded ${isDropdown ? null : 'shadow'}`} onClick={handleOpenOptions}>
            {selectedValue}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

        </div>
        <ul className={`${isDropdown ? 'visible translate-y-0' : 'invisible'} translate-y-[10px] absolute top-full transition bg-white shadow-[0_4px] duration-300 ease-in-out w-full rounded-[0_0_5px_5px] overflow-hidden`}>
            {options.map((_option, index) => <li key={index} onClick={(e) => { handleSelectAction(e); setIsDropdown(false) }} className="p-[10px] hover:bg-gray-300">{_option}</li>)}
        </ul>
    </div>
}