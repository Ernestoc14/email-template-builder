import { Component } from "@/app/context/MasterJSONContext";

const SocialFooters = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", backgroundColor:"#EFEFEE" }}>
            <tbody>
                <tr>
                    <td style={{ paddingBottom: "16px" }}>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ margin: "0 auto" }}>
                            <tbody>
                                <tr>
                                    {[
                                        {
                                        href: "https://twitter.com/copaairlines",
                                        src: "https://www.copaair.com/assets/twitter-x.png",
                                        },
                                        {
                                        href: "https://www.facebook.com/copaairlines",
                                        src: "https://www.copaair.com/assets/facebook.png",
                                        },
                                        {
                                        href: "https://www.instagram.com/copaairlines",
                                        src: "https://www.copaair.com/assets/instagram.png",
                                        },
                                        {
                                        href: "https://www.youtube.com/copaairlines",
                                        src: "https://www.copaair.com/assets/youtube.png",
                                        },
                                        {
                                        href: "https://www.tiktok.com/@copaairlines",
                                        src: "https://www.copaair.com/assets/tiktok.png",
                                        },
                                        {
                                        href: "https://linkedin.com/company/copa-airlines",
                                        src: "https://www.copaair.com/assets/linkedin.png",
                                        },
                                    ].map(({ href, src }) => (
                                        <td key={href} style={{paddingRight: "8px"}}>
                                            <a href={href} style={{ display: "block", height: "32px" }}>
                                                <img src={src} alt="Social Media Icon" />
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style={{ fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "16px", color: "#666666", paddingBottom: "8px", }}>
                        {
                        // @ts-expect-error doesn't exist footer props
                        data[langProp].text
                        }
                    </td>
                </tr>
                <tr>
                    <td align="center" style={{ fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "16px", color: "#666666", paddingBottom: "16px", }}>
                        {
                        // @ts-expect-error doesn't exist footer props
                        data[langProp].secondText
                        }{" "}
                        <a style={{ color: "#666666", fontWeight: 600, textDecoration: "underline", }} 
                        // @ts-expect-error doesn't exist footer props
                        href={`${ data[langProp].secondLink }`} target="_blank">
                            <span style={{ whiteSpace: "nowrap" }}>
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
                        <a href="https://www.staralliance.com/en/" target="_blank">
                            <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SocialFooters