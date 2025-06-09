"use client";
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { FaHome, FaUserCog, FaSignInAlt } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";
interface NavLinkItem {
  id: number;
  path: string;
  icon: React.ReactNode;
}

const navLinks: NavLinkItem[] = [
  {
    id: 1,
    path: "/",
    icon: <FaHome className="text-xl sm:text-3xl" />,
  },
  {
    id: 2,
    path: "/blogs",
    icon: <FaBloggerB className="text-xl sm:text-3xl" />,
  },
];

function Header() {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 
        transition-all duration-200 border-b border-b-secondary-300
        text-sm sm:text-lg ${
          isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
        }
        `}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.icon}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">
                <FaUserCog className="text-xl sm:text-3xl" />
              </NavLink>
            ) : (
              <NavLink path="/signin">
                <FaSignInAlt className="text-xl sm:text-3xl" />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
