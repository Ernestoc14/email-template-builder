import style from "./style";
import { Box, Button, IconButton, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { HistoryTemplateModalProps, HistoryTemplates } from "./types";
import { useEffect, useState } from "react";
import { getAllTemplates } from "@/app/utils/canvasUtils";

export const HistoryTemplateModal = (props: HistoryTemplateModalProps) => {
  const styles = style
  const  [historyTemplates, setHistoryTemplates] = useState<HistoryTemplates[]>([])

  useEffect(()=>{
    async function fetchTemplates() {
      let templates:HistoryTemplates[] = []
      try {
        templates = await getAllTemplates() ?? []
      } catch (error) {
        console.error(error);
      }finally{
        setHistoryTemplates(templates)
      }
    }
    fetchTemplates();
  
    return () => {};
  },[])

  const handleSubmit = (templateName: string) => {
    props.setNewTemplateName(templateName)
    props.onClose()
    props.sendName()
  }

  return (
    <Modal open={props.open}>
      <Box sx={styles.container}>
        <Box className="sub-container">
          <Typography variant="h5" className="title">
            History Template
          </Typography>
          <IconButton className="back-icon" onClick={props.goBack}>
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
          <List className="templates-list">
            {historyTemplates.map((template, index) => (
              <ListItem className="template-item" key={index} sx={{ borderBottom: index !== historyTemplates.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                <Box className="template-box">
                  <ListItemText primary={template.name} secondary={`Date created: ${template.dateCreated.toUTCString()} | Date Modified: ${template.dateModified.toUTCString()}`} />
                  <Button variant="contained" className="button" onClick={() => handleSubmit(template.name)} >
                    Load
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};
