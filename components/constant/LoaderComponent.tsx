import Image from "next/image";

const LoaderComponent = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        width={50}
        height={50}
        alt="loading-icon"
      />
    </div>
  );
};

export default LoaderComponent;
