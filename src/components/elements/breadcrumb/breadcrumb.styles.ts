// Dependencies
import styled, { css } from "styled-components";

// Theme
import { theme } from "@/config/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

type ActionWrapperStyleProps = {
    hasAction: boolean;
};

export const ActionWrapper = styled.div<ActionWrapperStyleProps>`
    ${({ hasAction }) =>
        !!hasAction &&
        css`
            .pdg-label {
                color: ${theme.colors.base[300]};
                cursor: pointer;
            }
        `}

    ${({ hasAction }) =>
        !hasAction &&
        css`
            .pdg-label {
                color: ${theme.colors.base[200]};
                cursor: not-allowed;
            }
        `}
`;

export const BreadcrumbPathLabel = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 12px;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`;
