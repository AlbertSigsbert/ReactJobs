import { Link, useRouteError } from "react-router-dom";


function CareersError(props) {
    const error = useRouteError()
    return (
      
          <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl text-center text-red-500 font-semibold my-8">
            Error
          </h1>
          <p className="text-lg text-center">{error.message}</p>
    
          <div className="flex justify-center">
            <Link
              className="inline-block mx-auto text-center my-4 p-2 bg-gray-300 rounded"
              to="/"
            >
              Go to Home
            </Link>
          </div>
        </div>
    );
}

export default CareersError;