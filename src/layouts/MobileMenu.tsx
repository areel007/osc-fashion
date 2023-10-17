import { useContext, useState } from "react";
import { MobileMenuContext, NavigationContext } from "../context/context";
import { ArrowDown } from "../components/ArrowDown";
import { Search } from "../components/Search";

export const MobileMenu = () => {
  const isMobileMenuOut = useContext(MobileMenuContext);
  const navigations = useContext(NavigationContext);

  // Create a separate state for each navigation item
  const [expandedItems, setExpandedItems] = useState<boolean[]>([]);

  const handleShowDropdown = (index: number) => {
    // Toggle the state of the clicked navigation item
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <nav
      className={`fixed w-[100%] top-[77.885px] z-[12] transition ease-in-out duration-[.5s] ${isMobileMenuOut ? "translate-x-0" : "translate-x-[-100%]"
        }`}
    >
      <div className="w-[90%] mx-auto  p-[20px] bg-white flex flex-col gap-[15px] shadow">
        <div>
          <Search />
        </div>
        {navigations?.map((_nav, index) => {
          return (
            <div key={index} className="">
              <div className="flex items-center gap-[10px]">
                <a href={_nav.to} className="uppercase text-[12px]">
                  {_nav.name}
                </a>
                {_nav.sub ? (
                  <div onClick={() => handleShowDropdown(index)}>
                    <ArrowDown />
                  </div>
                ) : null}
              </div>
              <div className={`ml-[20px] ${expandedItems[index] ? 'block' : 'hidden'}`}>
                {_nav.sub?.map((_sub, subIndex) => {
                  return (
                    <a href={_sub.to} key={subIndex} className="text-[12px] uppercase">
                      {_sub.name}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
