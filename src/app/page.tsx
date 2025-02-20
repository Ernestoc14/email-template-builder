"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";
import {
  Box,
  List,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { ListItemComponent } from "./components/ListItemComponent/ListItemComponent";
import { WelcomeModal } from "./components/WelcomeModal/WelcomeModal";
import { CreateNewTemplateModal } from "./components/CreateNewTemplateModal/CreateNewTemplateModal";
import { HistoryTemplateModal } from "./components/HistoryTemplateModal/HistoryTemplateModal";
import { ObjectComponents } from "./types/Components";
import MasterContainer from "./htmlComponents/Master-container/MasterContainer";
import GenerateHTMLButton from "./components/GenerateHTMLButton/GenerateHTMLButton";

export default function Home() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [isCreateNewTemplateModalOpen, setIsCreateNewTemplateModalOpen] =
    useState(false);
  const [newTemplateName, setNewTemplateName] = useState("")
  const [isHistoryTemplateModalOpen, setIsHistoryTemplateModalOpen] =
    useState(false);
  const [device, setDevice] = useState<string>("desktop");
  const [language, setLanguage] = useState<string>("ES");

  // Tabs Functions
  const handleChangeLanguage = (event: React.SyntheticEvent, newLanguage: string) => {
    setLanguage(newLanguage)
  };

  // ToggleButton Functions
  const handleToggleDevice = (
    event: React.MouseEvent<HTMLElement>,
    newDevice: string
  ) => {
    setDevice(newDevice);
  };

  // WelcomeModal Functions
  const handleWelcomeModalClose = () => setIsWelcomeModalOpen(false);
  const handleCreateTemplateModalClose = () =>
    setIsCreateNewTemplateModalOpen(false);
  const handleHistoryTemplateModalClose = () =>
    setIsHistoryTemplateModalOpen(false);
  const handleWelcomeModalClick = (value: string) => {
    if (value === "Create a New Template") {
      setIsCreateNewTemplateModalOpen(true);
    } else if (value === "History Template") {
      setIsHistoryTemplateModalOpen(true);
    }
  };
  const handleReopenWelcomeModal = () => {
    setIsCreateNewTemplateModalOpen(false);
    setIsHistoryTemplateModalOpen(false);
    setIsWelcomeModalOpen(true);
  };
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
      <Box
        component="header"
        sx={{
          backgroundColor: "#0032a0",
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          paddingX: "50px",
          paddingY: "30px",
        }}
      >
        <Image
          src="https://www.copaair.com/webassets/images/copa-logo-white.png"
          alt="Copa Logo"
          width={200}
          height={40}
        />
        <Typography
          variant="h4"
          color="white"
          sx={{ textAlign: "center", flex: 1 }}
        >
          Notification Template Builder
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
        <Box sx={{ width: "15%" }} component="aside">
          <Typography variant="h6" sx={{ paddingBottom: "20px" }}>
            Lista de Componentes
          </Typography>
          <Box className={styles.canva}>
            <List
              component="menu"
              sx={{ padding: "0", margin: "0", width: "100%" }}
            >
              {Object.keys(ObjectComponents.Components).map(
                (component: string, index: number) => (
                  <ListItemComponent
                    key={index}
                    primary={component}
                    isLast={
                      index ===
                      Object.keys(ObjectComponents.Components).length - 1
                    }
                    language={language}
                  />
                )
              )}
            </List>
          </Box>
        </Box>
        <Box sx={{ width: "80%" }}>
          <Box
            component="nav"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            <Box sx={{ display: "flex", gap: "60px" }}>
              <Tabs value={language} onChange={handleChangeLanguage} sx={{ border: "1px solid #e5e5e5"}}>
                <Tab label="ES" value="ES" />
                <Tab label="EN" value="EN" />
                <Tab label="PT" value="PT" />
                <Tab label="FR" value="FR" />
              </Tabs>
              <ToggleButtonGroup
                color="primary"
                exclusive
                value={device}
                onChange={handleToggleDevice}
              >
                <ToggleButton value="desktop">Desktop</ToggleButton>
                <ToggleButton value="mobile">Mobile</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <GenerateHTMLButton 
              newTemplateName={newTemplateName}
              language={language}
            />
          </Box>
          <Box className={styles.canva}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MasterContainer
                language={language}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <WelcomeModal
        open={isWelcomeModalOpen}
        onClose={handleWelcomeModalClose}
        onOptionClick={handleWelcomeModalClick}
      />
      <CreateNewTemplateModal
        open={isCreateNewTemplateModalOpen}
        onClose={handleCreateTemplateModalClose}
        goBack={handleReopenWelcomeModal}
        newTemplateName={newTemplateName}
        setNewTemplateName={setNewTemplateName}
      />
      <HistoryTemplateModal
        open={isHistoryTemplateModalOpen}
        onClose={handleHistoryTemplateModalClose}
        goBack={handleReopenWelcomeModal}
      />
    </Box>
  );
}
