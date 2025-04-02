import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"


const initState ={
isLoading:false,
books:[],
isError:false
}

const reducer_2=(oldState=initState,action)=>{
    const {type,payload} = action

    switch (type) {
      case GET_BOOKS_REQUEST:
        return { ...oldState, isLoading:true };

      case GET_BOOKS_SUCCESS:
        return { ...oldState, isLoading:false,books:payload };

      case GET_BOOKS_FAILURE:
        return { ...oldState, books:[],isError:true};

      default:
        return oldState;
    }
    

}

export {reducer_2}