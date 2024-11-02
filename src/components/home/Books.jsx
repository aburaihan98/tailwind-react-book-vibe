import { useEffect, useState } from "react";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      {books.map((book) => (
        <Book key={book?.bookId} book={book} />
      ))}
    </div>
  );
}
