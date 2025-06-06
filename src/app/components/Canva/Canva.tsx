import MasterContainer from "@/app/htmlComponents/MasterContainer/MasterContainer";
import {
  Component,
  SectionComponent,
  useMasterJSON,
} from "@/app/context/MasterJSONContext";
import { useEffect, useState } from "react";
import { getComponent, saveTemplate } from "@/app/utils/canvasUtils";
import { ComponentsTranslations } from "@/app/types/Components";
import { Box } from "@mui/material";
import PropsModal from "../PropsModal/PropsModal";
import getTemplateByTemplateName from "@/app/actions/get-template-by-name";

const Canvas = ( { template } : { template: string } ) => {
  const { masterJSON, setMasterJSON } = useMasterJSON();
  const [propsModalOpen, setPropsModalOpen] = useState(false);
  const [editComponentName, setEditComponentName] = useState('');
  const [editComponentVariant, setEditComponentVariant] = useState('')
  const [sectionEdit, setSectionEdit] = useState('')
  const [componentIdEdit, setComponentIdEdit] = useState('')
  const [sectionComponentIdEdit, setSectionComponentIdEdit] = useState('')  

  useEffect(()=>{
    async function searchTemplate() {
      let templateJSON;
      try{
        const searchTemplate = await getTemplateByTemplateName(template)
        if(searchTemplate){
          templateJSON = searchTemplate
        }else{
          templateJSON = masterJSON
          templateJSON.canvasConfig.name = template
        }
      }catch(error){
        console.error(error)
      }finally{
        setMasterJSON(templateJSON)
      }
    }
    searchTemplate();
  
    return () => {};
  },[template])

  useEffect(()=>{
    console.log("masterJSON",masterJSON)
    saveTemplate(masterJSON)
  },[masterJSON])

  // Esta funcion controla la seccion en la que se agregara el componente dentro de JSON
  const handleAddComponent = (section: string, component: Component, sectionComponentId?: string) => {
    switch (section){
      case 'dropzone-header':
        masterJSON.header.push(component);
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-footer':
        masterJSON.footer.push(component);
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-bluebox':
        masterJSON.boxAzul.components.push(component);
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-body':
        if(component.componentName === "SectionContainers"){
          masterJSON.body.sectionComponents.push({
            sectionComponentId: component.componentId,
            componentName: component.componentName,
            sectionComponentsInfo: component,
            variant: 'Content Section',
            components: [],
          });
          setMasterJSON({ ...masterJSON });
        }
        break;

      case 'dropzone-section-container':
        const targetSectionComponent = masterJSON.body.sectionComponents.find(
          (section) => section.sectionComponentId === sectionComponentId
        );
        if (targetSectionComponent) {
          targetSectionComponent.components.push(component);
        } else {
          console.warn(`No se encontró la sección con ID ${sectionComponentId}`);
        }
        setMasterJSON({ ...masterJSON });
        break;

      default: 
        break
    }
  };

  // Esta funcion controla la eliminacion de componentes dentro de JSON
  const handleDeleteComponent = (section: string, componentId: string, sectionComponentId?: string) => {
    switch (section){
      case 'dropzone-header':
        masterJSON.header = [];
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-footer':
        masterJSON.footer = []
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-bluebox':
        masterJSON.boxAzul.components = masterJSON.boxAzul.components.filter(c => c.componentId !== componentId)
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-body':
        masterJSON.body.sectionComponents = masterJSON.body.sectionComponents.filter(s => s.sectionComponentId !== componentId)
        setMasterJSON({ ...masterJSON });
        break;

      case 'dropzone-section-container':
        const targetSectionComponent = masterJSON.body.sectionComponents.find(
          (section) => section.sectionComponentId === sectionComponentId
        )
        if(targetSectionComponent) {
          targetSectionComponent.components = targetSectionComponent.components.filter( c => c.componentId !== componentId)
        }else {
          console.warn(`No se encontró la sección con ID ${sectionComponentId}`);
        }
        setMasterJSON({ ...masterJSON });
        break;

      default: 
        break
    }
  }

  const handleEditComponent = (section: string, componentId: string, data: Component | SectionComponent, sectionComponentId?: string) => {
    setSectionEdit(section)
    setComponentIdEdit(componentId)
    setSectionComponentIdEdit(sectionComponentId ?? '')

    if(sectionComponentId){
      const componentData = data as SectionComponent
      const componentToEdit = componentData.components.find(c => c.componentId === componentId)

      if(componentToEdit){ 
        setEditComponentName(componentToEdit.componentName)
        setEditComponentVariant(componentToEdit.variant)

        const props = { 
          ES: componentToEdit.esProps,
          EN: componentToEdit.enProps,
          PT: componentToEdit.ptProps,
          FR: componentToEdit.frProps
        } as unknown as ComponentsTranslations
    
        const component = getComponent(componentToEdit?.componentName)
        component.props = props
      }
    }else{
      const componentData = data as Component

      setEditComponentName(componentData.componentName)
      setEditComponentVariant(componentData.variant)

      const props = { 
        ES: componentData.esProps,
        EN: componentData.enProps,
        PT: componentData.ptProps,
        FR: componentData.frProps
      } as unknown as ComponentsTranslations
  
      const component = getComponent(componentData.componentName)
      component.props = props
    }

    setPropsModalOpen(true)
  }

  const handeUpdateComponent = (component: Component | null) => {
    if(component)
      switch (sectionEdit){
        case 'dropzone-header':
          masterJSON.header[0].esProps = component?.esProps;
          masterJSON.header[0].enProps = component?.enProps;
          masterJSON.header[0].ptProps = component?.ptProps;
          masterJSON.header[0].frProps = component?.frProps;
          setMasterJSON({ ...masterJSON });
          break;

        case 'dropzone-footer':
          masterJSON.footer[0].esProps = component?.esProps;
          masterJSON.footer[0].enProps = component?.enProps;
          masterJSON.footer[0].ptProps = component?.ptProps;
          masterJSON.footer[0].frProps = component?.frProps;
          setMasterJSON({ ...masterJSON });
          break;

        case 'dropzone-bluebox':
          const itemToUpdate = masterJSON.boxAzul.components.find(c => c.componentId === componentIdEdit)
          if (itemToUpdate) {
            itemToUpdate.esProps = component?.esProps;
            itemToUpdate.enProps = component?.enProps;
            itemToUpdate.ptProps = component?.ptProps;
            itemToUpdate.frProps = component?.frProps;
          }
          setMasterJSON({ ...masterJSON });
          break;

        case 'dropzone-section-container':
          const targetSectionComponent = masterJSON.body.sectionComponents.find(
            (section) => section.sectionComponentId === sectionComponentIdEdit
          )
          if(targetSectionComponent) {
            const itemToUpdate = targetSectionComponent.components.find( c => c.componentId === componentIdEdit)
            if (itemToUpdate) {
              itemToUpdate.esProps = component?.esProps;
              itemToUpdate.enProps = component?.enProps;
              itemToUpdate.ptProps = component?.ptProps;
              itemToUpdate.frProps = component?.frProps;
            }
          }else {
            console.warn(`No se encontró la sección con ID ${sectionComponentIdEdit}`);
          }
          setMasterJSON({ ...masterJSON });
          break;
      }
  }

  const handleCloseModal = () => {
    setPropsModalOpen(false);
  };

  return (
    <Box>
      <MasterContainer
        sendComponent={handleAddComponent}
        onDelete={handleDeleteComponent}
        onEdit={handleEditComponent}
        masterJSON={masterJSON}
        />
        <PropsModal
        isOpen={propsModalOpen}
        componentName={editComponentName}
        componentVariant={editComponentVariant}
        onClose={handleCloseModal}
        sendComponent={handeUpdateComponent}
      />  
    </Box>
  );
};

export default Canvas;
