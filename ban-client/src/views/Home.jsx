// Hooks
import { useState, useEffect, useRef } from "react";

const images = [
    "https://wallpapercave.com/wp/wp1889483.jpg",
    "https://wallpapercave.com/wp/wp1889488.jpg",
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const handleWheel = (e) => {
        if (e.deltaY > 0 && section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: "smooth" });
        } else if (e.deltaY < 0 && section1Ref.current) {
            section1Ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

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
        <div className="w-full" onWheel={handleWheel}>
            {/* SECTION CAROUSEL */}
            <div
                className="h-[calc(100vh)] relative overflow-hidden relative"
                ref={section1Ref}
            >
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
            <div className="h-[calc(100vh)] bg-white" ref={section2Ref}></div>
        </div>
    );
};

export default Home;
