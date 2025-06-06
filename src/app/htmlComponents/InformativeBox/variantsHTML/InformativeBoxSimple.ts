import { InformativeBoxProps } from "../types"

const informativeBoxSimpleHTML = (props: InformativeBoxProps) => {
    return `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                <tr>
                    <td style="vertical-align: top;padding-right: 16px;width: 40px">
                        <img style="vertical-align:top;" width="40" src="${props.imgUrl}" alt="comida" />
                    </td>
                    <td style="vertical-align: top;">
                        <p style="color:#333333; font-weight:600; line-height: 20px; font-size: 14px;margin: 0">
                            ${props.title}
                        </p>
                        <p style="color:#666666; font-weight:400; line-height: 20px; font-size: 14px;margin: 0">
                            ${props.description}
                        </p>
                    </td>
                </tr>
            </table>`
}

export { informativeBoxSimpleHTML }