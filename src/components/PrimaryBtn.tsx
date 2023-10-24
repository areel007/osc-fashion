import { ReactEventHandler, ReactNode } from "react"

type PrimaryBtnProps = {
    icon?: ReactNode;
    btnText: string;
    btnType: 'button' | 'submit' | undefined;
    btnAction: ReactEventHandler;
    btnBg: string;
    btnBorder: string;
    btnTextColor: string;
    btnRadius?: string;
}

export const PrimaryBtn = ({ icon, btnText, btnType, btnAction, btnBg, btnBorder, btnTextColor, btnRadius }: PrimaryBtnProps) => {



    return <button type={btnType} onClick={btnAction} className={`p-[10px_20px] text-white min-w-[100px] flex items-center gap-[5px] capitalize bg-transparent justify-center`} style={{ backgroundColor: btnBg, border: `1px solid ${btnBorder}`, color: btnTextColor, borderRadius: btnRadius }}>
        {icon}
        {btnText}
    </button>
}