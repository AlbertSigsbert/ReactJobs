import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl text-center font-semibold my-8">
        Page Not Found
      </h1>
      <p className="text-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed ipsa
        porro sit qui hic repudiandae nulla eveniet at! Molestiae laborum ab
        repellendus.
      </p>

      <div className="flex justify-center">
        <Link
          className="inline-block mx-auto text-center my-4 p-2 bg-gray-300"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
