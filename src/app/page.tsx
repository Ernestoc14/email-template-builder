"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";
import { Box, Button, List, Typography } from "@mui/material";
import { ListItemComponent } from "./components/ListItemComponent/ListItemComponent";
import { MultiButton } from "./components/MultiButton/MultiButton";
import { WelcomeModal } from "./components/WelcomeModal/WelcomeModal";
import { CreateNewTemplateModal } from "./components/CreateNewTemplateModal/CreateNewTemplateModal";
import { HistoryTemplateModal } from "./components/HistoryTemplateModal/HistoryTemplateModal";

export default function Home() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isCreateNewTemplateModalOpen, setIsCreateNewTemplateModalOpen] = useState(false);
  const [isHistoryTemplateModalOpen, setIsHistoryTemplateModalOpen] = useState(false);
  const Components = [
    "Headers",
    "Title Box",
    "Section Container",
    "Buttons",
    "Infobar",
    "Alerts",
    "Banners",
    "Itinerary Cards",
    "Pax Cards",
    "Footer",
  ];

  // MultiButton Functions
  const handleLanguageClick = (value: string) => {
    console.log("Language Clicked: ", value);
  }

  const handleDeviceClick = (value: string) => {
    console.log("Device Clicked: ", value);
  }

  // WelcomeModal Functions
  const handleWelcomeModalClose = () => setIsWelcomeModalOpen(false)
  const handleCreateTemplateModalClose = () => setIsCreateNewTemplateModalOpen(false)
  const handleHistoryTemplateModalClose = () => setIsHistoryTemplateModalOpen(false)
  const handleWelcomeModalClick = (value: string) => {
    if(value === "Create a New Template") {
      setIsCreateNewTemplateModalOpen(true)
    } else if(value === "History Template") {
      setIsHistoryTemplateModalOpen(true)
    }
  }
  const handleReopenWelcomeModal = () => {
    setIsCreateNewTemplateModalOpen(false)
    setIsHistoryTemplateModalOpen(false)
    setIsWelcomeModalOpen(true)
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box component="header" sx={{backgroundColor: "#0032a0", width:"100%", display:"flex", gap: "10px", justifyContent: "space-between", paddingX:"50px", paddingY:"30px"}}>
        <Image src="https://www.copaair.com/webassets/images/copa-logo-white.png" alt="Copa Logo" width={200} height={40} />
        <Typography variant="h4" color="white" sx={{textAlign:"center", flex: 1}}>
          Welcome to Notification Template Builder!!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "20px 80px",
        }}
        component="section"
      >
        <Box sx={{ width: "20%" }} component="aside">
          <Typography variant="h6" sx={{ paddingBottom: "20px" }}>
            Lista de Componentes
          </Typography>
          <Box className={styles.canva}>
            <List component="menu">
              {Components.map((component, index) => (
                <ListItemComponent key={index} primary={component} />
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ width: "75%" }}>
          <Box
            component="nav"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            <Typography variant="h6">Droppable Area</Typography>
            <Box sx={{ display: "flex", gap: "60px" }}>
              <MultiButton buttons={["ES", "EN", "PT", "FR"]} onClick={handleLanguageClick} />
              <MultiButton buttons={["Desktop", "Mobile"]} onClick={handleDeviceClick}/>
            </Box>
            <Button variant="contained" color="success">
              Generate HTML
            </Button>
          </Box>
          <Box className={styles.canva} sx={{}}>
            <Box className={styles.components}>Master Comtainer Area</Box>
            <Box className={styles.components}>Drop a Component Here!</Box>
          </Box>
        </Box>
      </Box>
      <WelcomeModal open={isWelcomeModalOpen} onClose={handleWelcomeModalClose} onOptionClick={handleWelcomeModalClick}/>
      <CreateNewTemplateModal open={isCreateNewTemplateModalOpen} onClose={handleCreateTemplateModalClose} goBack={handleReopenWelcomeModal}/>
      <HistoryTemplateModal open={isHistoryTemplateModalOpen} onClose={handleHistoryTemplateModalClose} goBack={handleReopenWelcomeModal}/>
    </Box>
  );
}
