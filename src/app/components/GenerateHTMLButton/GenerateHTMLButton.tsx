import { Button } from "@mui/material";
import { GenerateHTMLButtonProps } from "./types";

const generateHTML = (newTemplateName: string) => {
  console.log("Descarga HTML con nombre:", newTemplateName);
};

const GenerateHTMLButton = (props: GenerateHTMLButtonProps) => {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={() => generateHTML(props.newTemplateName)}
    >
      Generate HTML
    </Button>
  );
};

export default GenerateHTMLButton;
