import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { CreateNewTemplateModalProps } from "./types";
import { useState } from "react";

export const CreateNewTemplateModal = (props: CreateNewTemplateModalProps) => {
  const [newTemplateName, setNewTemplateName] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onClose()
    console.log("Template Name Submitted:", newTemplateName);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTemplateName(e.target.value);
    console.log("Template Name Changed: ", e.target.value);
  };

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
          p: 3,
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
          <Box sx={{paddingBottom: "20px"}}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", }}
          >
            Create a New Template
          </Typography>
          {/* Go Back Button */}
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
          <form 
          style={{display: "flex", flexDirection: "column", gap: "20px", width: "60%"}}
          onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              id="template-name"
              label="Template Name"
              variant="outlined"
              required
              value={newTemplateName}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "20px",
              backgroundColor: "#0032a0",
              color: "white",
              textTransform: "none",
              }}
            >
              Create
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
