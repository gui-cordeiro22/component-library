// Dependencies
import { FunctionComponent } from "react";
import Image from "next/image";

// Types
import { WhatsappButtonProps } from "./whatsapp.button.types";

// Styles
import { Button } from "./whatsapp.button.styles";

export const WhatsappButton: FunctionComponent<WhatsappButtonProps> = ({ icon, handleClick }) => {
    return (
        <Button onClick={handleClick}>
            <Image src={icon} alt="WhatsApp" width={32} height={32} />
        </Button>
    );
};
