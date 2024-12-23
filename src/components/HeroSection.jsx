import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">
          {" "}for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 rounded-md">Start for free</a>
        <a href="#" className="px-4 py-3 rounded-md border mx-3">Documentation</a>
      </div>
      <div className="flex justify-center mt-10">
        <video autoPlay loop muted className="rounded-lg w-1/2 border mx-2 my-2 border-orange-700"  src={video1} type="video/mp4">video not supported</video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border mx-2 my-2 border-orange-700"  src={video2} type="video/mp4">video not supported</video>
      </div>
    </div>
  );
};

export default HeroSection;
