// Dependencies
import { FunctionComponent, useEffect, useState } from "react";

// Styles
import { Container, ContentWrapper, SliderWrapper } from "./hero.styles";

// Types
import { HeroSectionProps } from "./hero.types";

export const HeroSection: FunctionComponent<HeroSectionProps> = ({ backgroundImage, sliderCompositions, buttonElementCompositions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliders = [...sliderCompositions];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
        }, 8000);

        return () => clearInterval(intervalId);
    }, [sliders.length]);

    return (
        <Container backgroundImageSource={backgroundImage}>
            <ContentWrapper>
                <SliderWrapper>{sliders[currentIndex]}</SliderWrapper>

                {buttonElementCompositions}
            </ContentWrapper>
        </Container>
    );
};
