// Este archivo controla que variable de cual componente se renderiza en el preview
import Alerts from "@/app/htmlComponents/Alerts/Alerts";
import Banners from "@/app/htmlComponents/Banners/Banners";
import Buttons from "@/app/htmlComponents/Buttons/Buttons";
import Footers from "@/app/htmlComponents/Footers/Footers";
import Headers from "@/app/htmlComponents/Headers/Headers";
import Infobars from "@/app/htmlComponents/Infobars/Infobars";
import ItineraryCards from "@/app/htmlComponents/Itinerary-cards/ItineraryCards";
import PaxCards from "@/app/htmlComponents/Pax-cards/PaxCards";
import SectionContainers from "@/app/htmlComponents/Section-container/SectionContainers";
import TitleBoxs from "@/app/htmlComponents/Title-boxs/TItleBoxs";
import { ObjectComponents } from "@/app/types/Components";

interface ComponentResult {
  renderHTML: string;
  previewHTML: string;
}

const CallComponent = (
  component: string,
  variant: string,
  language: string
): void => {
  try {
    if (component === "Headers") {
      const result = Headers(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Headers.renderHTML = renderHTML;
      ObjectComponents.Components.Headers.previewHTML = previewHTML;
    } else if (component === "TitleBoxs") {
      const result = TitleBoxs(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.TitleBoxs.renderHTML = renderHTML;
      ObjectComponents.Components.TitleBoxs.previewHTML = previewHTML;
    } else if (component === "SectionContainers") {
      const result = SectionContainers(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.SectionContainers.renderHTML = renderHTML;
      ObjectComponents.Components.SectionContainers.previewHTML = previewHTML;
    } else if (component === "Buttons") {
      const result = Buttons(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Buttons.renderHTML = renderHTML;
      ObjectComponents.Components.Buttons.previewHTML = previewHTML;
    } else if (component === "Infobars") {
      const result = Infobars(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Infobars.renderHTML = renderHTML;
      ObjectComponents.Components.Infobars.previewHTML = previewHTML;
    } else if (component === "Alerts") {
      const result = Alerts(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Alerts.renderHTML = renderHTML;
      ObjectComponents.Components.Alerts.previewHTML = previewHTML;
    } else if (component === "Banners") {
      const result = Banners(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Banners.renderHTML = renderHTML;
      ObjectComponents.Components.Banners.previewHTML = previewHTML;
    } else if (component === "ItineraryCards") {
      const result = ItineraryCards(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.ItineraryCards.renderHTML = renderHTML;
      ObjectComponents.Components.ItineraryCards.previewHTML = previewHTML;
    } else if (component === "PaxCards") {
      const result = PaxCards(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.PaxCards.renderHTML = renderHTML;
      ObjectComponents.Components.PaxCards.previewHTML = previewHTML;
    } else if (component == "Footers") {
      const result = Footers(variant, language);
      const { renderHTML, previewHTML } = result as ComponentResult;
      ObjectComponents.Components.Footers.renderHTML = renderHTML;
      ObjectComponents.Components.Footers.previewHTML = previewHTML;
    }
  } catch (error) {
    console.error(
      `Error in CallComponent for ${component} with variant ${variant}:`,
      error
    );
  }
};

export default CallComponent;
