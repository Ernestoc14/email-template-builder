import { Box, Popover, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";
// import ComponentVariants from "@/app/types/Components";
// import { ReactElement } from "react";

const PreviewComponent: React.FC<PreviewComponentProps> = ({ open, onClose, component, typeVariant }) => {
  // const variants = ComponentVariants[component] || [];
  // const selectedVariant = variants.find((variantObj: ReactElement) => variantObj === variant);
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx= {{
          padding: 2, 
          borderRadius: 2,
        }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="h6" component="h1">
          Variante {typeVariant} del Componente {component} 
        </Typography>
              <Box
                sx={{
                  padding: 1,
                  width: "650px",
                  "&:last-child": { borderBottom: "none" },
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#a5a5a5" },
                }}
              >
                {component}
              </Box>
      </Box>
    </Popover>
  );
};

export default PreviewComponent;
