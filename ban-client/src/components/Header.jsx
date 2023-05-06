import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="grid grid-cols-2 w-screen h-12 fixed top-0 z-10 ">
            <div className="flex justify-self-start items-center ml-4 mt-1 mb-1">
                <Link to="/">
                    <p className="text-xl">BAN Talent</p>
                </Link>
            </div>

            <div className="flex justify-self-end items-center gap-6 bg-black mt-1 mb-1 mr-4 pr-6 pl-6 pt-2 pb-2 rounded-md shadow">
                <Link
                    className="hover:text-fuchsia-600 focus:outline-none transition-colors duration-300"
                    to="/home"
                >
                    Home
                </Link>
                <Link
                    className="hover:text-fuchsia-600 focus:outline-none transition-colors duration-300"
                    to="/events"
                >
                    Events
                </Link>
                <Link
                    className="hover:text-fuchsia-600 focus:outline-none transition-colors duration-300"
                    to="https://djmagla.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    DJ Mag
                </Link>
                <Link className="rounded-full hover:text-black focus:outline-none bg-fuchsia-500 transition-background-colors duration-300 pl-2 pr-2 transform hover:scale-110">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default Header;
