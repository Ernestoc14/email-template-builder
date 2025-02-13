import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { PropsModalProps } from "./types";
import { ObjectComponents } from "@/app/types/Components";

const PropsModal = ({
  isOpen,
  onClose,
  onInsert,
  componentName,
  componentVariant,
}: PropsModalProps) => {
  const handleAddComponent = () => {
    onInsert(); // Llama a la función de DropZone para insertar el componente
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: 2,
          width: "30%",
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
          Personaliza {componentVariant} de {componentName}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: () => {
              const propsLength = Object.keys(
                ObjectComponents.Components?.[
                  componentName as keyof typeof ObjectComponents.Components
                ]?.props
              ).length;
              return propsLength <= 4 ? "repeat(1, 1fr)" : "repeat(2, 1fr)";
            },
            gap: 2,
          }}
        >
          {Object.entries(
            ObjectComponents.Components[
              componentName as keyof typeof ObjectComponents.Components
            ]?.props || {}
          ).map(([propKey, propValue], index) => (
            <TextField
              key={index}
              id={propKey}
              label={propKey}
              defaultValue={propValue}
              size="small"
              fullWidth
              variant="outlined"
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
            sx={{ textTransform: "none", backgroundColor: "#008800" }}
            fullWidth
            onClick={handleAddComponent}
          >
            Insertar
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none", backgroundColor: "#cc0000" }}
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
