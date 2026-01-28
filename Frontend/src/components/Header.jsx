import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="w-full flex h-[80px] items-center bg-[#F6F6F699] px-10 font-poppins">
      
      <Link
        to="/"
        className="text-[#33B44A] font-semibold text-[16px] ml-[298px]"
      >
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={to}>
            <span className="mx-2">|</span>
            <Link
              to={to}
              className={`font-semibold text-[16px] ${
                index === pathnames.length - 1
                  ? "text-black"
                  : "text-[#33B44A]"
              }`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Header;
