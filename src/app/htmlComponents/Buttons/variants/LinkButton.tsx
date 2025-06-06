import { Component } from "@/app/context/MasterJSONContext"

const LinkButton = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", color: "#ffffff" }}>
            <tbody>
                <tr>
                    <td align="right" style={{ width: "50%" }}>
                        <a target="_blank" style={{ border: "none", display: "inline-block", color: "#0032a0", textDecoration: "none", margin: 0, textAlign: "center", fontSize: "14px", lineHeight: "20px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontWeight: 600, }}
                        href={
                            // @ts-expect-error doesn't exist button props
                            `${data[langProp].urlLink}`
                        }>
                        {
                            // @ts-expect-error doesn't exist button props
                            data[langProp].label
                        }
                        </a>
                    </td>
                    <td style={{ width: "50%" }}>
                        <a style={{ display: "block", height: "24px" }} target="_blank"
                        href={
                            // @ts-expect-error doesn't exist button props
                            `${data[langProp].urlLink}`
                            }>
                            <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default LinkButton