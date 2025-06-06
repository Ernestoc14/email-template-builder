import getAllJSON from "../actions/get-all-templates";
import getTemplateByName from "../actions/get-template-by-name";
import saveJSON from "../actions/save-template";
import { masterJSONType } from "../context/MasterJSONContext";
import { ObjectComponents } from "../types/Components";

  const getComponent = (name: string) => {
    return ObjectComponents.Components[name as keyof typeof ObjectComponents.Components];
  };

  const saveTemplate = (masterJSON: masterJSONType) =>{
    const fileName = masterJSON.canvasConfig.name + ".json"
    saveJSON(masterJSON,fileName)
  }

  const getAllTemplates = async() =>{
    const templates = await getAllJSON()
    return templates
  }

  const getTemplateByTemplateName = async (templateName: string) => {
    return getTemplateByName(templateName)
  }

  export { getComponent, saveTemplate, getAllTemplates, getTemplateByTemplateName }