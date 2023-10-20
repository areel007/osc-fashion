import { formatMoney } from "../utils/formatMoney";
import { Love } from "./Love"
interface ProductProduct {
    name: string;
    price: string;
    imgOne: string;
    imgTwo?: string;
    to: string;
}

export const ProductCard = ({ name, price, imgOne, imgTwo, to }: ProductProduct) => {

    return <div className="relative">
        <div className="absolute top-[20px] right-[20px] z-[10]">
            <Love />
        </div>
        <a href={to} className="w-full h-auto cursor-pointer relative" target="_black" rel="nonopener npnreferrer">
            <div className="w-full h-[360px] relative group overflow-hidden">

                <img src={imgOne} alt="osc fashion" className="w-full opacity-[1] transition ease-in-out duration-[1s] group-hover:opacity-[0] absolute top-0 left-0 h-full object-cover" />

                {imgTwo ? <img src={imgTwo} alt="osc fashion" className="w-full opacity-0 transition ease-in-out duration-[1s] group-hover:opacity-[1] absolute top-0 left-0 h-full object-cover" /> : <img src={imgOne} alt="osc fashion" className="w-full opacity-0 transition ease-in-out duration-[1s] group-hover:opacity-[1] absolute top-0 left-0 h-full object-cover" />}

                <div className="w-full py-[15px] flex justify-center items-center bg-black opacity-0 absolute bottom-0 z-[10] translate-y-[100%] transition ease-in-out duration-[1s] hover:bg-red-500 group-hover:translate-y-0 group-hover:opacity-[1]">
                    <span className="uppercase font-[300] text-white text-[16px] tracking-[2px]">Add to cart</span>
                </div>
            </div>

            <div className="py-[20px] flex flex-col gap-[10px]">
                <span className="capitalize text-[16px] md:text-[20px] leading-[1] text-gray-500">{name}</span>
                <span className="text-[14px] md:text-[16px] text-black font-[500]">{formatMoney(parseFloat(price), 'NGN')}</span>
            </div>
        </a>
    </div>
}