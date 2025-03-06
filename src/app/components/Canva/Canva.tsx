import json from "../json.json";
import CallComponent from "../CallComponent/CallComponent";
import { ObjectComponents } from "@/app/types/Components";

export const addComponent = (componentName: string, variant: string, language: string) => {
  switch (componentName) {
    case "Headers":
      CallComponent(componentName, variant, language);
      console.log("Estoy en Headers");
      const headerData = ObjectComponents.Components[componentName as keyof typeof ObjectComponents.Components];
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
      })
      console.log(json.header);
      break;
    case "Footers":
      CallComponent(componentName, variant, language);
      console.log("Estoy en Footers");
      const footerData = ObjectComponents.Components[componentName as keyof typeof ObjectComponents.Components];
      json.footer.push({
        componentName: componentName,
        variant: variant,
        renderHTML: footerData.renderHTML,
        previewHTML: footerData.previewHTML,
        props: {
          ES: footerData?.props.ES,
          EN: footerData?.props.EN,
          PT: footerData?.props.PT,
          FR: footerData?.props.FR,
        },
      })
      console.log(json.footer);
    default:
      break;
  }}

export const Canva = ({ language }: { language: string }) => {
  // console.log(json.header.variant);
  // Llamaremos a los componentes y los imprimiremos dentro del Master Container
  const component = "Headers";
  const variant = "Reservation Code"
  CallComponent(component, variant, language);

  return (
    <div
      style={{ width: "100%" }}
      dangerouslySetInnerHTML={{
        __html:
          ObjectComponents.Components[
            component as keyof typeof ObjectComponents.Components
          ]?.renderHTML,
      }}
    />
  );
};
