// "use client";

import NavLink from "./NavLink";
// import { useAuth } from "@/context/AuthContext";

interface NavLinkItem {
  id: number;
  children: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    id: 1,
    children: "Home",
    path: "/",
  },
  {
    id: 2,
    children: "Blogs",
    path: "/blogs",
  },
];

function Header() {
  // const { user, isLoading } = useAuth();

  const user = false;

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300
        text-sm sm:text-lg
        `}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">Profile</NavLink>
            ) : (
              <NavLink path="/signin">Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
