import { FaSpinner } from "react-icons/fa";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start pt-40 bg-[#282a36]">
      <FaSpinner className="animate-spin text-5xl text-[#50fa7b]" />
      <p className="mt-4 text-lg font-medium text-[#f8f8f2]">
        Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;
