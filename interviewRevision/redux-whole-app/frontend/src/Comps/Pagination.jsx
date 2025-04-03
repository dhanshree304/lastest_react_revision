
import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({pageParams,setPageParams}) => {
const pagination = useSelector((store)=>store.reducer_2.pagination)
const {totalPages} = pagination

  return (
    <div>
      <button
        onClick={() =>
          setPageParams((prev) => ({ ...prev, page: prev.page - 1 }))
        }
        disabled={pageParams.page===1}
        className="border"
      >
        PREV
      </button>
      <button className="border" disabled={true}>{pageParams.page}</button>
      <button
        onClick={() =>
          setPageParams((prev) => ({ ...prev, page: prev.page + 1 }))
        }
        disabled={pageParams.page===totalPages}
        className="border"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
