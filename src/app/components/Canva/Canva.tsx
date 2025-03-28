import {
  useEffect
} from "react";
import MasterContainer from "@/app/htmlComponents/Master-container/MasterContainer";
import { Component, masterJSONType, useMasterJSON } from "@/app/context/MasterJSONContext";
// export interface Component {
//   componentId: string;
//   componentName: string;
//   variant: string;
//   esProps: unknown;
//   enProps: unknown;
//   ptProps: unknown;
//   frProps: unknown;
// }

// export interface CanvasConfig {
//   name: string;
//   date: string;
//   autor: string;
// }

// export interface MasterContainer {
//   isMarkupLCode: boolean;
//   headerId: string;
//   bodyId: string;
//   footerId: string;
//   boxAzulId: string;
// }

// export interface SectionComponent {
//   // sectionComponentsId: string;
//   // sectionComponentsName: string;
//   // sectionComponentsVariant: string;
//   // sectionComponentsProps: 
//   sectionComponentsInfo: Component;
//   components: Component[];
// }

// export interface masterJSONType {
//   version: string;
//   canvasConfig: CanvasConfig;
//   masterContainer: MasterContainer;
//   header: Component[];
//   footer: Component[];
//   boxAzul: {
//     components: Component[];
//   };
//   body: { sectionComponents: SectionComponent[] };
// }

const Canvas = () => {
  // const [masterJSON, setMasterJSON] = useState<masterJSONType>({
  //   version: "1.0",
  //   canvasConfig: {
  //     name: "File Name",
  //     date: "2025-01-18 09:23:28",
  //     autor: "Carlos Solis CM",
  //   },
  //   masterContainer: {
  //     isMarkupLCode: true,
  //     headerId: "header-01",
  //     bodyId: "body-01",
  //     footerId: "footer-01",
  //     boxAzulId: "box-azul-01",
  //   },
  //   header: [],
  //   boxAzul: {
  //     components: [],
  //   },
  //   body: {
  //     sectionComponents: [],
  //   },
  //   footer: [],
  // });
  const { masterJSON, setMasterJSON } = useMasterJSON();
  // useEffect(() =>{
  //   console.log("masterJSON",masterJSON);
  //   // findSectionContainer(masterJSON, masterJSON.body.sectionComponents[0]?.sectionComponentsInfo.componentId)
  // }, [masterJSON])

  const addComponentToSectionContainer = (component: Component, sectionContainerId: string) => {
    console.log("AddComponentToSectionContainer", sectionContainerId)
    const findSectionContainer = (masterJSON: masterJSONType, sectionContainerId: string) => {
      let findSectionContainerPosition = 0
      if (masterJSON.body.sectionComponents.length > 0) {
        findSectionContainerPosition = masterJSON.body.sectionComponents.findIndex(
          (section) => section.sectionComponentsInfo.componentId === sectionContainerId
        );
        console.log("findSectionContainerPosition", findSectionContainerPosition)
      return findSectionContainerPosition
    }
  }
    const sectionContainerPosition = findSectionContainer(masterJSON, sectionContainerId)
    console.log("sectionContainerPosition", sectionContainerPosition)


    // masterJSON.body.sectionComponents.map((section) => {
    //   if(section.sectionComponentsInfo.componentId === sectionContainerId){
    //     section.components.push(component)
    //   }
    // })
    // setMasterJSON({...masterJSON})
    
    // const findSecID = masterJSON.body.sectionComponents.find(
    //   (section) => section.sectionComponentsInfo.componentId === sectionContainerId
    // )
    // console.log("findSecID", findSecID)

  }

  // Esta funcion controla la seccion en la que se agregara el componente dentro de JSON
  const handleComponent = (component: Component, sectionContainerId?: string) => {
    if (component.componentId.includes("Headers")) {
      masterJSON.header.push(component);
      setMasterJSON({ ...masterJSON });
    } else if (component.componentId.includes("Footers")) {
      masterJSON.footer.push(component);
      setMasterJSON({ ...masterJSON });
    } else if (component.componentId.includes("SectionContainers")){
      masterJSON.body.sectionComponents.push({
        sectionComponentsInfo: component,
        components: []
      })
      setMasterJSON({...masterJSON})
      addComponentToSectionContainer(component, component.componentId)
    } else if (component.componentId.includes("TitleBoxs")){
      // addComponentToSectionContainer(component, component.componentId)
      masterJSON.body.sectionComponents[0].components.push(component);
      setMasterJSON({...masterJSON})
    }
    else
      {
        console.log("No se encontro seccion")
      // switch (component.componentName) {
      //   case "SectionContainers":
      //     if (!findSectionContainer(masterJSON, component.componentId)) {
      //       masterJSON.body.sectionComponents[0].components.push(component);
      //       setMasterJSON({ ...masterJSON });
      //     } else {
      //       console.log("Ya existe section Container")
      //     }
      //     break;
      //   case "Buttons":
      //     if (findSectionContainer(masterJSON, component.componentId)) {
      //       console.log("Adding to Existing SectionContainer")
      //       masterJSON.body.sectionComponents[0].components.push(component);
      //       setMasterJSON({ ...masterJSON });
      //     } else {
      //       console.log("No Section")
      //     }
      //     break;
      //   case "Infobars":
      //     masterJSON.boxAzul.components.push(component);
      //     setMasterJSON({ ...masterJSON });
      //     break;
      //   case "Alerts":
      //     masterJSON.boxAzul.components.push(component);
      //     setMasterJSON({ ...masterJSON });
      //     break;
      //   case "Banners":
      //     masterJSON.boxAzul.components.push(component);
      //     setMasterJSON({ ...masterJSON });
      //     break;
      //   case "ItineraryCards":
      //     masterJSON.body.sectionComponents[0].components.push(component);
      //     setMasterJSON({ ...masterJSON });
      //     break;
      //   case "PaxCards":
      //     masterJSON.body.sectionComponents[0].components.push(component);
      //     setMasterJSON({ ...masterJSON });
      //     break;
      //   default:
      //     break;
      // }
    }
  };

  console.log(masterJSON);
  return (
    <div>
      <MasterContainer
        sendComponent={handleComponent}
        masterJSON={masterJSON}
      />
    </div>
  );
};

export default Canvas;
