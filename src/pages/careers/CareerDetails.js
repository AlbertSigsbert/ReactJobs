import { useLoaderData } from "react-router-dom";

function CareerDetails(props) {
  // const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto my-5 p-5 rounded bg-slate-100 text-center">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="my-2 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        consequatur dolor eaque dolores suscipit! Est aperiam qui ipsa iste
        fuga?
      </div>
    </div>
  );
}

export default CareerDetails;

//loader fn
export const careerLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if(!res.ok){
    throw Error('Could not find the career')
  }

  return res.json();
};
