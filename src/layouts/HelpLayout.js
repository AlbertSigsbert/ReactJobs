import { NavLink, Outlet } from "react-router-dom";

function HelpLayout(props) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">Website Help</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum!
      </p>

      <nav class="flex items-center justify-center my-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
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
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
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
      {/* <nav className="flex items-center space-x-4 my-7">
        <NavLink className={({ isActive }) => (isActive ? "underline font-semibold" : "")} to="faq">View the FAQ</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "underline font-semibold" : "")} to="contact">Contact Us</NavLink>
      </nav> */}

      <Outlet />
    </div>
  );
}

export default HelpLayout;
