import { Component, SectionComponent } from "@/app/context/MasterJSONContext";
import ContentSection from "./variants/ContentSection";
import Divider from "./variants/Divider";

const SectionContainers = (
  {sendComponent,onEdit, sectionContainerOnDelete, data, isResponsiveView} : { 
  sendComponent: (component: Component, sectionID: string, sectionContainerId: string) => void ,
  onEdit: ( section: string, componentId: string, sectionComponentId?: string) => void;
  sectionContainerOnDelete: (section: string, sectionComponentId: string,  componentId: string) => void,
  data: SectionComponent
  isResponsiveView?: boolean
}) => {  
  const handleComponent = (component: Component, sectionID: string) => {
      sendComponent(component, sectionID, data.sectionComponentId);
  };

  const handleDelete = (section: string, componentId: string) => {
    sectionContainerOnDelete(section, componentId, data.sectionComponentId)
  }

  const handleEdit = (section: string, componentId: string, ) =>{
    onEdit(section, componentId, data.sectionComponentId )
  }

  switch (data.sectionComponentsInfo.variant) {
    case "Content Section":
      return(
        <ContentSection data={data} sendComponent={handleComponent} onEdit={handleEdit} sectionContainerOnDelete={handleDelete} isResponsiveView={isResponsiveView} />
      );

    case "Divider":
      return (
        <Divider />
      )

      default:
        break
    }
}

export default SectionContainers;