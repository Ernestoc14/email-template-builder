import { Component } from "@/app/context/MasterJSONContext";

const InvertAlertContent = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", borderCollapse: "separate" }}>
            <tbody>
                <tr>
                    <td className="remove-styles-mso" style={{ padding: "16px", backgroundColor: "#001A66", borderRadius: "4px", border: "1px solid #001A66" }}>
                        <table cellPadding={0} border={0} cellSpacing={0} style={{ verticalAlign: "middle" }} width="100%">
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "8px", verticalAlign: "top", width: "20px", maxWidth: "20px", }} className="mso-padding">
                                        <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_inverted.png" style={{ width: "20px", border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", verticalAlign: "top", }} width={20} alt="information"/>
                                    </td>
                                    <td style={{ paddingLeft: "8px", fontWeight: 400, color: "#FFFFFF", fontSize: "14px", lineHeight: "20px", textAlign: "left"}}>
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

export default InvertAlertContent