import { Component } from "@/app/context/MasterJSONContext"

const TraditionalFooters = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%",  backgroundColor:"#EFEFEE" }}>
            <tbody>
                <tr>
                    <td align="center" style={{ fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "16px", color: "#666666", paddingBottom: "8px", }}>
                        {
                        // @ts-expect-error doesn't exist footer props
                        data[langProp].text
                        }{" "}
                        <a style={{ color: "#666666", fontWeight: 600, textDecoration: "underline", }} target="_blank" rel="noopener noreferrer"
                        href={`${
                            // @ts-expect-error doesn't exist footer props
                            data[langProp].firstLink
                        }`}
                        >
                            <span style={{ whiteSpace: "nowrap" }}>
                                {
                                // @ts-expect-error doesn't exist footer props
                                data[langProp].linkText
                                }
                            </span>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style={{ fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "16px", color: "#666666", paddingBottom: "16px", }}>
                        {
                        // @ts-expect-error doesn't exist footer props
                        data[langProp].secondText
                        }{" "}
                        <a style={{ color: "#666666", fontWeight: 600, textDecoration: "underline", }} target="_blank" rel="noopener noreferrer"
                        href={`${
                            // @ts-expect-error doesn't exist footer props
                            data[langProp].secondLink
                        }`}
                        
                        >
                            <span>
                                {
                                // @ts-expect-error doesn't exist footer props
                                data[langProp].secondLinkText
                                }
                            </span>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <a href="https://www.staralliance.com/en/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width={168}/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
      );
}

export default TraditionalFooters