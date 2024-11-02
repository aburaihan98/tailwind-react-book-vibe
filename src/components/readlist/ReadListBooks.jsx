import React from "react";
import ReadListBook from "./ReadListBook";

export default function ReadListBooks({ books }) {
  return (
    <div className="mt-8">
      {books &&
        books.map((book) => <ReadListBook key={book?.bookId} book={book} />)}
    </div>
  );
}
