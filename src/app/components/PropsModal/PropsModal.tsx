import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { PropsModalProps } from "./types";
import { ObjectComponents } from "@/app/types/Components";
import { useState } from "react";
import CallComponent from "../CallComponent/CallComponent";

const PropsModal = ({
  isOpen,
  onClose,
  onInsert,
  componentName,
  componentVariant,
  language,
}: PropsModalProps) => {
  const [updatedProps, setUpdatedProps] = useState({});

  const handleChange = (propsKey: string, value: string) => {
    setUpdatedProps((prev) => ({...prev, [propsKey]: value}))
  }

  const handleAddComponent = () => {
    if (componentName && language) {
      const component = ObjectComponents.Components[componentName as keyof typeof ObjectComponents.Components]
      component.props = {
        ...component.props,
        [language]: {
          ...component.props[language as keyof typeof component.props],
          ...updatedProps
        }
      }
    }
    // Generando HTML Nuevo con props actualizados al llamar CallComponent
    CallComponent(componentName, componentVariant, language);
    console.log(componentName, componentVariant);
    const updatedHTML = ObjectComponents.Components[componentName as keyof typeof ObjectComponents.Components]?.renderHTML
    onInsert(updatedHTML); // Llama a la función de DropZone para insertar el componente pasandole HTML con Props
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: () => {
              const propsLength = Object.keys(
                ObjectComponents.Components?.[
                  componentName as keyof typeof ObjectComponents.Components
                ]?.props[language as "ES" | "EN" | "PT" | "FR"] || {}
              ).length;
              console.log(propsLength)
              if(propsLength > 6) return "repeat(3, 1fr)";
              if(propsLength > 4) return "repeat(2, 1fr)";
              return "repeat(1, 1fr)";
            },
            gap: 2,
          }}
        >
          {Object.entries(
  ObjectComponents.Components[
    componentName as keyof typeof ObjectComponents.Components
  ]?.props[language as "ES" | "EN" | "PT" | "FR"] || {}
).map(([propKey, propValue], index) => (
            <TextField
              key={index}
              id={propKey}
              label={propKey}
              defaultValue={propValue}
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
          ))}
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
            sx={{ textTransform: "none", backgroundColor: "white", color: "#0032A0", border: "1px solid #0032A0" }}
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
