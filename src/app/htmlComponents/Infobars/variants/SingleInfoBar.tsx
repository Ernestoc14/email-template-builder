import { Component } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".title-info-flight": {
                fontWeight: "400",
                fontSize: "14px",
                color: "#666666",
                fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif",
                margin: "0",
                marginBottom: "5px",
            },
            ".subtitle-info-flight": {
                fontSize: "20px",
                fontWeight: "700",
                color: "#333333",
                fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                margin: "0",
            },
            ".destino-img-remove": {
                paddingRight: "16px",
                display: isResponsive ? "none" : "table-cell"
            },
            ".infobar-divider-remove": {
                display: isResponsive ? "none" : "table-cell",
                padding: "0 32px",
                width: "1px"
            },
            ".reorder-mobile-table": {
                display: isResponsive ? "block !important" : "table-cell",
                width: isResponsive ? "375px !important" : "auto"
            },
            ".reorder-mid": {
                display: isResponsive ? "block !important" : "table-cell",
            },
            ".destino-mobile-padding": {
                paddingBottom: isResponsive ? "24px" : "0px"
            },
            ".mid-right-spacing": {
                paddingRight: isResponsive ? "56px" : '0px'
            }
        }
    }
}

const SingleInfoBar = ({data, langProp, isResponsiveView} : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))
        
    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])
    
    return (
        <Box sx={styles.container}>
            <table border={0} cellPadding="0" cellSpacing="0" style={{ width: "100%" }} width="100%">
                <tbody>
                    <tr>
                        <td className="reorder-mid">
                            <table border={0} cellPadding="0" cellSpacing="0" style={{ width: "100%" }} width="100%">
                                <tbody>
                                    <tr>
                                        <td className="reorder-mobile-table xsmall-reorder">
                                            <table border={0} cellPadding="0" cellSpacing="0" className="info-mobile-padding" style={{ width: "100%" }} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ paddingRight: "16px", width: "56px" }} className="destino-img-remove">
                                                            <div className="no-border" style={{ border: "1px solid #ffffff", width: "52px", height: "52px", borderRadius: "50%", padding: "1px", margin: "0", display:'flex', justifyContent: 'center', alignItems: 'center'}} >                                
                                                                <img width="51" 
                                                                // @ts-expect-error doesn't exist button props
                                                                src={`${data[langProp].imageURL}`} height="51" alt="City IMG" style={{ border: "0", width: '52px', height:'52px', padding: '2px' }} />
                                                            </div>
                                                        </td>
                                                        <td className="destino-mobile-padding">
                                                            <p style={{ margin: "0", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px", color: "#ffffff",}}>
                                                            {
                                                                // @ts-expect-error doesn't exist button props
                                                                data[langProp].labelTextDestination
                                                            }
                                                            </p>
                                                            <p style={{ margin: "0", fontFamily: "Gilroy, Helvetica, Arial, sans-serif", fontSize: "20px", fontStyle: "normal", fontWeight: 700, lineHeight: "32px", color: "#ffffff", }} >
                                                                {
                                                                    // @ts-expect-error doesn't exist button props
                                                                    data[langProp].destination
                                                                }
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td className="infobar-divider-remove">
                                            <table border={0} cellPadding="0" cellSpacing="0" width="100%" style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #CCCCCB", width: "1px", height: "24px", }} >
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="reorder-mobile-table">
                            <table border={0} cellPadding="0" cellSpacing="0" style={{ width: "100%" }} width="100%">
                                <tbody>
                                    <tr>
                                        <td className="xsmall-reorder mid-right-spacing date-mobile-padding">
                                            <p style={{ margin: "0", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px", color: "#ffffff", }} >
                                                {
                                                // @ts-expect-error doesn't exist button props
                                                data[langProp].labelTextDate
                                                }
                                            </p>
                                            <p style={{ margin: "0", fontFamily: "Gilroy, Helvetica, Arial, sans-serif", fontSize: "18px", fontStyle: "normal", fontWeight: 700, lineHeight: "24px", color: "#ffffff", whiteSpace: "nowrap", }}>
                                                {
                                                // @ts-expect-error doesn't exist button props
                                                data[langProp].date
                                                }
                                            </p>
                                        </td>
                                        <td className="infobar-divider-remove" >
                                            <table border={0} cellPadding="0" cellSpacing="0" style={{ width: "100%" }} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #CCCCCB", width: "1px", height: "24px", }}>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td className="xsmall-reorder">
                                            <p style={{ margin: "0", fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px", color: "#ffffff", }}>
                                                {
                                                // @ts-expect-error doesn't exist button props
                                                data[langProp].labelTextReservationCode
                                                }
                                            </p>
                                            <p style={{ margin: "0", fontFamily: "Gilroy, Helvetica, Arial, sans-serif", fontSize: "18px", fontStyle: "normal", fontWeight: 700, lineHeight: "24px", color: "#ffffff",}}>
                                                {
                                                    // @ts-expect-error doesn't exist button props
                                                    data[langProp].reservationCode
                                                }
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default SingleInfoBar