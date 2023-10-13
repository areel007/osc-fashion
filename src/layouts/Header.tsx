import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";
import { useContext } from "react";
import { HamburgerActionContext, MobileMenuContext, NavigationContext } from "../context/context";
import { ArrowDown } from "../components/ArrowDown";
import { useLocation } from "react-router-dom";
import { Hamburger } from "../components/Hamburger";
import { Cancel } from "../components/Cancel";

export const Header = () => {
  const navigations = useContext(NavigationContext);
  const location = useLocation();
  const handleOpenMobileMenu = useContext(HamburgerActionContext)
  const isMobileMenuOut = useContext(MobileMenuContext)

  return (
    <header className="py-[10px] md:py-[20px]">
      <div className="flex items-center justify-between w-[90%] xl:w-[1100px] mx-auto ">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden md:block">
          <Search />
        </div>

        <div className="block md:hidden" onClick={handleOpenMobileMenu}>
          {isMobileMenuOut ? <Cancel />: <Hamburger />}
        </div>
      </div>
      <nav className="relative py-[20px] hidden md:block">
        <div className="flex justify-center gap-[30px] w-[90%] xl:w-[1100px] mx-auto">
          {navigations?.map((_nav, index) => (
            <div key={index} className="group">
              <a
                href={_nav.to}
                className={`flex items-center gap-[5px] uppercase text-[12px] 2xl:text-[14px] ${
                  location.pathname === _nav.to ? "font-[700]" : null
                }`}
              >
                {_nav.name}
                {_nav.sub ? <ArrowDown /> : null}
              </a>
              {_nav.sub ? (
                <div className="absolute top-[100%] bg-gray-100 w-full left-0 invisible group-hover:visible transition-all ease-in-out translate-y-[10px] group-hover:translate-y-0 opacity-0 group-hover:opacity-[1] duration-[.5s]">
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
    </header>
  );
};
