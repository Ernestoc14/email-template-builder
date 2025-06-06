import { Box, Popover, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";
import { RenderComponent } from "../RenderComponent/RenderComponent";
import { getComponent } from "@/app/utils/canvasUtils";
import { Component, SectionComponent } from "@/app/context/MasterJSONContext";
import { ComponentsTranslations } from "@/app/types/Components";

const PreviewComponent: React.FC<PreviewComponentProps> = ({
  open,
  onClose,
  component,
  variant,
  anchorEl,
}) => {
  const componentDefaultProps = getComponent(component)

  let data : Component | SectionComponent = {
    componentId: variant + "_" + component,
    componentName: component,
    variant: variant,
    esProps: componentDefaultProps.props.ES as unknown as ComponentsTranslations,
    enProps: componentDefaultProps.props.EN as unknown as ComponentsTranslations,
    ptProps: componentDefaultProps.props.PT as unknown as ComponentsTranslations,
    frProps: componentDefaultProps.props.FR as unknown as ComponentsTranslations
  }

  if (component === "SectionContainers") {
    data = {
      sectionComponentId: `preview-${Math.random()}`,
      componentName: component,
      sectionComponentsInfo: data,
      components: [],
      variant: variant
    }
  }

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
          width: "50%",
          height: "100%",
        }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
          // Width del preview component
          width: "800px",
          height: "100%",
        }}
      >
        <Typography variant="h6" component="h1">
          Variante {variant} de {component}
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            padding: 1, 
            "&:hover": { backgroundColor: "#a5a5a5"},
             backgroundColor: "#0032A0"
          }}
        >
          <RenderComponent isPreview id="preview-render-component" data={data}/>
        </Box>
      </Box>
    </Popover>
  );
};

export default PreviewComponent;
