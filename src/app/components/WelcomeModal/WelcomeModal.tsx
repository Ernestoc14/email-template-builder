import { Box, Fade, Modal, Typography } from "@mui/material";
import { MultiButton } from "../MultiButton/MultiButton";
import WelcomeModalProps from "./types";
import style from "./style";

export const WelcomeModal = (props: WelcomeModalProps) => {
    const styles = style;

    const handleModalClick = (value: string) => {
        props.onClose();
        props.onOptionClick(value);
    };

    return (
        <Modal open={props.open} onClose={props.onClose} closeAfterTransition>
            <Fade in={props.open}>
                <Box sx={styles.container}>
                    <Box className="sub-container">
                        <Box className="header-section">
                            <Typography variant="h5" className="title">
                                Welcome to Notification Template Builder
                            </Typography>
                        </Box>

                        <Box className="buttons-section">
                            <MultiButton
                                buttons={["Create a New Template", "History Template"]}
                                onClick={handleModalClick}
                            />
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
