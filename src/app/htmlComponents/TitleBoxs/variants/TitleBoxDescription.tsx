import { Component } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".title-titlebox-mobile": {
                fontSize: isResponsive ? "20px !important" : "32px",
                lineHeight: isResponsive ? "32px !important" : "40px",
                fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                fontWeight: 700,
                margin: 0
            }
        }
    }
}

const TitleBoxDescription = ({data, langProp, isResponsiveView} : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))
        
    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", color: "#FFFFFF" }}>
                <tbody>
                    <tr>
                        <td style={{ wordBreak: "break-word", height: "60px" }} className="titlebox-mobile-padding">
                            <p className="title-titlebox-mobile">
                            {
                                // @ts-expect-error doesn't exist title props
                                data[langProp].title
                            }
                            </p>
                            <p style={{fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif",fontWeight: 400,fontSize: "16px",lineHeight: "24px",margin: 0,paddingTop: "8px", }} >
                            {
                                // @ts-expect-error doesn't exist title props
                                data[langProp].description
                            }
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default TitleBoxDescription