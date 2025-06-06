import WelcomeModalProps from "./types";
import { Box, Modal, Typography } from "@mui/material";
import { MultiButton } from "../MultiButton/MultiButton";
import style from "./style";

export const WelcomeModal = (props: WelcomeModalProps) => {
  const styles = style

  const handleModalClick = (value: string) => {
    props.onClose();
    props.onOptionClick(value);
  };

  return (
    <Modal open={props.open}>
      <Box sx={styles.container}>
        <Box className="sub-container">
          <Typography className="text">
            Welcome to Notification Template Builder
          </Typography>
          <MultiButton
            buttons={["Create a New Template", "History Template"]}
            onClick={handleModalClick}
          />
        </Box>
      </Box>
    </Modal>
  );
};
