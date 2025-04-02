import Booklist from '@/Comps/Booklist'
import FilterComp from '@/Comps/FilterComp'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between gap-6 '>

        <FilterComp/>
        <Booklist/>
    </div>
  )
}

export default Home