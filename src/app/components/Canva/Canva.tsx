import json from "../json.json";
import CallComponent from "../CallComponent/CallComponent";
import { ObjectComponents } from "@/app/types/Components";

export const addComponent = (
  componentName: string,
  variant: string,
  language: string
) => {
  switch (componentName) {
    case "Headers":
      CallComponent(componentName, variant, language);
      const headerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      json.header.push({
        componentName,
        variant,
        renderHTML: headerData.renderHTML,
        previewHTML: headerData.previewHTML,
        props: {
          ES: headerData?.props.ES,
          EN: headerData?.props.EN,
          PT: headerData?.props.PT,
          FR: headerData?.props.FR,
        },
      });
      break;
    case "TitleBoxs":
      CallComponent(componentName, variant, language);
      const titleBoxData = 
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      json.boxAzul.components.push({
        componentName,
        variant,
        renderHTML: titleBoxData.renderHTML,
        previewHTML: titleBoxData.previewHTML,
        props: {
          ES: titleBoxData?.props.ES,
          EN: titleBoxData?.props.EN,
          PT: titleBoxData?.props.PT,
          FR: titleBoxData?.props.FR,
        }
      });
      break;
    case "Footers":
      CallComponent(componentName, variant, language);
      const footerData =
        ObjectComponents.Components[
          componentName as keyof typeof ObjectComponents.Components
        ];
      json.footer.push({
        componentName,
        variant,
        renderHTML: footerData.renderHTML,
        previewHTML: footerData.previewHTML,
        props: {
          ES: footerData?.props.ES,
          EN: footerData?.props.EN,
          PT: footerData?.props.PT,
          FR: footerData?.props.FR,
        },
      });
    default:
      break;
  }
};
