const Banner = () => {
    return (
       <div className="w-11/12 mx-auto mt-10">
         <div className="relative bg-cover bg-center bg-no-repeat object-center h-96 rounded-xl w-full md:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/84XV9hS/warmth-cafe-dull-day-oslo.jpg)'}}>
            
            
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                <h1 className="md:w-[897px] md:text-6xl text-2xl text-white font-semibold w-9/12 mb-6">Discover an exceptional cooking class tailored for you!</h1>
                <p className="md:text-lg text-sm text-white font-normal md:w-[933px] mb-10">Discover a cooking class designed specifically to meet your needs and skill level, offering hands-on lessons that blend culinary techniques with creativity. </p>
                <div className="flex gap-5">
                   <button className="btn bg-[#0BE58A] border-[#0BE58A]">Explore Now</button>
                   <button className="btn">Our Feedback</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;
