import { Box, Modal, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";
import ComponentVariants from "@/app/types/Components";

const PreviewComponent: React.FC<PreviewComponentProps> = ({ open, onClose, component }) => {
  const variants = ComponentVariants[component];
  return (
    <Modal 
    open={open} onClose={onClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
          width: 500,
        }}
      >
        <Typography variant="h6" component="h1">
          Variantes del Componente: {component}
        </Typography>
        <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
          {variants.map((variant, index) => (
            <Box key={index} sx={{ padding: "10px" }}>
              {variant}
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

// Hacer un .map del componente deseado a Preview para mostrarlo en el modal 
// Utililzar variables fijas que contengan las variantes del componente


// Ejp: Headers -> variant: "copaBothLogo"
// Ejp: Headers -> variant: "reservationCode"
//{Headers.map((cmp, index) => (
//  <PreviewComponent key={index} variant={cmp.variant} />
//))} 

export default PreviewComponent;
