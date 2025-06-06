import markdownToHtml from "@/app/utils/markdownUtils"
import Box from '@mui/material/Box';
import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";

const Markdown = ({data} : {data: Component}) => {
    const { language } = useLanguage();

    const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
        language.toLowerCase() as "es" | "en" | "pt" | "fr"
    }Props`;

    return (
        <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%"}}>
            <tbody>
                <tr>
                    <td>
                        {// @ts-expect-error doesn't exist header props
                        (<Box dangerouslySetInnerHTML={{ __html: markdownToHtml(data[langProp].markdown) }}></Box>)
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Markdown