import WelcomeModalProps from "./types"
import { Box, Modal, Typography } from "@mui/material"
import { MultiButton } from "../MultiButton/MultiButton"

const handleCreateTemplateClick = () => {
  console.log("Create Template Clicked");
}
const handleHistoryClick = () => {
  console.log("History Clicked");
}

export const WelcomeModal = (props: WelcomeModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
    >
      <Box 
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{textAlign:"center", padding:"20px"}}>
          Welcome to Notification Template Builder!!
        </Typography>
        <MultiButton buttons={["Create a New Template", "History Template"]} onClick={handleCreateTemplateClick, handleHistoryClick}/>
      </Box>
    </Modal>
  )
}