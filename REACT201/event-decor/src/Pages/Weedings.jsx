const Weedings = () => {
  const Haldi = ["h1.jpg", "h3.jpg", "h7.jpg", "h5.jpg"];
  const Mehandi = [ "mehandi8.jpg", "mehandi9.jpg", "mehandi10.jpg","mehandi7.jpg"];
  return (
    <div>
      <div className="">
        <h1 className="font-bold text-3xl text-yellow-600 mb-[60px] ml-[150px] ">
          Happy Family
        </h1>
      </div>
      <div className="flex justify-center items-center h-[500px] w-[60%]  bg-gray-900  ml-[300px]  ">
        <video className="w-full rounded-lg shadow-lg h-[400px]" controls>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="">
        <h1 className="font-bold text-3xl text-yellow-600 mt-[60px] mb-[50px] ml-[150px] ">
        Couple
        </h1>
      </div>
      <div className="  flex justify-between gap-20  h-auto ml-[200px]   ">
        <div className="w-[50%]  ">
          <h4 className="text-lg  font-semibold">
            Blue Wings Events Wedding Planning
          </h4>
          <h2 className="text-xl font-bold">
            Every Couple is unique – your special day is too
          </h2>
          <p>
            Welcome to Blue Wings Events, where your dream wedding takes flight
            with ease and elegance. Imagine a day where every detail, from the
            grand design to the smallest of etiquette nuances, is meticulously
            handled by a dedicated coordinator. At Blue Wings Events, we pride
            ourselves on transforming wedding stress into seamless celebrations,
            ensuring everything aligns with your vision. Our comprehensive
            wedding services cover all aspects of wedding planning, including
            vendor selection, speech writing, budget management, rentals,
            contract reviews, and crafting precise timelines and floor plans.
            We’re here to tackle those inevitable last-minute challenges and
            family dynamics, ensuring your special day unfolds flawlessly and
            memorably. Understanding that each couple is unique, we offer
            personalized consultations to tailor our packages to your specific
            needs, ensuring your wedding reflects the beautiful story of your
            union. Let’s embark on this exciting journey together! Schedule your
            complimentary consultation today and discover how Blue Wings Events
            can bring your wedding dreams to life with grace, professionalism,
            and a smile that makes all the difference.
          </p>
        </div>

        <div className="w-[50%]">
          <img
            src="mcouple2.jpeg"
            alt=""
            className="h-[500px] w-[70%]  rounded-lg shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <div className=" ">
        I
        <div className="">
          <h1 className="font-bold text-3xl text-yellow-600 mt-[60px] ml-[150px] ">
          Haldi Ceremoney
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-20 justify-center items-center p-20 ">
          {Haldi.map((img, index) => (
            <div key={index} className="w-[80%]  ">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 w-[500px] h-[400px] "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="">
          <h1 className="font-bold text-3xl text-yellow-600  ml-[150px] mt-[50px] ">
            Mehandi Ceremoney
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-20 justify-center items-center p-20 ">
          {Mehandi.map((img, index) => (
            <div key={index} className="w-[90%]  ">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 w-[500px] h-[400px]  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weedings;
