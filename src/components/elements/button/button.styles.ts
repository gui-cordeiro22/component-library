// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

// Theme
import { theme } from "@/config/theme";

type ContainerStyleProps = {
  variant: ButtonVariants;
  isActive: boolean;
  isCommingSoon: boolean;
  hasHoverEffect?: boolean;
};

//TODO: Refact all styles to be more general and simple

export const Container = styled.button<ContainerStyleProps>`
  background-color: inherit;
  padding: 8px;

  ${({ variant, isCommingSoon }) =>
    variant === "cta" &&
    !isCommingSoon &&
    css`
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      width: 200px;
      border-radius: 200px;
      transition: all 0.2s ease-in-out;

      &:hover {
        border-color: transparent;
        background-color: ${theme.colors.secondary[500]};
      }
    `}

  ${({ variant, isCommingSoon }) =>
    variant === "cta" &&
    !!isCommingSoon &&
    css`
      border-color: transparent;
      cursor: not-allowed;
      background-color: ${theme.colors.base[100]};
      color: ${theme.colors.base[200]};
      width: 200px;
      border-radius: 200px;
    `}

    ${({ variant, isCommingSoon, hasHoverEffect }) =>
    variant === "dark-cta" &&
    !isCommingSoon &&
    css`
      color: ${theme.colors.white};
      width: 200px;
      border-radius: 200px;
      transition: all 0.3s ease-in-out;
      background-color: ${theme.colors.secondary[500]};
      flex: 1;

      &:hover {
        transform: ${hasHoverEffect ? "translateY(-6%)" : "none"};
      }
    `}


    ${({ variant, isCommingSoon }) =>
    variant === "link" &&
    !isCommingSoon &&
    css`
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      color: ${theme.colors.white};

      &:hover {
        border-top: 1px solid ${theme.colors.white};
        border-bottom: 1px solid ${theme.colors.white};
      }
    `}

    ${({ variant, isCommingSoon }) =>
    variant === "link" &&
    !!isCommingSoon &&
    css`
      cursor: not-allowed;
      background-color: ${theme.colors.base[100]};
      color: ${theme.colors.base[200]};
      border-radius: 8px;
    `}

    ${({ variant, isActive, isCommingSoon }) =>
    variant === "link" &&
    !!isActive &&
    !isCommingSoon &&
    css`
      border-top: 1px solid ${theme.colors.white};
      border-bottom: 1px solid ${theme.colors.white};
      color: ${theme.colors.white};
    `}

    ${({ variant, isCommingSoon }) =>
    variant === "light-budget" &&
    !isCommingSoon &&
    css`
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      width: 200px;
      border-radius: 200px;
      transition: all 0.2s ease-in-out;
      animation: pulse 1s ease-in-out infinite;

      &:hover {
        border-color: transparent;
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary[500]};
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.05);
        }

        100% {
          transform: scale(1);
        }
      }
    `}

    ${({ variant, isCommingSoon }) =>
    variant === "light-budget" &&
    !!isCommingSoon &&
    css`
      border-color: transparent;
      cursor: not-allowed;
      background-color: ${theme.colors.base[100]};
      color: ${theme.colors.base[200]};
      width: 200px;
      border-radius: 200px;
      animation: none;
    `}

    ${({ variant, isCommingSoon, hasHoverEffect }) =>
    variant === "dark" &&
    !isCommingSoon &&
    css`
      color: ${theme.colors.secondary[500]};
      width: 200px;
      border: 1px solid ${theme.colors.secondary[500]};
      border-radius: 200px;
      transition: all 0.2s ease-in-out;
      flex: 1;

      &:hover {
        transform: ${hasHoverEffect ? "translateY(-6%)" : "none"};
      }
    `};

  ${({ variant, isCommingSoon }) =>
    variant === "white" &&
    !isCommingSoon &&
    css`
      color: ${theme.colors.white};
      width: 200px;
      border: 1px solid ${theme.colors.white};
      border-radius: 200px;
      transition: all 0.2s ease-in-out;
      flex: 1;
    `};
`;

export const Label = styled.p`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
