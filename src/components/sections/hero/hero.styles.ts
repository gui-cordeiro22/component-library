// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "@/styles/gutter";

// Types
type ContainerStyleProps = {
    backgroundImageSource: string;
};

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.95)),
        url(${({ backgroundImageSource }) => backgroundImageSource});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 540px;
    padding: 24px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        height: 876px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 60px;

    @media (min-width: 768px) {
        ${pageGutter}
    }
`;

export const SliderWrapper = styled.div`
    animation: slideIn 8s ease-in-out infinite;

    @keyframes slideIn {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        20% {
            transform: translateX(0);
            opacity: 1;
        }
        80% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
`;
