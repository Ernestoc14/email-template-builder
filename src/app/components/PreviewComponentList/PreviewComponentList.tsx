import { Box, Popover, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";

const PreviewComponent: React.FC<PreviewComponentProps> = ({
  open,
  onClose,
  component,
  variant,
  anchorEl,
  // renderHTML,
  previewHTML,
}) => {
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
          width: "100%",
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
          Variante {variant} de {component}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{width: "500px"}} dangerouslySetInnerHTML={{ __html: previewHTML }} />
        </Box>
      </Box>
    </Popover>
  );
};

export default PreviewComponent;
