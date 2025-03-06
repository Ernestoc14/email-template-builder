import { ObjectComponents } from "@/app/types/Components";
import CallComponent from "../CallComponent/CallComponent"

export const RenderComponent = ({ componentName, componentVariant, language }) => {
    CallComponent(componentName, componentVariant, language);

    // Logica de cuando Language cambia UseEffect 

    return (
        <div
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{
                __html:
                    ObjectComponents.Components[
                        componentName as keyof typeof ObjectComponents.Components
                    ]?.renderHTML,
            }}
        />
    );
}
