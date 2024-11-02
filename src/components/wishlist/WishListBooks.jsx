import WishListBook from "./WishListBook";

export default function WishListBooks({ books }) {
  return (
    <div className="mt-8">
      {books.map((book) => (
        <WishListBook key={book?.bookId} book={book} />
      ))}
    </div>
  );
}
