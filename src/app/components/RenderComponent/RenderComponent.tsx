import Headers from "@/app/htmlComponents/Headers/Headers";
import Footers from "@/app/htmlComponents/Footers/Footers";
import Alerts from "@/app/htmlComponents/Alerts/Alerts";
import Banners from "@/app/htmlComponents/Banners/Banners";
import Buttons from "@/app/htmlComponents/Buttons/Buttons";
import Infobars from "@/app/htmlComponents/Infobars/Infobars";
import { Component, SectionComponent } from "@/app/context/MasterJSONContext";
import SectionContainers from "@/app/htmlComponents/SectionContainer/SectionContainers";
import { Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./style";
import TitleBoxs from "@/app/htmlComponents/TitleBoxs/TitleBoxs";
import Markdown from "@/app/htmlComponents/Markdown/Markdown";
import PaxCards from "@/app/htmlComponents/PaxCards/PaxCards";
import InformativeBox from "@/app/htmlComponents/InformativeBox/InformativeBox";
import { useCanvasModeContext } from "@/app/context/CanvasModeContext";
import { useState } from "react";
import TopicCards from "@/app/htmlComponents/TopicCards/TopicCards";
import ItineraryCards from "@/app/htmlComponents/ItineraryCards/ItineraryCards";
export const RenderComponent = ({
  id,
  data,
  isSectionComponent,
  isResponsiveView,
  isPreview,
  sendComponent,
  onEdit,
  onDelete,
}: {
  id: string,
  data: Component | SectionComponent,
  isSectionComponent?: boolean,
  isResponsiveView?: boolean,
  isPreview?: boolean
  sendComponent?: (component: Component, sectionID: string, sectionComponentId?: string) => void;
  onEdit?: ( section: string, componentId: string, data: Component | SectionComponent, sectionComponentId?: string) => void;
  onDelete?: ( section: string, componentId: string, sectionComponentId?: string) => void;
}) => {
  const styles = style

  const { mode } = useCanvasModeContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleComponent = (component: Component, sectionID: string, sectionComponentId?: string) => {
    if (sendComponent) sendComponent(component, sectionID, sectionComponentId);
  };

  const handleDeleteComponent = () => {
    if(onDelete){
      if(isSectionComponent){
        const info = data as SectionComponent;
        onDelete(id, info.sectionComponentId)
      }else{
        const info = data as Component 
        onDelete(id, info.componentId);
      }
    }
  };

  const sectionContainerOnDelete = (section: string, componentId: string, sectionComponentId?: string) =>{
    if(onDelete){  
      onDelete(section, componentId, sectionComponentId)
    }
  }

  const sectionContainerOnEdit = (section: string, componentId: string, sectionComponentId?: string) =>{
    if(onEdit){ 
      onEdit(section, componentId, data, sectionComponentId)
    }
  }

  const handleEditComponent = () => {
    if(onEdit){ 
      if(isSectionComponent){
        const info = data as SectionComponent;
        onEdit(id, info.sectionComponentId, info)
      }else{
        const info = data as Component 
        onEdit(id, info.componentId, info);
      }
    }
  }

  const renderHTMLComponent = () => {
    switch (data.componentName) {
      case "Headers":
        return <Headers data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "TitleBoxs":
        return <TitleBoxs data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "SectionContainers":
        return <SectionContainers data={data as SectionComponent} sendComponent={handleComponent} onEdit={sectionContainerOnEdit} sectionContainerOnDelete={sectionContainerOnDelete} isResponsiveView={isResponsiveView}/>
      case "Buttons":
        return <Buttons data={data as Component} />;
      case "Infobars":
        return <Infobars data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "Alerts":
        return <Alerts data={data as Component} />;
      case "Banners":
        return <Banners data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "ItineraryCards":
        return <ItineraryCards data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "PaxCards":
        return <PaxCards data={data as Component} isResponsiveView={isResponsiveView}/>;
      case "Footers":
        return <Footers data={data as Component} />;
      case "Markdown":
        return <Markdown data={data as Component}/>;
      case "InformativeBox":
        return <InformativeBox data={data as Component}/>
      case "TopicCards":
        return <TopicCards data={data as Component} isResponsiveView={isResponsiveView}/>;
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <Box sx={styles.container}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      { isHovered && mode && !isPreview && (
        <Box className="box-icons">
          { !isSectionComponent &&  (
            <Box className="icons" onClick={ handleEditComponent }>
              <EditIcon className="icon"/>
            </Box>
            )}
          <Box className="icons" onClick={ handleDeleteComponent }>
            <DeleteIcon className="icon"/>
          </Box>
        </Box>
      )}
      {renderHTMLComponent()}
    </Box>
  );
};
