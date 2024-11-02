import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="py-12 flex justify-between items-center">
      <h2 className="font-bold text-3xl">Book Vibe</h2>
      <div className="font-semibold text-lg flex gap-4">
        <button>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "py-[14px] px-5 rounded-lg border border-[#23BE0A] text-[#23BE0A]"
                : ""
            }
          >
            {" "}
            Home
          </NavLink>
        </button>
        <button className="py-[14px] px-5 rounded-lg text-[#131313CC]">
          <NavLink
            to="/listedbooks"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "py-[14px] px-5 rounded-lg border border-[#23BE0A] text-[#23BE0A]"
                : ""
            }
          >
            Listed Books
          </NavLink>
        </button>
        <button className="py-[14px] px-5 rounded-lg text-[#131313CC]">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "py-[14px] px-5 rounded-lg border border-[#23BE0A] text-[#23BE0A]"
                : ""
            }
          >
            Pages to Read
          </NavLink>
        </button>
      </div>
      <div className="flex gap-4">
        <button className="py-[18px] px-7 rounded-lg bg-[#23BE0A] text-white font-semibold text-lg">
          Sign In
        </button>
        <button className="py-[18px] px-7 rounded-lg bg-[#59C6D2] text-white font-semibold text-lg">
          Sign In
        </button>
      </div>
    </div>
  );
}
