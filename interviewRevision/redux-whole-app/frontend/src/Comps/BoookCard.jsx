import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border w-[300px] p-2 flex flex-col items-center justify-cente">
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
    </div>
  );
};

export default BookCard;
