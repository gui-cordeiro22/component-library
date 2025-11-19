// Types
import { NextRouter } from "next/router";

export const isButtonActive = (navigationSource: string, route: NextRouter) => {
    if (navigationSource === route.asPath) {
        return true;
    } else {
        return false;
    }
};
