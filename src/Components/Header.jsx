

const Header = () => {
    return (
        <div className="flex justify-between md:flex-row flex-col text-center space-y-3  mt-8 items-center w-11/12 mx-auto" >
            <div>
                <h1 className="text-[32px] font-bold">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex gap-10  justify-center">
                    <li className="text-[#150B2BB3]"><a href="">Home</a></li>
                    <li className="text-[#150B2BB3]"><a href="">Recipes</a></li>
                    <li className="text-[#150B2BB3]"><a href="">About</a></li>
                    <li className="text-[#150B2BB3]"><a href="">Search</a></li>
                </ul>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <div className="relative"> 

                      <input className="py-4 px-10 rounded-full  placeholder-gray-800 bg-gray-100 outline-none" type="text" placeholder="Search" />
                      <div className="absolute inset-y-0 left-2  flex items-center"><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full shadow-lg bg-[#0BE58A]"><i  className="fa-regular fa-user"></i></div>
            </div>
        </div>
    );
};

export default Header;