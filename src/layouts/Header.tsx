import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";
import { useMobileMenu } from "../hooks/useMobileMenu";
import {useNav} from "../hooks/useNav"
import { ArrowDown } from "../components/ArrowDown";
import { useLocation } from "react-router-dom";
import { Hamburger } from "../components/Hamburger";
import { Cancel } from "../components/Cancel";
import { Cart } from "../components/Cart";

export const Header = () => {
  const navigations = useNav()
  const location = useLocation();
  const isMobileMenuOut = useMobileMenu()

  return (
    <header className="fixed md:sticky top-0 md:top-[-100px] w-full z-[20] bg-white">
      <div>
        <div className="py-[10px] md:py-[20px] flex items-center justify-between w-[90%] xl:w-[1100px] mx-auto">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-[40px]">
            <Search />
            <Cart />
          </div>

          <div className="block md:hidden" onClick={isMobileMenuOut?.openMobileMenu}>
            {isMobileMenuOut?.isMobileMenuOut ? <Cancel /> : <div className="flex gap-[5px] items-center">
              <Cart />
              <Hamburger />
            </div>}
          </div>
        </div>

        <nav className="relative py-[20px] hidden md:block">
          <div className="flex justify-center gap-[30px] w-[90%] xl:w-[1100px] mx-auto">
            {navigations?.map((_nav, index) => (
              <div key={index} className="group">
                <a
                  href={_nav.to}
                  className={`flex items-center gap-[5px] uppercase text-[12px] 2xl:text-[14px] ${location.pathname === _nav.to ? "font-[700]" : null
                    }`}
                >
                  {_nav.name}
                  {_nav.sub ? <ArrowDown /> : null}
                </a>
                {_nav.sub ? (
                  <div className="absolute top-[100%] bg-white w-full left-0 invisible group-hover:visible transition-all ease-in-out translate-y-[10px] group-hover:translate-y-0 opacity-0 group-hover:opacity-[1] duration-[.5s]">
                    <div className="w-[90%] xl:w-[1100px] mx-auto border-t border-gray-400 py-[40px] flex flex-col gap-[10px]">
                      {_nav.sub?.map((_sub, index) => {
                        return (
                          <a
                            href={_sub.to}
                            key={index}
                            className="uppercase text-[12px] 2xl:text-[14px] hover:font-[700] w-[min-content] whitespace-nowrap"
                          >
                            {_sub.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
