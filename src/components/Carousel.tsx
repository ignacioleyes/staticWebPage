import { VStack, Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";



const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
    text-shadow: none; /* Initial text shadow is none */
  }
  50% {
    transform: scale(1.04);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle text shadow */
  }
  100% {
    transform: scale(1.08);
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4); /* Increase text shadow on full scale */
  }
`;
    
    const imageUrls = [
        "/carousel1.jpg",
        "/carousel2.jpg",
        "/carousel3.jpg",
    ];

    useEffect(() => {
        const nextSlide = (currentSlide + 1) % imageUrls.length;
        const timer = setTimeout(() => {
          setCurrentSlide(nextSlide);
        }, 5000); // Change slide every 5 seconds
    
        return () => clearTimeout(timer);
      }, [currentSlide, imageUrls.length]);

    return (
        <VStack>
            <Box
                width="100%"
                height="25rem" 
                overflow="hidden"
                position="relative"
            >
                {imageUrls.map((imageUrl, index) => (
                    <Box
                        key={index}
                        width="100%"
                        height="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity={currentSlide === index ? 1 : 0}
                        animation={`${scaleAnimation} 5s linear infinite ${
                          index * 5 - currentSlide * 5
                        }s`}
                    >
                        <Image
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />
                    </Box>
                ))}
            </Box>
        </VStack>
    );
};

export default Carousel;
