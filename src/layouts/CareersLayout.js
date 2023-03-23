import { Outlet } from "react-router-dom";


function CareersLayout(props) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">Careers</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum!
      </p>

      <Outlet/>
    </div>
  );
}

export default CareersLayout;
