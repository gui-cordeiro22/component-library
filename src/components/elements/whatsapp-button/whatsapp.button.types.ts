export type WhatsappButtonData = {
    icon: string;
};

export type WhatsappButtonAction = {
    handleClick: () => void;
};

export type WhatsappButtonProps = WhatsappButtonData & WhatsappButtonAction;
