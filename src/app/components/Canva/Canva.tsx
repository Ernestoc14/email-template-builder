import MasterContainer from "@/app/htmlComponents/Master-container/MasterContainer";
import {
  Component,
  masterJSONType,
  useMasterJSON,
} from "@/app/context/MasterJSONContext";

const Canvas = () => {
  const { masterJSON, setMasterJSON } = useMasterJSON();
  const sectionContainerIds: string[] = [];

  const findSectionContainer = (
    masterJSON: masterJSONType,
    sectionContainerIds: string[]
  ): string => {
    let findSectionContainerID: string = "";
    console.log("ID desde Func", sectionContainerIds[0])
    if (masterJSON.body.sectionComponents.length > 0) {
      masterJSON.body.sectionComponents.forEach((section) => {
        console.log("Section ID", section.sectionComponentsInfo.componentId);
        console.log("Section ID", sectionContainerIds[0]);
        if ( section.sectionComponentsInfo.componentId === sectionContainerIds[0]) {
          findSectionContainerID = section.sectionComponentsInfo.componentId;
          console.log("ID de la seccionENCONTRADAAAAAA", findSectionContainerID);
        }
      });
    }
    console.log("Encontre el ID de la seccion", findSectionContainerID);
    return findSectionContainerID;
  };

  const addComponentToSectionContainer = (
    component: Component,
    sectionContainerId: string
  ) => {
    console.log("AddComponentToSectionContainer en este ID", sectionContainerId);
  };

  // Esta funcion controla la seccion en la que se agregara el componente dentro de JSON
  const handleComponent = (component: Component, dropZoneId?: string) => {
    if (component.componentId.includes("Headers")) {
      masterJSON.header.push(component);
      setMasterJSON({ ...masterJSON });
    } else if (component.componentId.includes("Footers")) {
      masterJSON.footer.push(component);
      setMasterJSON({ ...masterJSON });
    } else if (component.componentId.includes("SectionContainers")) {
      sectionContainerIds.push(component.componentId);
      console.log("se guadro ID 1", sectionContainerIds[0]);
      masterJSON.body.sectionComponents.push({
        sectionComponentsInfo: component,
        components: [],
      });
      setMasterJSON({ ...masterJSON });
      // sectionContainerIds.push(component.componentId);
      // addComponentToSectionContainer(component, component.componentId);
    } else if (
      component.componentId.includes("TitleBoxs") ||
      component.componentId.includes("Buttons") ||
      component.componentId.includes("Infobars") ||
      component.componentId.includes("Alerts")
    ) {
      if (dropZoneId === "blue-box-section") {
        masterJSON.boxAzul.components.push(component);
        setMasterJSON({ ...masterJSON });
      } else if (dropZoneId === "body-section") {
        const sectionContainerId = findSectionContainer(
          masterJSON,
          sectionContainerIds
        );
        console.log("ENCONTRE SECCION", sectionContainerIds[0]);
        // masterJSON.body.sectionComponents[0].components.push(component);
        // setMasterJSON({ ...masterJSON });
        addComponentToSectionContainer(component, sectionContainerId);
      }
      // Debo evaluar el DropZone ID
      // addComponentToSectionContainer(component, component.componentId);
      // masterJSON.body.sectionComponents[0].components.push(component);
      // masterJSON.boxAzul.components.push(component);
      // setMasterJSON({ ...masterJSON });
    } else {
      console.log("No se encontro seccion");
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
