import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../Redux/App/action";
import { BookCard } from "./BookCard";
import { useSearchParams, useLocation } from "react-router-dom";

const BookList = ({pagination}) => {
  const allBooks = useSelector((store) => store.AppReducer.allbooks);
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    if (location || allBooks.length === 0) {
      //????????????????
      const orderBy = searchParams.get("sort");
      let getBookParams = {
        params: {
          category: searchParams.getAll("category"), //category la _ underscore nst
          sortBy: orderBy && "releaseYear",
           order: orderBy,
          page: pagination.currPage,
          limit: pagination.limit,
        },
      };

      dispatch(getAllBooks(getBookParams));
    }
  }, [location.search, dispatch, searchParams,pagination.currPage])

  return (
    <>
      {allBooks.map((book) => {
        return <BookCard key={book.id} bookData={book} />;
      })}
    </>
  );
};

export { BookList };
