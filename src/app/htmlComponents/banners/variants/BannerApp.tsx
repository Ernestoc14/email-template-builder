import { Component } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".block-mobile-item": {
                display: isResponsive ? "block !important" : 'table-cell',
            },
            ".apps-logo-mobile-padding": {
                paddingTop: isResponsive ? "24px !important" : "16px",
            },
            ".phone-image-mobile-padding":{
                padding: isResponsive ? "0 32px !important" : '0px', 
                verticalAlign: "bottom",
                textAlign: "center",
            },
            ".remove-image-mobile": {
                display: isResponsive ? "none !important" : '',
            },
            ".show-image-mobile": {
                display: isResponsive ? "block !important" : '',
                width: isResponsive ? "100% !important" : '300px', 
            },
            ".mobile-table-center": {
                marginLeft: isResponsive ? "auto !important" : '',
                marginRight: isResponsive ? "auto !important" : '',
                borderCollapse: "collapse"
            }
        }
    }
}

const BannerApp = ({data, langProp, isResponsiveView} : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))
        
    useEffect(() => {
        console.log(isResponsiveView)
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])
    
    return (
        <Box sx={styles.container}>
            <table border={0} cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "separate" }}>
                <tbody>
                    <tr>
                        <td style={{ lineHeight: 0, backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid #DBDAD8", }}>
                            <table border={0} cellPadding="0" cellSpacing="0" style={{ verticalAlign: "middle" }} width="100%">
                                <tbody>
                                    <tr>
                                        <td className="block-mobile-item" style={{ padding: "24px 32px"}}>
                                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ color: "#0032A0", fontFamily: "Gilroy, Helvetica, Arial, sans-serif", fontSize: "16px", lineHeight: "24px", fontWeight: 700,}}>
                                                            {
                                                            // @ts-expect-error doesn't exist header props
                                                            data[langProp].title
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ paddingTop: "8px", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px", color: "#666666",}}>
                                                            {
                                                                // @ts-expect-error doesn't exist header props
                                                                data[langProp].description
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="apps-logo-mobile-padding">
                                                            <table className="mobile-table-center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ width: "87px", paddingRight: "16px" }}>
                                                                            <a href="https://apps.apple.com/es/app/copa-airlines/id533700785" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                                                <img src="https://www.copaair.com/assets/app-store-2X.png" alt="Apple Store" width="87" height="26" style={{ width: "87px", margin: 0, border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", }}/>
                                                                            </a>
                                                                        </td>
                                                                        <td style={{ width: "87px", paddingRight: "16px" }}>
                                                                            <a href="https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                                                <img src="https://www.copaair.com/assets/play-store-2X.png" alt="Google Play" width="87" height="26" style={{ width: "87px", margin: 0, border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", }}/>
                                                                            </a>
                                                                        </td>
                                                                        <td style={{ width: "87px" }}>
                                                                            <a href="https://appgallery.huawei.com/app/C102348393" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                                                <img src="https://www.copaair.com/assets/app-gallery-2X.png" alt="AppGallery" width="87" height="26" style={{ width: "87px", margin: 0, border: 0, height: "auto", lineHeight: "100%", outline: "none", textDecoration: "none", }} />
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td className="block-mobile-item phone-image-mobile-padding" style={{  }}>
                                            <img style={{ width: "100%", height: "172px" }} width="214" height="172" className="remove-image-mobile" alt="Desktop App Preview"
                                                src={`${
                                                // @ts-expect-error doesn't exist header props
                                                data[langProp].desktopImageURL
                                                }`}  
                                            />
                                            <img style={{ display: "none" }} className="show-image-mobile" alt="Mobile App Preview"
                                                src={`${
                                                // @ts-expect-error doesn't exist header props
                                                data[langProp].mobileImageURL
                                                }`}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
}

export default BannerApp