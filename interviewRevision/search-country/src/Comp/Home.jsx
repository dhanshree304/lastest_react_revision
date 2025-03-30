import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = data.filter(
    (post) => post.title.toLowerCase().includes(query.toLowerCase()) //upper dya or lower it will convert
    // to lower....title la lower kel and then query la ch lower
  ); //[] required data

  return (
    <div>
      <input
        type="text"
        placeholder="Search title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" border-gray-500 w-[60%] mb-5 rounded-lg h-[30px] p-5 "
      />

      <div className="flex flex-col gap-3">
        {filterData.map((post) => (
          <div key={post.id} className="border-2 m-5 p-6">
            <h2>{post.title}</h2>
            <Link to={`/single-post/${post.id}`}>
              <Button className="border border-black">Get It</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
