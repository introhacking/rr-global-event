import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        alt: "Slide 1",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1751315574555-9d982ea9ea63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        alt: "Slide 2",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1751315574555-9d982ea9ea63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        alt: "Slide 3",
    },
];

const ImageCarousel = () => {
    return (
        <div className="h-[300px] sm:h-[400px] lg:h-[100vh] overflow-hidden">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                stopOnHover={false}
                showIndicators={true}
                interval={8000}
                transitionTime={3000}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="h-full w-full flex justify-center items-center overflow-hidden"
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="object-cover w-full h-full animate-scale-loop"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;

