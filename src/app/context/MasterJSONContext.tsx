"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface MasterJSONContextType {
  masterJSON: masterJSONType;
  setMasterJSON: React.Dispatch<React.SetStateAction<masterJSONType>>;
}


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
  // sectionComponentsId: string;
  // sectionComponentsName: string;
  // sectionComponentsVariant: string;
  // sectionComponentsProps: 
  sectionComponentsInfo: Component;
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

const MasterJSONContext = createContext<MasterJSONContextType>(null!);
export const MasterJSONProvider = ({children}: {children: ReactNode}) => {
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
      sectionComponents: [],
    },
    footer: [],
  });
  return (
    <MasterJSONContext.Provider value={{ masterJSON, setMasterJSON }}>
      {children}
    </MasterJSONContext.Provider>
  );
}

  export const useMasterJSON = () => useContext(MasterJSONContext);