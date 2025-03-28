import { Component, useMasterJSON } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import DropZone from "@/app/components/DropZone/DropZone";
import { RenderComponent } from "@/app/components/RenderComponent/RenderComponent";



const SectionContainers = ({sendComponent, data}: { sendComponent: (component: Component) => void , data:Component}) => {
  const { language} =useLanguage()
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as 'es' |'en' | 'pt' | "fr"
  }Props`;
  const { masterJSON } = useMasterJSON();

    const handleComponent = (component: Component) => {
      // ?isSectionContainer String (JSONSection) y ?sectionID  
      sendComponent(component);
    };

  switch (data.variant) {
    case "Content Section":
      return(
        <table cellSpacing={0} cellPadding={0} style={{ margin: 'auto', width: '100%' }}>
      <tbody>
        <tr>
          <td align="center" style={{ color: '#0032a0', border: '1px solid #cccccb', borderRadius: '6px' }}>
            {masterJSON.body.sectionComponents[0].components.length === 0 ? (
              <DropZone 
                id="section-container-dropzone"
                initialContent="Agregar DropZone de Section Container"
                sendComponent={handleComponent}
                textColor="red"
                />
            ) : (
              <>
              <h1>
                alla
              </h1>
                {masterJSON.body.sectionComponents[0].components.map((component, index) => (
                  <RenderComponent
                    key={ index}
                    data={component}
                    sendComponent={handleComponent}
                  />
                ))}
              </>
            )
            }
          </td>
        </tr>
      </tbody>
    </table>
      )
    }
}

export default SectionContainers;