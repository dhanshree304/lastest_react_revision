

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-20 justify-center ">
        <a
          href="/"
          className="hover:text-yellow-500 font-bold transition-all duration-300 mt-[40px]"
        >
          <h3>HOME</h3>
        </a>
        <a
          href="/contact"
          className="hover:text-yellow-500 font-bold transition-all duration-300 mt-[40px]"
        >
          <h3>CONTACT</h3>
        </a>
        <a
          href="/weedings"
          className="hover:text-yellow-500 font-bold transition-all duration-300 mt-[40px]"
        >
          <h3>WEEDINGS</h3>
        </a>
        <div>
          <img src="logogan2.png" className="h-[200px] " />
        </div>
        <a
          href="/corporate-events"
          className="hover:text-yellow-500 font-bold transition-all duration-300 mt-[40px]"
        >
          <h3>CORPORATE EVENTS</h3>
        </a>
        <div className="relative group mt-[40px]">
          <span className="  text-black cursor-pointer hover:text-yellow-500 font-bold transition-all duration-300 ">
            SERVICES
          </span>

          {/* Card that appears on hover */}
          <div className="absolute left-0 mt-2 w-48 bg-white p-4 rounded-lg shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ul className="space-y-2">
              <li>
                <a
                  href="/destination-weddings"
                  className="text-black   hover:font-bold"
                >
                  DESTINATION WEDDINGS
                </a>
              </li>
              <li>
                <a
                  href="/eng&reception"
                  className="text-black   hover:font-bold "
                >
                  ENGEMENT & RECEPTION
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/about" className="hover:text-yellow-500 font-bold mt-[40px]">
          <h3>ABOUT</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
