// Este archivo controla que variable de cual componente se renderiza en el preview
import Buttons from "@/app/htmlComponents/Buttons/Buttons";
import Headers from "@/app/htmlComponents/Headers/Headers";
import TitleBoxs from "@/app/htmlComponents/Title-box/TItleBoxs";
import { ObjectComponents } from "@/app/types/Components";

interface ComponentResult {
  renderHTML: string;
  previewHTML: string;
}

const CallComponent = (component: string, variant: string): void => {
  try {
    if (component === "Headers") {
      const result = Headers(variant);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Headers.renderHTML = renderHTML;
      ObjectComponents.Components.Headers.previewHTML = previewHTML;
    }
    else if (component === "TitleBoxs") {
      // Add TitleBoxs logic here when needed
      const result = TitleBoxs(variant);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.TitleBoxs.renderHTML = renderHTML;
      ObjectComponents.Components.TitleBoxs.previewHTML = previewHTML;
    }
    else if (component === "Buttons") {
      const result = Buttons(variant);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Buttons.renderHTML = renderHTML;
      ObjectComponents.Components.Buttons.previewHTML = previewHTML;
      console.log("PREV", ObjectComponents.Components.Buttons.previewHTML);  
    }
  } catch (error) {
    console.error(`Error in CallComponent for ${component} with variant ${variant}:`, error);
  }
};

export default CallComponent;