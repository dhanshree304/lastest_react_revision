import { Button } from "@/components/ui/button";
import Booklist from "@/Comps/Booklist";
import FilterComp from "@/Comps/FilterComp";
import Pagination from "@/Comps/Pagination";
import { useState } from "react";
import { Link } from "react-router-dom";




const Home = () => {
const [pageParams,setPageParams] = useState({page:1,limit:4})


  return (
    <div>
      <Link to="/single-book/:id">
        <Button className="mb-5">ADD BOOK</Button>
      </Link>

      <Pagination pageParams={pageParams} setPageParams={setPageParams} />
      <div className="flex justify-between gap-6 mt-10 ">
        <FilterComp />
        <Booklist pageParams={pageParams} />
      </div>
    </div>
  );
};

export default Home;
