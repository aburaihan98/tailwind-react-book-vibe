import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function Book({ book }) {
  const { bookId, image, tags, bookName, author, category } = book;
  const navigate = useNavigate();

  const handleBookDetails = (book) => {
    navigate(`/bookDetails/${bookId}`);
  };

  return (
    <div
      onClick={() => handleBookDetails(book)}
      className="p-6 border rounded-2xl cursor-pointer"
    >
      <div className="bg-[#F3F3F3] flex justify-center items-center rounded-2xl mb-6">
        <img className="h-[166px] my-8" src={image} alt={bookName} />
      </div>
      <div className="flex gap-3 mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="py-2 px-4 font-medium rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]"
          >
            {tag}
          </button>
        ))}
      </div>
      <h3 className="font-bold text-2xl mb-4">{bookName}</h3>
      <p className="font-medium pb-5 mb-5 border-b border-dashed">
        By : {author}
      </p>
      <div className="font-medium text-[#131313CC] flex justify-between ">
        <p>{category}</p>
        <div className="flex items-center gap-2.5">
          <p>5.00</p>
          <p>
            <CiStar />
          </p>
        </div>
      </div>
    </div>
  );
}
