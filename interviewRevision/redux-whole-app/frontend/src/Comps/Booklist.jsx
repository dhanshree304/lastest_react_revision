import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BoookCard";
import { getBooks } from "../Redux/App/action";
import { useSearchParams } from "react-router-dom";

const Booklist = ({ pageParams }) => {
  const { books, isLoading } = useSelector((store) => store.reducer_2);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const orderBy = searchParams.get("order");
    const category = searchParams.getAll("category");
    const sortBy = searchParams.get("sortBy");
    let getBookParams = {
      params: {
        category: category,
        sortBy: sortBy ,
        order: orderBy,
        page: pageParams.page,
        limit: pageParams.limit,
      },
    };

    dispatch(getBooks(getBookParams));
  }, [searchParams, dispatch, pageParams]);

  if (isLoading) {
    return <h1 className="text-3xl font-bold">Loading....</h1>;
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-20">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Booklist;
