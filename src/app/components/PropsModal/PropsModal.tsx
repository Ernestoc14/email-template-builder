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
import { ComponentsTranslations, ObjectComponents } from "@/app/types/Components";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import { getComponent } from "@/app/utils/canvasUtils";
import MarkdownInput from "@/app/components/MarkdownInput/MarkdownInput";

export const addComponent = (componentName: string, variant: string) => {
  
  let component: Component | null = null;
  const componentId = `${componentName}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

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
        esProps: headerData?.props.ES as unknown as ComponentsTranslations,
        enProps: headerData?.props.EN as unknown as ComponentsTranslations,
        ptProps: headerData?.props.PT as unknown as ComponentsTranslations,
        frProps: headerData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: titleBoxData?.props.ES as unknown as ComponentsTranslations,
        enProps: titleBoxData?.props.EN as unknown as ComponentsTranslations,
        ptProps: titleBoxData?.props.PT as unknown as ComponentsTranslations,
        frProps: titleBoxData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: sectionContainerData?.props.ES as unknown as ComponentsTranslations,
        enProps: sectionContainerData?.props.EN as unknown as ComponentsTranslations,
        ptProps: sectionContainerData?.props.PT as unknown as ComponentsTranslations,
        frProps: sectionContainerData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: buttonData?.props.ES as unknown as ComponentsTranslations,
        enProps: buttonData?.props.EN as unknown as ComponentsTranslations,
        ptProps: buttonData?.props.PT as unknown as ComponentsTranslations,
        frProps: buttonData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: infobarData?.props.ES as unknown as ComponentsTranslations,
        enProps: infobarData?.props.EN as unknown as ComponentsTranslations,
        ptProps: infobarData?.props.PT as unknown as ComponentsTranslations,
        frProps: infobarData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: alertData?.props.ES as unknown as ComponentsTranslations,
        enProps: alertData?.props.EN as unknown as ComponentsTranslations,
        ptProps: alertData?.props.PT as unknown as ComponentsTranslations,
        frProps: alertData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: bannerData?.props.ES as unknown as ComponentsTranslations,
        enProps: bannerData?.props.EN as unknown as ComponentsTranslations,
        ptProps: bannerData?.props.PT as unknown as ComponentsTranslations,
        frProps: bannerData?.props.FR as unknown as ComponentsTranslations,
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
        esProps: itineraryCardData?.props.ES as unknown as ComponentsTranslations,
        enProps: itineraryCardData?.props.EN as unknown as ComponentsTranslations,
        ptProps: itineraryCardData?.props.PT as unknown as ComponentsTranslations,
        frProps: itineraryCardData?.props.FR as unknown as ComponentsTranslations,
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
          esProps: paxCardData?.props.ES as unknown as ComponentsTranslations,
          enProps: paxCardData?.props.EN as unknown as ComponentsTranslations,
          ptProps: paxCardData?.props.PT as unknown as ComponentsTranslations,
          frProps: paxCardData?.props.FR as unknown as ComponentsTranslations,
        }
    break;

    case "Footers":
      const footerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      component = {
        componentId,
        componentName,
        variant,
        esProps: footerData?.props.ES as unknown as ComponentsTranslations,
        enProps: footerData?.props.EN as unknown as ComponentsTranslations,
        ptProps: footerData?.props.PT as unknown as ComponentsTranslations,
        frProps: footerData?.props.FR as unknown as ComponentsTranslations,
      };
    break;

    case "Markdown":
        const markdownData =
          ObjectComponents.Components[
            componentName as keyof typeof ObjectComponents.Components
          ];
        component = {
          componentId,
          componentName,
          variant,
          esProps: markdownData?.props.ES as unknown as ComponentsTranslations,
          enProps: markdownData?.props.EN as unknown as ComponentsTranslations,
          ptProps: markdownData?.props.PT as unknown as ComponentsTranslations,
          frProps: markdownData?.props.FR as unknown as ComponentsTranslations,
        };
    break;

    case "InformativeBox":
        const informativeBoxData =
          ObjectComponents.Components[
            componentName as keyof typeof ObjectComponents.Components
          ];
        component = {
          componentId,
          componentName,
          variant,
          esProps: informativeBoxData?.props.ES as unknown as ComponentsTranslations,
          enProps: informativeBoxData?.props.EN as unknown as ComponentsTranslations,
          ptProps: informativeBoxData?.props.PT as unknown as ComponentsTranslations,
          frProps: informativeBoxData?.props.FR as unknown as ComponentsTranslations,
        };
    break;
    
    case "TopicCards":
        const topicCardData = 
          ObjectComponents.Components[
            componentName as keyof typeof ObjectComponents.Components
          ];
          component = {
            componentId,
            componentName,
            variant,
            esProps: topicCardData?.props.ES as unknown as ComponentsTranslations,
            enProps: topicCardData?.props.EN as unknown as ComponentsTranslations,
            ptProps: topicCardData?.props.PT as unknown as ComponentsTranslations,
            frProps: topicCardData?.props.FR as unknown as ComponentsTranslations,
          }
    break;

    case "Images":
          const imageData = 
            ObjectComponents.Components[
            componentName as keyof typeof ObjectComponents.Components
          ];
          component = {
            componentId,
            componentName,
            variant,
            esProps: imageData?.props.ES as unknown as ComponentsTranslations,
            enProps: imageData?.props.EN as unknown as ComponentsTranslations,
            ptProps: imageData?.props.PT as unknown as ComponentsTranslations,
            frProps: imageData?.props.FR as unknown as ComponentsTranslations,
          }
    break;
          
    default:
      break;
  }
  return component;
};

type Language = 'ES' | 'EN' | 'PT' | 'FR';
type PropValues = Record<string, string>;
export type LocalizedProps = Record<Language, PropValues>;

const PropsModal = ({
  isOpen,
  componentName,
  componentVariant,
  onClose,
  sendComponent
}: PropsModalProps) => {
  const [updatedProps, setUpdatedProps] = useState<LocalizedProps>({
    ES: {},
    EN: {},
    PT: {},
    FR: {},
  });
  
  const { language, setLanguage } = useLanguage();
  
  // Load component props when modal opens
  useEffect(() => {
    if (!componentName || !isOpen) return;
    
    const component = getComponent(componentName);
    if (component) {
      setUpdatedProps(prevProps => ({
        ...prevProps,
        ...component.props as unknown as LocalizedProps,
      }));
    }

    if(!component.propModal){
      handleSaveComponent()
    }
  }, [componentName, isOpen]);

  
  // Handle prop change for current language
  const handlePropChange = (propKey: string, value: string) => {
    setUpdatedProps(prev => ({
      ...prev,
      [language]: {
        ...(prev[language] || {}),
        [propKey]: value,
      },
    }));
  };

  // Handle language tab change
  const handleLanguageChange = (
    _event: React.SyntheticEvent,
    newLanguage: Language
  ) => {
    setLanguage(newLanguage);
  };

  // Save component and close modal
  const handleSaveComponent = () => {
    if (!componentName) return;
    
    const component = getComponent(componentName);
    if (component) {
      component.props = { ...updatedProps } as unknown as ComponentsTranslations;
      sendComponent(addComponent(componentName, componentVariant));
    }
    onClose();
  };

  // Calculate layout based on number of props
  const getGridColumns = () => {
    const propsLength = Object.keys(
      updatedProps[language as Language] || {}
    ).length;
    
    if (propsLength > 6) return "repeat(3, 1fr)";
    if (propsLength > 4) return "repeat(2, 1fr)";
    return "repeat(1, 1fr)";
  };

  // Calculate modal width based on number of props
  const getModalWidth = () => {
    const propsLength = Object.keys(
      updatedProps[language as Language] || {}
    ).length;
    
    return componentName === "Markdown" ? "70%" : propsLength > 6 ? "50%" : "30%";
  };

  // Custom TextField styles
  const textFieldStyles = {
    mt: 2,
    mb: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
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
      transition: "all 0.3s ease",
    },
    "& .MuiInputLabel-shrink": {
      color: "black",
    },
  };

  const camelCaseToSentence = (str: string) => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // múltiples mayúsculas
      .replace(/([a-z])([0-9])/g, '$1 $2') // letra seguida de número
      .replace(/([0-9])([A-Z])/g, '$1 $2') // número seguido de mayúscula
      .toLowerCase()
      .replace(/^./, char => char.toUpperCase());
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: getModalWidth,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Personaliza {componentVariant} de {componentName} para {language}
        </Typography>
        
        {/* Language Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Tabs
            value={language}
            onChange={handleLanguageChange}
            sx={{ border: "1px solid #e5e5e5" }}
          >
            <Tab label="ES" value="ES" />
            <Tab label="EN" value="EN" />
            <Tab label="PT" value="PT" />
            <Tab label="FR" value="FR" />
          </Tabs>
        </Box>
        
        {/* Properties Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: getGridColumns,
            gap: 2,
          }}
        > 
          {Object.entries(updatedProps[language as Language] || {}).map(
            ([propKey, propValue], index) => (
              componentName === "Markdown" ? (
                <MarkdownInput value={propValue} onChange={(e)=>handlePropChange(propKey, e)} key={index} />
              ) : (
                <TextField
                  key={index}
                  id={propKey}
                  label={camelCaseToSentence(propKey)}
                  value={propValue}
                  size="small"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handlePropChange(propKey, e.target.value)}
                  sx={{
                    ...textFieldStyles,
                    "& .MuiOutlinedInput-root": {
                      ...textFieldStyles["& .MuiOutlinedInput-root"],
                      backgroundColor: /labelText/i.test(propKey)
                        ? "#e0e0e0"
                        : "#f9fafb",
                    },
                  }}
                />
              )
            )
          )}
        </Box>
        
        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              textTransform: "none",
              backgroundColor: "white",
              color: "#0032A0",
              border: "1px solid #0032A0",
            }}
          >
            Cerrar
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSaveComponent}
            sx={{ 
              textTransform: "none", 
              backgroundColor: "#0032A0" 
            }}
          >
            Insertar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PropsModal;