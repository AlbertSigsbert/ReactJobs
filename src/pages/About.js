import { useState } from "react";
import { Navigate } from "react-router-dom";

function About(props) {
  const [user, setUser] = useState("john");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl text-center font-semibold my-8">About</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed ipsa
        porro sit qui hic repudiandae nulla eveniet at! Molestiae laborum ab
        repellendus ad aspernatur nemo quae vitae aliquam debitis dolore
        numquam, hic ea velit natus cumque, voluptatibus quisquam cum voluptatem
        possimus explicabo? Sed optio neque quis id ad! Minus soluta voluptatum
        veniam at doloremque. Quibusdam, voluptate ducimus autem odit libero
        modi ratione nesciunt alias ipsum accusantium eveniet esse magnam harum
        molestias nobis mollitia commodi atque deleniti, rem iusto minima illum.
        Exercitationem, qui blanditiis hic velit quidem quos nostrum, delectus
        officiis, fuga minima ducimus? Error amet sequi dignissimos, omnis
        nesciunt nam adipisci exercitationem totam voluptate sit tempora
        explicabo. Voluptatem reiciendis soluta est pariatur assumenda eos
        officia ea accusamus velit. Provident quis ratione, cupiditate,
        quibusdam, distinctio suscipit obcaecati reprehenderit necessitatibus
        libero tempore dicta voluptatem? Sapiente architecto nostrum
        consequuntur ullam, reiciendis iure molestiae saepe voluptas delectus
        repellat natus? Consequatur voluptas placeat dolore.
      </p>
      <button
        onClick={() => setUser(null)}
        className="my-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Logout
      </button>
    </div>
  );
}

export default About;
