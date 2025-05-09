import { Footers } from "../htmlComponents/Footers/types";
import { Headers } from "../htmlComponents/Headers/types";

export interface CanvasConfig{
  "name": string;
  "date": string;
  // "autor": string;
}

export interface MasterContainer {
  "isMarkupLCode": boolean;
  "headerId": string;
  "bodyId": string;
  "footerId": string;
  "boxAzulId": string;
}
export interface JSONMain {
  "version": string;
  "canvasConfig": CanvasConfig;
  "masterContainer": MasterContainer;
  "header": Headers[];
  "boxAzul":{
      "components": [{
            "componentName": string;
            "variant": string;
            "renderHTML": string;
            "previewHTML": string;
            "props": {
                "ES": object;
                "EN": object;
                "PT": object;
                "FR": object;
            }
      }]
  };
  "body":{
      "sectionComponents":[
          {
              "sectionComponentsId": "section-01";
              "components": [
                  {   
                      "componentId": "component-00";
                      "component": "Alert";
                      // "esProps":{};
                      // "enProps":{};
                      // "ptProps":{};
                      // "frProps":{}
                  }
              ]
          }
      ]
  };
  "footer": Footers[]
}