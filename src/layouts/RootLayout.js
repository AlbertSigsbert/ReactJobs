import { Link, NavLink, Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <header className="mx-[6%] py-4">
        <nav className="flex gap-4 justify-end">
          <Link className="mr-auto" to="/">
            <h1 className="text-2xl font-bold">ReactJobs</h1>
          </Link>
          <NavLink
            className={({ isActive }) => (isActive ? "underline font-semibold" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline font-semibold" : "")}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline font-semibold" : "")}
            to="help"
          >
            Help
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
