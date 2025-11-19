export type BreadCrumbPath = {
    label: string;
    handleClick?: () => void;
};

export type BreadcrumbData = {
    paths: BreadCrumbPath[];
};

export type BreadcrumbProps = BreadcrumbData;
