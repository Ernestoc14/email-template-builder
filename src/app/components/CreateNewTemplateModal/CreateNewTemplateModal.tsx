import { Box, Input, Modal, Typography } from "@mui/material";
import { CreateNewTemplateModalProps } from "./types";

export const CreateNewTemplateModal = (props: CreateNewTemplateModalProps) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Template Name Submitted");
  };

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
            Create New Template
          </Typography>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Template Name"
              sx={{ width: "100%", margin: "10px 0" }}
            />
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
