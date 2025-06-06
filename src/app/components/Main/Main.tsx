import { useState } from "react";
import Image from "next/image";
import {
  Box,
  List,
  Tab,
  Typography,
  Tabs,
  Divider,
} from "@mui/material";
import { useLanguage } from "@/app/context/LanguageContext";
import { ObjectComponents } from "@/app/types/Components";
import ListItemComponent from "../ListItemComponent/ListItemComponent";
import GenerateHTMLButton from "../GenerateHTMLButton/GenerateHTMLButton";
import Canvas from "../Canva/Canva";
import { WelcomeModal } from "../WelcomeModal/WelcomeModal";
import { CreateNewTemplateModal } from "../CreateNewTemplateModal/CreateNewTemplateModal";
import { HistoryTemplateModal } from "../HistoryTemplateModal/HistoryTemplateModal";
import style from "./style";
import Toggle from "../Toggle/Toggle";

const Main = () => {
  const styles = style

  const [ showCanvas, setShowCanvas ] = useState(false)
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isCreateNewTemplateModalOpen, setIsCreateNewTemplateModalOpen] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [isHistoryTemplateModalOpen, setIsHistoryTemplateModalOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Tabs Functions
  const handleChangeLanguage = (
    event: React.SyntheticEvent,
    newLanguage: "ES" | "EN" | "PT" | "FR"
  ) => {
    setLanguage(newLanguage);
  };

  // WelcomeModal Functions
  const handleWelcomeModalClose = () => setIsWelcomeModalOpen(false);

  const handleCreateTemplateModalClose = () => setIsCreateNewTemplateModalOpen(false);

  const handleHistoryTemplateModalClose = () => setIsHistoryTemplateModalOpen(false);

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
    <Box sx={styles.container}>
      <Box className="header" component="header">
        <Box className="logos">
          <Image src="https://www.copaair.com/webassets/images/copa-logo-white.png" alt="Copa Logo" width={150} height={25}/>
          <Divider sx={{ opacity: 0.6, borderColor: '#ffffff', height: '40px' }}  orientation="vertical" />
          <Image src="https://www.copaair.com/webassets/images/digital-group-blue-bg.png" alt="Copa Logo" width={100} height={40}/>
        </Box>
        <Typography className="title" variant="h4">
          Notification Template Builder
        </Typography>
      </Box>
      <Box className="section" component="section">
        <Box className="sidebar" component="aside">
          <Typography variant="h6">
            Lista de Componentes
          </Typography>
          <Box height={'calc(100vh - 154px)'}>
            <List component="menu" sx={{ padding: "0", margin: "0", width: "100%", height: '100%', overflow: 'auto' }} >
              {Object.keys(ObjectComponents.Components).map(
                (component: string, index: number) => (
                  <ListItemComponent
                    key={index}
                    primary={component}
                    isLast={
                      index === Object.keys(ObjectComponents.Components).length - 1
                    }
                    language={language}
                  />
                )
              )}
            </List>
          </Box>
        </Box>
        <Box className="canvas">
          <Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
              {showCanvas && (
                <Canvas template={newTemplateName}/>
              )}
            </Box>
          </Box>
        </Box>
        <Box className="sidebar" component='aside'>
          <Box component="nav" className="tools">
            <Box className="toggles">
              <Box className="toggle-section">
                <Typography className="template-title">{newTemplateName}</Typography>
              </Box>
              <Box className="toggle-section">
                <Typography className="sub-heading">Canvas Mode</Typography>
                <Toggle />
              </Box>
              <Box className="toggle-section">
                <Typography className="sub-heading">Language</Typography>
                <Tabs className="langs" value={language} onChange={handleChangeLanguage}>
                  <Tab sx={{flex:"1", minWidth: 'auto', color: '#0032A0 !important', fontWeight:"600"}} label="ES" value="ES" />
                  <Tab sx={{flex:"1", minWidth: 'auto', color: '#0032A0 !important', fontWeight:"600"}} label="EN" value="EN" />
                  <Tab sx={{flex:"1", minWidth: 'auto', color: '#0032A0 !important', fontWeight:"600"}} label="PT" value="PT" />
                  <Tab sx={{flex:"1", minWidth: 'auto', color: '#0032A0 !important', fontWeight:"600"}} label="FR" value="FR" />
                </Tabs>
              </Box>
              <Box className="toggle-section">
                <GenerateHTMLButton newTemplateName={newTemplateName}/>
              </Box>  
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
        sendName={()=>{setShowCanvas(true)}}
      />
      <HistoryTemplateModal
        open={isHistoryTemplateModalOpen}
        onClose={handleHistoryTemplateModalClose}
        goBack={handleReopenWelcomeModal}
        setNewTemplateName={setNewTemplateName}
        sendName={()=>{setShowCanvas(true)}}
      />
    </Box>
  );
}

export default Main
