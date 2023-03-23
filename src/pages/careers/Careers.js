import { useLoaderData, Link } from "react-router-dom";

function Careers(props) {
    const careers = useLoaderData()

    return (
        <div className="max-w-3xl mx-auto">
             {careers.map(career => (
                <Link to={career.id.toString()} key={career.id} className="block bg-gray-200 p-5 my-5 rounded no-underline">
                    <p className="m-0 hover:text-blue-600">{career.title}</p>
                    <p className="m-0 text-xs">Based in {career.location}</p>
                </Link>
             ))}
        </div>
    );
}
export default Careers;

export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers');

    return res.json()
}

