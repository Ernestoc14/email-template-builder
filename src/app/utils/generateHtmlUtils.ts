import downloadHTMLFile from "@/hooks/htmlDownload";
import { masterJSONType } from "../context/MasterJSONContext";
import { getBoxAzulHTML } from "../htmlComponents/BoxAzul/BoxAzulHTML";
import { getFooterHTML } from "../htmlComponents/Footers/FootersHTML";
import { getHeaderHTML } from "../htmlComponents/Headers/HeadersHTML";
import masterContainerHTML from "../htmlComponents/MasterContainer/MasterContainerHTML";
import { MasterContainerHTMLProps } from "../htmlComponents/MasterContainer/types";
import { getBodyHTML } from "../htmlComponents/Body/BodyHTML";

const makeHTML = ( template: masterJSONType, lang: string, ) => {
    const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
        lang.toLowerCase() as "es" | "en" | "pt" | "fr"
      }Props`;

    const templateName = template.canvasConfig.name

    const makeHeader = template.header[0] ? getHeaderHTML(template.header[0], langProp) : {css: '', html: ''} 
    const makeFooter = template.footer[0] ? getFooterHTML(template.footer[0], langProp) : {css: '', html: ''}
    const makeBoxAxul = getBoxAzulHTML(template.boxAzul.components, langProp)
    const makeBody = getBodyHTML(template.body.sectionComponents, langProp)
    const css = makeFooter.css + makeHeader.css + makeBoxAxul.css + makeBody.css
    
    const finalTemplate: MasterContainerHTMLProps = {
      footer: makeFooter.html,
      header: makeHeader.html,
      boxAzul: makeBoxAxul.html,
      body: makeBody.html,
      css: css
    }

    const makeMasterContainer = masterContainerHTML(finalTemplate)
    downloadHTMLFile(makeMasterContainer, templateName + '-' + lang)
}
export default makeHTML


