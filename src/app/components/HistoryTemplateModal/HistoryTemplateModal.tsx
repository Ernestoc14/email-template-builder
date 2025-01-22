import { Box, IconButton, Modal, Typography } from "@mui/material";
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
            History Template
          </Typography>
          <IconButton
            onClick={props.goBack}
            sx={{ position: "absolute", top: "10px", right: "10px", color: "#0032a0", "&:hover": {backgroundColor: "#e0e7ff", color:"#00227b"}, }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ width: "24px", height: "24px", transition: "transform 0.2s ease-in-out" }}
              className="size-6"
              onMouseEnter={(e) => {
                (e.currentTarget.style.transform = "scale(1.1)")
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.transform = "scale(1)")
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};
