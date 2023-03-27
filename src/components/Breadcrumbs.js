import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "./Icons";

function Breadcrumbs(props) {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <li key={crumb} className="inline-flex items-center">
          <Link to={currentLink}> {crumb} </Link>
          <ChevronRight/>
        </li>
      );
    });
  return (
    <nav
      className="flex items-center justify-center my-2"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumbs}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
