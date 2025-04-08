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
import { Box, Button } from "@mui/material";

export const RenderComponent = ({
  sendComponent,
  data,
  onEdit,
  onDelete,
}: {
  sendComponent?: (component: Component, dropZoneId?: string) => void;
  data: Component;
  onEdit: (component: Component) => void;
  onDelete: (component: Component) => void;
}) => {
  const handleComponent = (component: Component, dropZoneId?: string) => {
    if (sendComponent) sendComponent(component, dropZoneId);
  };

  const renderHTMLComponent = () => {
    switch (data.componentName) {
      case "Headers":
        console.log("Render CMP", data.componentId);
        return <Headers data={data} />;
      case "TitleBoxs":
        console.log("Render CMP", data.componentId, data);
        return <TitleBoxs data={data} />;
        break;
      case "SectionContainers":
        // console.log("Render CMP", data.componentId)
        return (
          <SectionContainers data={data} sendComponent={handleComponent} />
        );
      case "Buttons":
        console.log("Render CMP", data.componentId);
        return <Buttons data={data} />;
      case "Infobars":
        console.log("Render CMP", data.componentId);
        return <Infobars data={data} />;
      case "Alerts":
        console.log("Render CMP", data.componentId);
        return <Alerts data={data} />;
      case "Banners":
        console.log("Render CMP", data.componentId);
        return <Banners data={data} />;
      case "ItineraryCards":
        console.log("Render CMP", data.componentId);
        return <ItineraryCards data={data} />;
      case "PaxCards":
        console.log("Render CMP", data.componentId);
        return;
      case "Footers":
        console.log("Render CMP", data.componentId);
        return <Footers data={data} />;
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .action-buttons": {
          display: "flex",
        },
      }}
    >
      <Box
        className="action-buttons"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "none",
          gap: 1,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#3B82F6",
            color: "white",
            px: 2,
            py: 1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2563EB",
            },
          }}
          onClick={() => onEdit(data)}
        >
          Edit
        </Button>
        <Button
          sx={{
            backgroundColor: "#6B7280",
            color: "white",
            px: 2,
            py: 1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2563EB",
            },
          }}
          onClick={() => onDelete(data)}
        >
          Delete
        </Button>
      </Box>
      {renderHTMLComponent()}
    </Box>
  );
};
