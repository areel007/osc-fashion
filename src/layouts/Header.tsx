import {Link} from "react-router-dom"
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";
import {useContext} from "react"
import { NavigationContext } from "../context/context";

export const Header = () => {
  const navigations = useContext(NavigationContext)

  return <header>
    <div className="w-[90%] xl:w-[1100px] mx-auto py-[20px]">
      <div className="flex items-center justify-between mb-[20px]">
        <Link to='/'>
          <Logo />
        </Link>

        <Search />
      </div>
      <nav className="flex justify-center gap-[10px]">
        {
          navigations?.map((_nav, index) => <a href={_nav.to} key={index}>{_nav.name}</a>)
        }
      </nav>
    </div>
  </header>;
};
