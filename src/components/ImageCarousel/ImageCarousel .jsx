import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../assets/images/banner/banner1.jpg'
import bannerImg2 from '../../assets/images/banner/banner2.jpg'
import bannerImg3 from '../../assets/images/banner/banner3.jpg'
import bannerImg4 from '../../assets/images/banner/banner4.jpg'
import bannerImg5 from '../../assets/images/banner/banner5.jpg'

const slides = [
    {
        id: 1,
        // src: "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        src: `${bannerImg1}`,
        alt: "Slide 1",
    },
    {
        id: 2,
        // src: "https://images.unsplash.com/photo-1751315574555-9d982ea9ea63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        src: `${bannerImg2}`,
        alt: "Slide 2",
    },
    {
        id: 3,
        // src: "https://images.unsplash.com/photo-1751315574555-9d982ea9ea63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        src: `${bannerImg3}`,
        alt: "Slide 3",
    },
    {
        id: 4,
        src: `${bannerImg4}`,
        alt: "Slide 4",
    },
    {
        id: 5,
        src: `${bannerImg5}`,
        alt: "Slide 5",
    },
];

const ImageCarousel = () => {
    return (
        <div className="h-[63vh] sm:h-[95vh] lg:h-[100vh] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
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
                        className="h-[100vh] w-full flex justify-center items-center overflow-hidden"
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className=" object-fill w-full h-full animate-scale-loop"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;

