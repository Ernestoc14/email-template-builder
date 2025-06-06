import { Component } from "@/app/context/MasterJSONContext"

const LightButton = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", color: "#FFFFFF" }}>
            <tbody>
                <tr>
                    <td>
                        <a className="btn-blue" style={{ border: "none", display: "inline-block", color: "#ffffff", textDecoration: "none", borderRadius: "40px", margin: 0, textAlign: "center", padding: "10px 0", fontSize: "14px", lineHeight: "20px", width: "100%", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontWeight: 600, backgroundColor: "#0E68FF", }} 
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
                </tr>
            </tbody>
        </table>)
}

export default LightButton