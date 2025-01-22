import WelcomeModalProps from "./types";
import { Box, Button, Modal, Typography } from "@mui/material";
import { MultiButton } from "../MultiButton/MultiButton";

const handleModalClick = (value: string) => {
  console.log(value, "Clicked");
};

export const WelcomeModal = (props: WelcomeModalProps) => {
  return (
    <Modal open={props.open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "background.paper",
          border: "1px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", padding: "20px" }}
          >
            Welcome to Notification Template Builder!!
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
