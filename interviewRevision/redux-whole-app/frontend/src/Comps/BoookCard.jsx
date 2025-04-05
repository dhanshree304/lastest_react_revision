import { Button } from "@/components/ui/button";
import { deleteBook} from "@/Redux/App/action";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    const token = useSelector((store) => store.reducer_1.token)  
  const dispatch=useDispatch()
  

  const deleteOneBook=()=>{
    dispatch(deleteBook(`${book._id}`,token)).then(()=>window.location.reload())
  }
  return (
    <div className="border w-[400px] p-2 flex flex-col items-center justify-cente">
      <img
        className=""
        src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-business-book-cover-design-template-png-image_9060635.png"
        height="200px"
        width="200px"
        alt=""
      />
      <h1 className="text-2xl font-bold mt-2">{book.title}</h1>
      <h2 className="text-xl">{book.category}</h2>
      <h3 className="font-bold">{book.price}</h3>

      <div className="mt-5">
        <Link to={`/edit/${book._id}`}>
          <Button className="mr-2">EDIT</Button>
        </Link>
        <Link to={`/single-book/${book._id}`}>
          <Button className="mr-2">SINGLE BOOK</Button>
        </Link>

        <Button className="mr-2" onClick={deleteOneBook}>DELETE</Button>
      </div>
    </div>
  );
};

export default BookCard;
