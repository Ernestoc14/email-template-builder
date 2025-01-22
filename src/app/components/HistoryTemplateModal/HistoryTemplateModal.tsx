import { Box, Button, IconButton, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { HistoryTemplateModalProps } from "./types";

export const HistoryTemplateModal = (props: HistoryTemplateModalProps) => {
  const historyTemplates = [
    {id: 1, name: "Template 1", date: "2021-10-01"},
    {id: 2, name: "Template 2", date: "2021-10-02"},
    {id: 3, name: "Template 3", date: "2021-10-04"},
    {id: 4, name: "Template 4", date: "2021-10-23"}
  ]
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
            variant="h5"
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
          <List sx={{width: "100%", padding: "0", margin: "0", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
            {historyTemplates.map((template, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: index !== historyTemplates.length - 1 ? "1px solid #e0e0e0" : "none",
                }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      paddingLeft: "10px",
                    }}
                  >
                  <ListItemText primary={template.name} secondary={template.date} />
                  <Button
                    variant="contained"
                    sx={{backgroundColor: "#0032a0", height: "20%", display: "flex", alignItems: "center", color: "white", "&:hover": {backgroundColor: "#00227b"}}}
                    onClick={() => console.log("Load Template: ", template.name)}
                  >
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
