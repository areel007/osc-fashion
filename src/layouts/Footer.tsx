import { Link } from "react-router-dom"
import { X } from "../components/X"
import { IG } from "../components/IG"
import { Pinterest } from "../components/Pinterest"

export const Footer = () => {
  return (
    <div className="pt-[40px] md:pt-[60px] xl:pt-[100px] bg-[#292A30]">
      <div className="w-[90%] xl:w-[1100px] mx-auto">
        <div className="pb-[40px] md:pb-[60px] lg:pb-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px]">
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <div className="flex flex-col">
              <span className="text-white text-[16px] md:text-[22px] uppercase">Newsletter</span>
              <span className="text-[#f5f5f5] text-[14px] md:text-[16px]">Get the latest news & updates from OSC Fashion</span>
            </div>

            <div className="w-full border-b border-[#f5f5f5] py-[10px] flex gap-[10px]">
              <input type="text" placeholder="Your email address" className="bg-transparent w-full outline-none text-white" />
              <button className="uppercase text-white text-[14px]">subscribe</button>
            </div>
          </div>

          <div>
            <nav className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] text-gray-300 text-[14px] md:text-[16px] mb-[20px]">
              <span>Become a reseller</span>
              <Link to="/privacy-policy">Privacy policy</Link>
              <Link to="/privacy-policy">FAQ</Link>
              <Link to="/privacy-policy">Term of use</Link>
            </nav>
            <div className="flex gap-[20px]">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <X />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <IG />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <Pinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-[90%] xl:w-[1100px] mx-auto py-[10px]">
          <span className="text-white text-[14px]">&copy; 2023 OSC Fashion. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}
