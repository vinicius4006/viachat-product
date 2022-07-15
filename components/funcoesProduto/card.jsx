import Lottie from "react-lottie";
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


export const Card = ({ srcIcone, title, description, size }) => {
  return (
    <div className="card">
      <div className="h-full flex flex-col items-start justify-around p-5">
 
        <Lottie options={{...defaultOptions, animationData: srcIcone}} height={100} width={100}  style={{cursor: 'context-menu'}} />

        <h1 className="font-bold relative">{title}</h1>
        <p
          className="text-sm 
        text-gray-600 relative 
        "
        >
          {description}
        </p>
      </div>
    </div>
  );
};
