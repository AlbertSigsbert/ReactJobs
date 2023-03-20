import { NavLink, Outlet } from "react-router-dom";
import { ChevronRight } from "../components/Icons";

function HelpLayout(props) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">Website Help</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum!
      </p>

      {/* BreadCrumbs */}
      <nav
        className="flex items-center justify-center my-8"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <NavLink
              to="faq"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold"
                  : "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
              }
            >
              View the FAQ
            </NavLink>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight />
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline font-semibold"
                    : "ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                }
              >
                Contact Us
              </NavLink>
            </div>
          </li>
        </ol>
      </nav>

      {/* Page Output */}
      <Outlet />
    </div>
  );
}

export default HelpLayout;
