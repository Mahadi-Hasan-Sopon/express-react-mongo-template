/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  return (
    <div className="pt-7 pb-4 z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start w-1/3 md:w-1/2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 p-2 shadow bg-base-100 space-y-4"
            >
              <NavbarLinks LiClass={"px-8 md:px-12"} />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end w-2/3 md:w-1/2">
          <div className="flex items-center gap-2.5">
            {/* <div className="tooltip group mr-0.5 z-50">
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User image"
                />
              ) : (
                <>
                  <img
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer border p-0.5"
                    src={AvatarIcon}
                    alt="Avatar icon"
                  />
                </>
              )}
              {user?.email && (
                <div className="tooltip-text absolute bg-black text-white py-2 px-4 rounded-md text-sm whitespace-nowrap opacity-0 transition-opacity duration-200 -top-2/3 left-1/2 transform -translate-x-1/2 group-hover:opacity-50">
                  {user?.email}
                </div>
              )}
            </div> */}
            <RxAvatar className="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer" />
            <Link
              to={"/login"}
              className="text-lg md:text-xl py-2 px-8 md:px-10 text-white bg-[#403F3F] rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const NavbarLinks = ({ LiClass }) => {
  const navLinks = (
    <>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
              : "font-medium text-slate-800"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
              : "font-medium text-slate-800"
          }
        >
          Users
        </NavLink>
      </li>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          to="/blank"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
              : "font-medium text-slate-800"
          }
        >
          Coming soon
        </NavLink>
      </li>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
              : "font-medium text-slate-800"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return navLinks;
};
