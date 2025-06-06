import { Component } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".copa-logo-width": {
                marginRight: "0 !important",
                width: isResponsive ? "116px !important" : "176px",
                border: 0, display: "block",
                outline: "none",
                textDecoration: "none",
                height: "auto",
                lineHeight: "100%"
            },
            ".divider-mobile-spacing": {
                borderBottom: "1px solid #cccccb",
                paddingTop: isResponsive ? "16px !important" : "22px",
                width: "100%",
                maxHeight: "1px",
                height: "1px",
                lineHeight: "0"
            },
            ".connectmiles-logo-width": {
                marginRight: "0 !important",
                width: isResponsive ? "125px !important" : "159px",
                border: 0,
                display: "block",
                outline: "none",
                textDecoration: "none",
                height: "auto",
                lineHeight: "100%",
                paddingBottom: "8px"
            }
        }
    }
}

const PairLogosHeaders = ({data, langProp, isResponsiveView} : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))
    
    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])
    console.log(data)
    return (
        <Box sx={styles.container}>
            <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", backgroundColor: "#0032a0" }}>
                <tbody>
                    <tr>
                        <td style={{ width: "50%", height: "40px" }}>
                            <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png" alt="Copa Logo" className="copa-logo-width"/>
                        </td>
                        <td style={{ width: "50%" }} align="right">
                            <img height="auto"
                            // @ts-expect-error doesn't exist button props
                            src={`${data[langProp].secondLogoUrl}`}  alt="ConnectMiles Logo" className="connectmiles-logo-width"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="divider-mobile-spacing">
                            &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
}

export default PairLogosHeaders