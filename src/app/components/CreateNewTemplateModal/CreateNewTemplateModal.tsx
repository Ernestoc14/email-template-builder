import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { CreateNewTemplateModalProps } from "./types";
import style from "./style";
import { getAllTemplates } from "@/app/utils/canvasUtils";
import { useState } from "react";

export const CreateNewTemplateModal = (props: CreateNewTemplateModalProps) => {
  const styles = style
  const [inputError, setInputError] = useState(false)
  const thisTemplateExist = async(name: string) => {
    const templates = await getAllTemplates() ?? []
    return templates.some(template => template.name === name)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const templateExist = await thisTemplateExist(props.newTemplateName)
    if(!templateExist){
      setInputError(true)
      props.setNewTemplateName(props.newTemplateName);
      props.onClose()
      props.sendName()
    }else{
      setInputError(true)
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setNewTemplateName(e.target.value);
  };

  return (
    <Modal open={props.open}>
      <Box sx={styles.container}>
        <Box className="sub-container">
          <Box className="header">
            <Typography variant="h6" sx={{ textAlign: "center", }}>
              Create a New Template
            </Typography>
            {/* Go Back Button */}
            <IconButton className="back-button" onClick={props.goBack} >
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
              </svg>
            </IconButton>
          </Box>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              id="template-name"
              label="Template Name"
              variant="outlined"
              required
              error={inputError}
              value={props.newTemplateName}
            />
            {inputError && (
              <Typography sx={styles.inputError}>*This template already exist</Typography>
            )}
            <Button type="submit" variant="contained" className="button" >
              Create
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
