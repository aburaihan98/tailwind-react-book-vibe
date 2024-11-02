import BannerImage from "../../assets/images/banner.png";

export default function Hero() {
  return (
    <div className="mb-24 bg-[#1313130D] rounded-3xl py-20 px-28 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-[56px] mb-12">
          Books to freshen up <br className=" hidden lg:block" /> your bookshelf
        </h1>
        <button className="py-[18px] px-7 rounded-lg bg-[#23BE0A] text-white font-semibold text-lg">
          View The List
        </button>
      </div>
      <div>
        <img src={BannerImage} alt="Banner image" />
      </div>
    </div>
  );
}
