import getTemplateByName from "@/app/actions/get-template-by-name";
import makeHTML from "@/app/utils/generateHtmlUtils";
import { Button } from "@mui/material";

export interface GenerateHTMLButtonProps {
  newTemplateName: string
}

const GenerateHTMLButton = ({ newTemplateName }: GenerateHTMLButtonProps) => {
  const generateHTML = async() => {
    const template = await getTemplateByName(newTemplateName)
    makeHTML(template, "ES")
    makeHTML(template, "EN")
    makeHTML(template, "PT")
    makeHTML(template, "FR")
  }

  return (
    <Button variant="contained" color="success" sx={{width: '100%',fontFamily: "Gilroy, Arial, Helvetica, sans-serif", fontWeight: '700', fontSize: "16px"}} onClick={generateHTML}>
      Export HTML
    </Button>
  );
};

export default GenerateHTMLButton;
