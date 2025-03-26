import { useEffect, useState } from "react";
import MasterContainer from "@/app/htmlComponents/Master-container/MasterContainer";

export interface Component {
  componentId: string;
  componentName: string;
  variant: string;
  esProps: unknown;
  enProps: unknown;
  ptProps: unknown;
  frProps: unknown;
}

export interface CanvasConfig {
  name: string;
  date: string;
  autor: string;
}

export interface MasterContainer {
  isMarkupLCode: boolean;
  headerId: string;
  bodyId: string;
  footerId: string;
  boxAzulId: string;
}

export interface SectionComponent {
  sectionComponentsId: string;
  components: Component[];
}

export interface masterJSONType {
  version: string;
  canvasConfig: CanvasConfig;
  masterContainer: MasterContainer;
  header: Component[];
  footer: Component[];
  boxAzul: {
    components: Component[];
  };
  body: { sectionComponents: SectionComponent[] };
}

const Canvas = () => {

  const [masterJSON, setMasterJSON] = useState<masterJSONType>({
    version: "1.0",
    canvasConfig: {
      name: "File Name",
      date: "2025-01-18 09:23:28",
      autor: "Carlos Solis CM",
    },
    masterContainer: {
      isMarkupLCode: true,
      headerId: "header-01",
      bodyId: "body-01",
      footerId: "footer-01",
      boxAzulId: "box-azul-01",
    },
    header: [],
    boxAzul: {
      components: [],
    },
    body: {
      sectionComponents: [
        {
          sectionComponentsId: "section-01",
          components: [],
        },
      ],
    },
    footer: [],
  });

  // Esta funcion controla la seccion en la que se agregara el componente dentro de JSON
  const handleComponent = (component: Component) => {
    setMasterJSON((prevState) => {
      const newState = { ...prevState };
    
    switch (component.componentName) {
      case "Headers":
        // masterJSON.header.push(component);
        // setMasterHTML(masterJSON);
        newState.header = [...prevState.header, component]
        break;
      case "TitleBoxs":
        // masterJSON.boxAzul.components.push(component);
        // setMasterHTML(masterJSON);
        newState.boxAzul = {...prevState.boxAzul, components: [...prevState.boxAzul.components, component]}
        break;
      case "Footers":
        // masterJSON.footer.push(component);
        // setMasterHTML(masterJSON);
        newState.footer = [...prevState.footer, component]
        break;
      default:
        break;
    }
    return newState;
  });
  };

  useEffect(() => {
    console.log("LOG: ", masterJSON);
  }, [masterJSON]);

  // console.log(masterJSON);
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
