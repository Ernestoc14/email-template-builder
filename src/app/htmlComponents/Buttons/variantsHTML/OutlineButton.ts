import { ButtonsProps } from "../types";

const outlineButtonHTML = (props: ButtonsProps) => {
    return `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #ffffff;">
                <tr>
                    <td>
                        <!--[if mso]>
                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" href="${props.urlLink}" arcsize="50%" stroke="true" strokecolor="#0032A0" fillcolor="none">
                            <w:anchorlock/>
                            <center>
                        <![endif]-->
                        <a class="btn-blue" href="${props.urlLink}" style="mso-border-alt: none; display: inline-block;color: #0032A0; border: 1px solid #0032A0; text-decoration: none; border-radius: 40px; margin: 0; text-align: center; padding: 10px 0;font-size: 14px;line-height: 20px; width: 100%; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 600; background-color: transparent;">
                            ${props.label}
                        </a>
                        <!--[if mso]>
                            </center>
                            </v:roundrect>
                        <![endif]-->
                    </td>
                </tr>
            </table>`
}

export {outlineButtonHTML}