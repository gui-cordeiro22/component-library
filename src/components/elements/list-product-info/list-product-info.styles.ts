// Dependencies
import styled from "styled-components";

// Theme
import { theme } from "@/config/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`;

type ListItemStyleProps = {
    isActive?: boolean;
};

export const ListItem = styled.p<ListItemStyleProps>`
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-decoration: ${({ isActive }) => (!!isActive ? "none" : "line-through")};
    color: ${({ isActive }) => (!!isActive ? `${theme.colors.base[500]}` : `${theme.colors.base[200]}`)};

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;
