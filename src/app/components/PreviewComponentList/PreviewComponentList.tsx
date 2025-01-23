import { Box, Popover, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";
import ComponentVariants from "@/app/types/Components";

const PreviewComponent: React.FC<PreviewComponentProps> = ({ open, onClose, component, anchorEl }) => {
  const variants = ComponentVariants[component] || [];
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
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
          Variantes del Componente: {component}
        </Typography>
        <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
          {variants.length > 0 ? (
            variants.map((variant, index) => (
              <Box
                key={index}
                sx={{
                  padding: 1,
                  width: "450px",
                  "&:last-child": { borderBottom: "none" },
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                {variant}
              </Box>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No hay variantes disponibles.
            </Typography>
          )}
        </Box>
      </Box>
    </Popover>
  );
};

export default PreviewComponent;
