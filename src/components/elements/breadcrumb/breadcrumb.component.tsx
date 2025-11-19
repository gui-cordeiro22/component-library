// Dependencies
import { Fragment, FunctionComponent } from "react";

// Styles
import { Container, ActionWrapper, BreadcrumbPathLabel } from "./breadcrumb.styles";

// Components
import { ConditionallyRender } from "@/components/ultilities/conditionally-render";

// Assets
import { ChevronRight } from "lucide-react";

// Types
import { BreadcrumbProps } from "./breadcrumb.types";

// Utils
import { theme } from "@/config/theme";

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ paths }) => {
    return (
        <Container className="pdg-breadcrumb">
            <ConditionallyRender
                shouldRender={!!paths?.length}
                content={paths?.map((path, index) => {
                    const hasAction = (index !== paths.length - 1 || paths.length === 1) && !!path.handleClick;
                    const isLastChevron = index === paths.length - 1;

                    return (
                        <Fragment key={`path-${index}`}>
                            <ConditionallyRender
                                shouldRender={index > 0}
                                content={<ChevronRight color={isLastChevron ? theme.colors.base[200] : theme.colors.base[500]} />}
                            />

                            <ActionWrapper hasAction={hasAction} key={`path-${index}`} onClick={() => hasAction && path.handleClick!()}>
                                <BreadcrumbPathLabel className="pdg-label">{path.label}</BreadcrumbPathLabel>
                            </ActionWrapper>
                        </Fragment>
                    );
                })}
            />
        </Container>
    );
};
