import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="flex justify-center flex-col"
        style={{ fontSize: "2.5rem" }}
      >
        Lorem ipsum dolor amet,
        <span className="block text-semi-red">consectetur adipiscing</span>
        elit
        <div className="mt-5">
          <button className="bg-semi-red hover:bg-red-900 text-white  font-semibold text-xl py-3 px-20 rounded-full	xs:w-auto w-full   ">
            Daftar Sekarang
          </button>
        </div>
      </div>
      <div className="flex items-center lg:flex-row-reverse ">
        <Image
          src="/picture.png"
          alt="Picture of Boat"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
