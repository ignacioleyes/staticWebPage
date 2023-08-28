import { VStack, Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

interface Props {
    images: string[];
}

const Carousel = ({ images }: Props) => {
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

    useEffect(() => {
        const nextSlide = (currentSlide + 1) % images.length;
        const timer = setTimeout(() => {
            setCurrentSlide(nextSlide);
        }, 5000); // Change slide every 5 seconds

        return () => clearTimeout(timer);
    }, [currentSlide, images.length]);

    return (
        <VStack>
            <Box
                width="100%"
                height="35rem"
                overflow="hidden"
                position="relative"
            >
                {images.map((imageUrl, index) => (
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
