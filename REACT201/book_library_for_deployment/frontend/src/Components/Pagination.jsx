import { useSelector } from "react-redux";

const Pagination = ({ handlePrev, handleNext, currPage }) => {
  const pagination = useSelector((store) => store.AppReducer.pagination);
  const { totalPages } = pagination;
 
  return (
    <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
      <button onClick={handlePrev} disabled={currPage === 1}>
        PREV
      </button>
      <button disabled="true">{currPage}</button>
      <button onClick={handleNext} disabled={totalPages === currPage}>
        NEXT
      </button>
    </div>
  );
};

export { Pagination };
