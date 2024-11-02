import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdFindInPage } from "react-icons/md";

export default function WishListBook({ book }) {
  const {
    image,
    bookName,
    author,
    tags,
    category,
    publisher,
    totalPages,
    yearOfPublishing,
    rating,
    review,
  } = book;

  return (
    <>
      <div className="p-6 border rounded-2xl flex gap-4 mb-6">
        <div className="w-[230px]  rounded-2xl bg-[#1313130D]  flex justify-center items-center">
          <img className="w-[122px] h-[172px] " src={image} alt={bookName} />
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">{bookName}</h2>
          <p className="text-[#131313CC] font-medium mb-4">By : {author}</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="font-bold">Tag</div>
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="py-2 px-4 font-medium rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]"
                >
                  #{tag}
                </button>
              ))}
            </div>
            <div className="flex justify-center items-center gap-3">
              <div>
                <CiLocationOn className="text-2xl" />
              </div>
              <p className="text-[#131313CC]">
                Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 pb-4 border-b mb-4">
            <div className="flex items-center gap-2.5">
              <div>
                <GoPeople />
              </div>
              <h4 className="text-[#13131399]">Publisher: {publisher}</h4>
            </div>
            <div className="flex items-center gap-2.5">
              <div>
                <MdFindInPage />
              </div>
              <h4 className="text-[#13131399]">Page: {totalPages}</h4>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="py-2.5 px-5 rounded-3xl bg-[#328EFF26] text-[#328EFF]">
              Category: {category}
            </button>
            <button className="py-2.5 px-5 rounded-3xl bg-[#FFAC3326] text-[#FFAC33]">
              Rating: {rating}
            </button>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn py-2.5 px-5 rounded-3xl bg-[#23BE0A] text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Book details!</h3>
          <p className="py-4">{review}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
