// Dependencies
import { ReactNode } from "react";

export type HeroSectionData = {
    backgroundImage: string;
};

export type HeroSectionElements = {
    buttonElementCompositions: ReactNode;
    sliderCompositions: ReactNode[];
};

export type HeroSectionProps = HeroSectionData & HeroSectionElements;
