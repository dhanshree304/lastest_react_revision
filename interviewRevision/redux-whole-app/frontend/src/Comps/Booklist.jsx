
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookCard from './BoookCard'
import { getBooks } from '../Redux/App/action'


const Booklist = () => {
const {books,isLoading} = useSelector((store)=>store.reducer_2)
 const dispatch = useDispatch()


useEffect(()=>{
  dispatch(getBooks())
},[])

if(isLoading){
 return <h1 className='text-3xl font-bold'>Loading....</h1>
}
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default Booklist