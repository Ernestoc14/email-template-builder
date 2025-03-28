import Headers from "@/app/htmlComponents/Headers/Headers";
import Footers from "@/app/htmlComponents/Footers/Footers";
import TitleBoxs from "@/app/htmlComponents/Title-boxs/TItleBoxs";
import Alerts from "@/app/htmlComponents/Alerts/Alerts";
import Banners from "@/app/htmlComponents/Banners/Banners";
import Buttons from "@/app/htmlComponents/Buttons/Buttons";
import Infobars from "@/app/htmlComponents/Infobars/Infobars";
import SectionContainers from "@/app/htmlComponents/Section-container/SectionContainers";
import ItineraryCards from "@/app/htmlComponents/Itinerary-cards/ItineraryCards";
import { Component } from "@/app/context/MasterJSONContext";

export const RenderComponent = ({ sendComponent, data }: { sendComponent?: (component: Component) => void,  data: Component }) => {
  const handleComponent = (component: Component) => {
    if(sendComponent) sendComponent(component);
  };

  switch (data.componentName) {
    case "Headers":
      console.log("Render CMP", data.componentId)
      return <Headers data={data} />;
    case "TitleBoxs":
      console.log("Render CMP", data.componentId, data)
      return <TitleBoxs data={data} />;
      break
    case "SectionContainers":
      // console.log("Render CMP", data.componentId)
      return <SectionContainers data={data} sendComponent={handleComponent}/>;
    case "Buttons":
      console.log("Render CMP", data.componentId)
      return <Buttons data={data} />;
    case "Infobars":
      console.log("Render CMP", data.componentId)
      return <Infobars data={data} />;
    case "Alerts":
      console.log("Render CMP", data.componentId)
      return <Alerts data={data} />;
    case "Banners":
      console.log("Render CMP", data.componentId)
      return <Banners data={data} />
    case "ItineraryCards":
      console.log("Render CMP", data.componentId)
      return <ItineraryCards data={data} />;
    case "PaxCards":
      console.log("Render CMP", data.componentId)
      return
    case "Footers":
      console.log("Render CMP", data.componentId)
      return <Footers data={data} />;
    default:
      return <div>Component not found</div>;
  }
};
