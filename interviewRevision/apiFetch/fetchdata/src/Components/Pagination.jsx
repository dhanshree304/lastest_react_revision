import React from "react";


const Pagination = ({ totalPages,setParams,params }) => {

  

  return (
    <div style={{marginTop:"20px"}}>
      <button
        onClick={() => setParams((prev) => ({ ...prev, page: prev.page - 1 }))}
        disabled={params.page === 1}
      >
        PREV
      </button>
      <button disabled={true}>{params.page}</button>
      <button
        onClick={() => setParams((prev) => ({ ...prev, page: prev.page + 1 }))}
        disabled={params.page === totalPages}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
