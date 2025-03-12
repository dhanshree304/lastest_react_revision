import { BookList } from "../Components/BookList";
import { FilterComp } from "../Components/FilterComp";
import styled from "styled-components";
import { Pagination } from "../Components/Pagination";

import { useState } from "react";

const Home = () => {
  const [pagination, setPagination] = useState({ currPage: 1, limit: 4 });

  const handlePrev = () => {
    setPagination((prev) => ({ ...prev, currPage: prev.currPage - 1 }));
  };

  const handleNext = () => {
    setPagination((prev) => ({ ...prev, currPage: prev.currPage + 1 }));
  };

  return (
    <div>
      <MainOuterWrapper>
        <FilterComWrapper>
          <FilterComp />
        </FilterComWrapper>
        <BookListComWrapper>
          <BookList pagination={pagination} />
        </BookListComWrapper>
      </MainOuterWrapper>

      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        currPage={pagination.currPage}
      />
    </div>
  );
};

const FilterComWrapper = styled.div`
  width: 20%;
  position: sticky;
  top: 110px;
  @media (max-width: 480px) {
    /* Mobile */
    width: 90%;
    position: static;
   
  }
`;

const BookListComWrapper = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    /* Tablet */
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    /* Mobile */
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MainOuterWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;

  

  @media (max-width: 480px) {
    /* Mobile */
   flex-direction:column;
   gap:10px
  }
`;

export { Home };
