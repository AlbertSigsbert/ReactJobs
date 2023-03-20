import { Link, NavLink, Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <header className="mx-[6%] py-4">
        <nav className="flex gap-4 justify-end">
          <Link className="mr-auto text-2xl font-bold" to="/">
            ReactJobs
          </Link>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="about"
          >
            About
          </NavLink>
        </nav>
      </header>
      <main className="mx-[6%] my-10">
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
