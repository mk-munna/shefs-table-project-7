import { FcBusinessman } from "react-icons/fc";
const Header = () => {
    return (
        <div>
            <header className="lg:max-w-6xl max-w-[360px] mx-auto mt-4 lg:mt-10">
                <nav>
                    <div className="navbar flex gap-20 bg-base-100">
                        <div className=" flex flex-1 lg:justify-left lg:flex-row-reverse ">
                            <div className="navbar-start ">
                                <div className="dropdown lg:hidden md:hidden">
                                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h7" />
                                        </svg>
                                    </div>
                                    <ul tabIndex="0"
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Home</a></li>
                                        <li><a>Recipes</a></li>
                                        <li><a>About</a></li>
                                        <li><a>Search</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="hidden lg:flex font1 justify-center gap-10 text-black ">
                                        <li><a>Home</a></li>
                                        <li><a>Recipes</a></li>
                                        <li><a>About</a></li>
                                        <li><a>Search</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-6/12  navbar-center">
                                <p className="text-neutral-900 lg:text-4xl  text-2xl font-bold font2">Recipe Calories</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="hidden md:block">
                                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs focus:outline-none" />
                            </div>
                            <div className="bg-green-300 p-1 rounded-full">

                                <a href="#" className="text-2xl"><FcBusinessman /></a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="p-6  rounded-3xl lg:mt-10 mt-6 bg-[url('https://i.ibb.co/HPN4tJ9/banner.png')] lg:h-[550px]  bg-cover flex flex-col justify-center">
                    <p className="font-bold font2 text-3xl mt-10 lg:mt-0 lg:text-6xl text-center text-white lg:leading-[5rem] lg:px-20 ">Discover an exceptional cooking class tailored for you!</p>
                    <p className="mt-4 leading-7 font1 text-center lg:mt-6 lg:w-[691px]  mx-auto  text-white">Learn from expert chefs, explore diverse cuisines, and unleash your culinary creativity in a hands-on, personalized environment. Elevate your cooking skills now</p>
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex gap-4">
                            <a href="#"><button className="btn bg-[#0BE58A] text-black hover:bg-[#0BE58A] hover:text-black border-[#0BE58A] hover:border-[#0BE58A]  px-7 rounded-3xl">Explore Now</button></a>
                            <a href="#"><button className="btn btn-outline  hover:bg-[#0BE58A] text-white hover:text-black hover:border-[#0BE58A] rounded-3xl px-6">Our Feedback</button></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};


export default Header;