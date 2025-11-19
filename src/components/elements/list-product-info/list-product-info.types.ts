// Dependencies
import { ReactNode } from "react";

export type ListProductInfoData = {
    topic?: string;
    isTopicActive?: boolean;
};

export type ListProductInfoElement = {
    listIconCompositions?: ReactNode;
};

export type ListProductInfoProps = ListProductInfoData & ListProductInfoElement;
