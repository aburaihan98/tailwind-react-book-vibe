import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utils/addToDB";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useLoaderData();

  const book = books?.find((book) => book.bookId === parseInt(bookId));

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleReadList = (book) => {
    addToStoredReadList(book?.bookId);
  };
  const handleWishList = (book) => {
    addToStoredWishList(book?.bookId);
  };

  return (
    <div className="mb-24 flex justify-center  gap-12">
      <div className="p-[74px] bg-[#1313130D] rounded-2xl">
        <img src={image} alt={bookName} />
      </div>
      <div>
        <h2 className="font-bold text-[40px] mb-4">{bookName}</h2>
        <p className="font-medium text-xl mb-6 text-[#131313CC]">
          By : {author}
        </p>
        <p className="font-medium text-xl py-4 border-y mb-6 text-[#131313CC]">
          {category}
        </p>
        <p className="mb-6 text-[#131313B3]">
          <span className="font-bold text-[#131313]">Review</span> : {review}
        </p>
        <div className="flex items-center gap-4 pb-6 border-b mb-6">
          <h3 className="font-bold">Tag</h3>
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="py-2 px-4  bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-3xl"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[60px] mb-8">
          <div className="text-[#131313B3] space-y-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold space-y-3">
            <p className=" ">{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleReadList(book)}
            className="py-[18px] px-7 font-semibold text-lg border rounded-lg "
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(book)}
            className="py-[18px] px-7 font-semibold text-lg rounded-lg bg-[#50B1C9] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
