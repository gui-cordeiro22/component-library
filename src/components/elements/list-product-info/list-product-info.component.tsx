// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ListItem } from "./list-product-info.styles";

// Types
import { ListProductInfoProps } from "./list-product-info.types";

export const ListProductInfo: FunctionComponent<ListProductInfoProps> = ({ topic, isTopicActive, listIconCompositions }) => {
    return (
        <Container>
            <div>{listIconCompositions}</div>

            <ListItem isActive={isTopicActive}>{topic}</ListItem>
        </Container>
    );
};
