// Este archivo controla que variable de cual componente se renderiza en el preview
import Headers from "@/app/htmlComponents/Headers/Headers";
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
      console.log("TitleBoxs component called with variant:", variant);
    }
    else {
      console.warn(`Unknown component type: ${component}`);
    }
  } catch (error) {
    console.error(`Error in CallComponent for ${component} with variant ${variant}:`, error);
  }
  // return { renderHTML: "", previewHTML: "" };
};

export default CallComponent;