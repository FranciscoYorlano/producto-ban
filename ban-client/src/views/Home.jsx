// Hooks
import { useState, useEffect, useRef } from "react";

const images = [
    "https://wallpapercave.com/wp/wp1889483.jpg",
    "https://wallpapercave.com/wp/wp1889488.jpg",
];

const Home = () => {
    // Carousel
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                if (prevImage === images[0]) {
                    return images[1];
                } else {
                    return images[0];
                }
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            {/* SECTION CAROUSEL */}
            <div className="h-screen relative overflow-hidden relative">
                <div
                    className="h-full w-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform"
                    style={{
                        backgroundImage: `url(${currentImage})`,
                        transform: "translateX(0%)",
                    }}
                ></div>
                <div
                    className="h-full w-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform"
                    style={{
                        backgroundImage: `url(${
                            currentImage === images[0] ? images[1] : images[0]
                        })`,
                        transform: "translateX(100%)",
                    }}
                ></div>
            </div>

            {/* SECTION ABOUT */}
            <div className="h-screen bg-gradient-to-r from-gray-950 via-purple-500 to-pink-700">
                <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 mt-12">
                    <h2 className="title tracking-wider">About Us</h2>
                    <div className="mt-12">
                        <p className="text-xl ">
                            At our boutique agency, we combine our passion for
                            the arts with a deep understanding of the cultural
                            nuances of Latin America. This allows us to provide
                            tailored solutions that help our clients create
                            unforgettable events that stand out from the rest
                        </p>
                        <p className="mt-6 text-base font-light">
                            Our boutique agency specializes in artistic
                            consultancy and event logistics in Latin America. We
                            provide personalized solutions to help our clients
                            create unforgettable experiences that resonate with
                            their audiences. With years of experience in the
                            industry and a deep understanding of the cultural
                            nuances of the region, we offer a unique perspective
                            that sets us apart from the competition. Whether
                            it's a corporate event, a music festival, or an art
                            exhibition, we have the expertise and the creativity
                            to bring your vision to life.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION LINKS */}
            <div className="h-screen ">
                <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 mt-12"></div>
            </div>
        </div>
    );
};

export default Home;
