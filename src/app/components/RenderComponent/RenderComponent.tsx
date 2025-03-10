import { ObjectComponents } from "@/app/types/Components";
import CallComponent from "../CallComponent/CallComponent"
import { useEffect, useState } from "react";
import json from "../json.json";

export const RenderComponent = ({ componentName, componentVariant, language }) => {
    // CallComponent(componentName, componentVariant, language);
    const [htmlComponent, setHtmlComponent] = useState<string | null>(null);
    console.log("Lan RenderComponent ", language);
    // Logica de cuando Language cambia UseEffect 
    useEffect(() => {
      CallComponent(componentName, componentVariant, language);
      setHtmlComponent([...json.header])
      console.log(language)
    }, [language])

    console.log(json)

    return (
        <div
            // style={{ width: "100%" }}
            dangerouslySetInnerHTML={{
                __html:
                    ObjectComponents.Components[
                        componentName as keyof typeof ObjectComponents.Components
                    ]?.renderHTML,
            }}
        />
    );
}
