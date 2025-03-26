import { ObjectComponents } from "@/app/types/Components";
import CallComponent from "../CallComponent/CallComponent";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

interface RenderComponentProps {
  componentName: string;
  componentVariant: string;
}

export const RenderComponent = ({
  componentName,
  componentVariant,
}: RenderComponentProps) => {
  const { language } = useLanguage();
  const [renderedHTML, setRenderedHTML] = useState<string>("");

  useEffect(() => {
    CallComponent(componentName, componentVariant, language);
    const newHTML =
      ObjectComponents.Components[
        componentName as keyof typeof ObjectComponents.Components
      ]?.renderHTML;
    setRenderedHTML(newHTML);
  }, [language, componentName, componentVariant]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: renderedHTML,
      }}
    />
  );
};
