import { Box, Modal, Typography } from "@mui/material";
import { HistoryTemplateModalProps } from "./types";

export const HistoryTemplateModal = (props: HistoryTemplateModalProps) => {

  return (
    <Modal open={props.open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%", 
          transform: "translate(-50%, -50%)",
          width: "30%",
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
          <Typography variant="h4" sx={{ textAlign: "center", padding: "20px" }}>
            History Template
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
