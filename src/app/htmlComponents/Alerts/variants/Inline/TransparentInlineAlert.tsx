import { Component } from "@/app/context/MasterJSONContext";

const TransparentInlineAlert = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
            <tbody>
                <tr>
                    <td style={{ padding: "8px 16px 8px 0", backgroundColor: "transparent", borderRadius: "4px", }}>
                        <table border={0} cellPadding={0} cellSpacing={0} style={{ verticalAlign: "middle" }} width="100%" >
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "8px", verticalAlign: "top", width: "20px", maxWidth: "20px", }}>
                                        <img src="https://www.copaair.com/assets/inner-alert-blue-icon.png" style={{ width: "20px", border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", verticalAlign: "top", }} width={20} alt="information"/>
                                    </td>
                                    <td style={{ paddingLeft: "8px", fontFamily: "SuisseIntl, Arial, Helvetica, sans-serif", fontWeight: 600, color: "#333333", fontSize: "14px", lineHeight: "20px", textAlign: "left", }}>
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

export default TransparentInlineAlert