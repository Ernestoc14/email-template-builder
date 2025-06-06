import { Component } from "@/app/context/MasterJSONContext";

const SuccessInlineAlert = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", borderCollapse: "separate" }}>
            <tbody>
                <tr>
                    <td className="remove-styles-mso" style={{ padding: "8px 16px", backgroundColor: "#0C7E3E", borderRadius: "4px" }}>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ verticalAlign: "middle" }} width="100%">
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "8px", verticalAlign: "top", width: "20px", maxWidth: "20px"}} className="mso-padding">
                                        <img src="https://www.copaair.com/webassets/icons/alerts/inline_success.png" style={{ width: "20px", border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", verticalAlign: "top"}} width={20} alt="success" />
                                    </td>
                                    <td style={{ paddingLeft: "8px", fontFamily: "SuisseIntl, Arial, Helvetica, sans-serif", fontWeight: 600, color: "#ffffff", fontSize: "14px", lineHeight: "20px", textAlign: "left", }}>
                                        {
                                            // @ts-expect-error doesn't exist title props
                                            data[langProp].alertText
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SuccessInlineAlert