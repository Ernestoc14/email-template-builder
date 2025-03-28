import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { PropsModalProps } from "./types";
import { ObjectComponents } from "@/app/types/Components";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";

export const addComponent = (componentName: string, variant: string) => {
  let component: Component | null = null;
  const componentId = `${componentName}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
  console.log(componentId);

  switch (componentName) {
    case "Headers":
      const headerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: headerData?.props.ES,
        enProps: headerData?.props.EN,
        ptProps: headerData?.props.PT,
        frProps: headerData?.props.FR,
      };
      break;
    case "TitleBoxs":
      const titleBoxData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: titleBoxData?.props.ES,
        enProps: titleBoxData?.props.EN,
        ptProps: titleBoxData?.props.PT,
        frProps: titleBoxData?.props.FR,
      };
      break;
    case "SectionContainers":
      const sectionContainerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: sectionContainerData?.props.ES,
        enProps: sectionContainerData?.props.EN,
        ptProps: sectionContainerData?.props.PT,
        frProps: sectionContainerData?.props.FR,
      };
      break;
    case "Buttons":
      const buttonData =
      ObjectComponents.Components[
        componentName as keyof typeof ObjectComponents.Components
      ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: buttonData?.props.ES,
        enProps: buttonData?.props.EN,
        ptProps: buttonData?.props.PT,
        frProps: buttonData?.props.FR,
      };
      break;
    case "Infobars":
      const infobarData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: infobarData?.props.ES,
        enProps: infobarData?.props.EN,
        ptProps: infobarData?.props.PT,
        frProps: infobarData?.props.FR,
      };
      break;
    case "Alerts":
      const alertData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: alertData?.props.ES,
        enProps: alertData?.props.EN,
        ptProps: alertData?.props.PT,
        frProps: alertData?.props.FR,
      };
      break;
    case "Banners":
      const bannerData = ObjectComponents.Components[
        componentName as keyof typeof ObjectComponents.Components
      ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: bannerData?.props.ES,
        enProps: bannerData?.props.EN,
        ptProps: bannerData?.props.PT,
        frProps: bannerData?.props.FR,
      };
      break;
    case "ItineraryCards":
      const itineraryCardData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: itineraryCardData?.props.ES,
        enProps: itineraryCardData?.props.EN,
        ptProps: itineraryCardData?.props.PT,
        frProps: itineraryCardData?.props.FR,
      };
      break;
    case "PaxCards":
      const paxCardData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
        component = {
          componentId,
          componentName,
          variant, 
          esProps: paxCardData?.props.ES,
          enProps: paxCardData?.props.EN,
          ptProps: paxCardData?.props.PT,
          frProps: paxCardData?.props.FR,
        }
    case "Footers":
      const footerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: footerData?.props.ES,
        enProps: footerData?.props.EN,
        ptProps: footerData?.props.PT,
        frProps: footerData?.props.FR,
      };
    default:
      break;
  }
  return component;
};

const PropsModal = ({
  isOpen,
  onClose,
  componentName,
  componentVariant,
  sendComponent,
}: PropsModalProps) => {
  const [updatedProps, setUpdatedProps] = useState<
    Record<string, Record<string, string>>
  >({
    ES: {},
    EN: {},
    PT: {},
    FR: {},
  });
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (componentName && isOpen) {
      const component =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      if (component) {
        setUpdatedProps((prevProps) => ({
          ...prevProps,
          ...component.props,
        }));
      }
    }
  }, [componentName, isOpen]);

  const handleChange = (propsKey: string, value: string) => {
    setUpdatedProps((prev) => ({
      ...prev,
      [language]: {
        ...(prev[language] || {}),
        [propsKey]: value,
      },
    }));
  };

  const handleChangeLanguage = (
    _event: React.SyntheticEvent,
    newLanguage: "ES" | "EN" | "PT" | "FR"
  ) => {
    setLanguage(newLanguage);
  };

  const handleAddComponent = () => {
    if (componentName) {
      const component =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      if (component) {
        component.props = { ...updatedProps };
      }
      sendComponent(addComponent(componentName, componentVariant));
    }
    onClose();
  };


  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: 2,
          width: () => {
            const propsLength = Object.keys(
              ObjectComponents.Components?.[
                componentName as keyof typeof ObjectComponents.Components
              ]?.props[language as "ES" | "EN" | "PT" | "FR"] || {}
            ).length;
            return propsLength > 6 ? "50%" : "30%";
          },
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Personaliza {componentVariant} de {componentName} para {language}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Tabs
            value={language}
            onChange={handleChangeLanguage}
            sx={{ border: "1px solid #e5e5e5" }}
          >
            <Tab label="ES" value="ES" />
            <Tab label="EN" value="EN" />
            <Tab label="PT" value="PT" />
            <Tab label="FR" value="FR" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: () => {
              const propsLength = Object.keys(
                ObjectComponents.Components?.[
                  componentName as keyof typeof ObjectComponents.Components
                ]?.props[language as "ES" | "EN" | "PT" | "FR"] || {}
              ).length;
              if (propsLength > 6) return "repeat(3, 1fr)";
              if (propsLength > 4) return "repeat(2, 1fr)";
              return "repeat(1, 1fr)";
            },
            gap: 2,
          }}
        >
          {Object.entries(updatedProps[language] || {}).map(
            ([propKey, propValue], index) => (
              <TextField
                key={index}
                id={propKey}
                label={propKey}
                value={propValue}
                size="small"
                fullWidth
                variant="outlined"
                onChange={(e) => handleChange(propKey, e.target.value)}
                sx={{
                  mt: 2,
                  mb: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: /labelText/i.test(propKey)
                      ? "#e0e0e0"
                      : "#f9fafb",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover fieldset": {
                      borderColor: "#6366f1",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4f46e5",
                      boxShadow: "0 0 5px rgba(99, 102, 241, 0.5)",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4f46e5",
                    fontWeight: 500,
                    fontSize: "20px",
                    backgroundColor: "#f9fafb",
                    transition: "all 0.3s ease",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "black",
                  },
                }}
              />
            )
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "none", backgroundColor: "#0032A0" }}
            fullWidth
            onClick={handleAddComponent}
          >
            Insertar
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "white",
              color: "#0032A0",
              border: "1px solid #0032A0",
            }}
            fullWidth
            onClick={onClose}
          >
            Cerrar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PropsModal;
