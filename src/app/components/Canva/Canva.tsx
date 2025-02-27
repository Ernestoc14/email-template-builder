import json from "../json.json";
import CallComponent from "../CallComponent/CallComponent";
import { ObjectComponents } from "@/app/types/Components";

export const Canva = ({ language }: { language: string }) => {
  console.log(json.header.variant);
  // Llamaremos a los componentes y los imprimiremos dentro del Master Container
  const component = "Headers";
  const variant = "Reservation Code"
  CallComponent(component, variant, language);

  // const var =  type json 


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
