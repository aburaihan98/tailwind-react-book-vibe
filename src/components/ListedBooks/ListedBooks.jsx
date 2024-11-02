import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utils/addToDB";
import WishListBooks from "../wishlist/WishListBooks";
import ReadListBooks from "./../readlist/ReadListBooks";

export default function ListedBooks() {
  let books = useLoaderData();
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);

  const handleSortByName = () => {
    const sortedList = [...read].sort((a, b) => {
      if (a.bookName < b.bookName) {
        return -1;
      }
      if (a.bookName > b.bookName) {
        return 1;
      }
      return 0;
    });
    setRead(sortedList);
  };

  useEffect(() => {
    const read = getStoredReadList();
    let readList = books.filter((book) => read.includes(book?.bookId));
    setRead(readList);

    const wishListIds = getStoredWishList();
    const wishLists = books.filter((book) =>
      wishListIds.includes(book?.bookId)
    );
    setWish(wishLists);
  }, []);

  return (
    <>
      <h2 className="py-8 font-bold text-3xl bg-[#1313130D] rounded-2xl text-center mb-8">
        Books
      </h2>
      <div className="flex justify-center mb-14">
        <button
          onClick={handleSortByName}
          className="py-3.5 px-5 rounded-lg font-semibold text-lg bg-[#23BE0A] text-white flex items-center gap-5"
        >
          Sort By
          <IoIosArrowDown />
        </button>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab> Read Books</Tab>
            <Tab> Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadListBooks books={read} />
          </TabPanel>
          <TabPanel>
            <WishListBooks books={wish} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
