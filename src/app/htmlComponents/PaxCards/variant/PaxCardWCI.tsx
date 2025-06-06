import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".pax-card-pair": {
                textAlign: 'left',
                ...(isResponsive &&{
                    paddingRight: "0 !important",
                    display: "block",
                    clear: 'both',
                    paddingBottom: "16px",
                    maxWidth: "100% !important",
                })
            },
            ".status-bg-member-status": {
                backgroundColor: "#0032A0"
            },
            ".status-line-member-status": {
                border: "1px solid #0032A0"
            },
            ".status-bg-gold-status": {
                backgroundColor:" #8D7249"
            },
            ".status-line-gold-status": {
                border: "1px solid #8D7249"
            },
            ".status-color-all-status": {
                color: "#F9F9F8"
            },
            ".remove-mbpadding": {
                paddingLeft: '24px',
                ...(isResponsive &&  {padding: "0 !important"})
            },
            ".mb-pax-full-width": {
                width: isResponsive ? "100% !important" : '324px',
            }
        }
    }
}
const PaxCardWCI = ({data, langProp, isResponsiveView} : { data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyles] = useState(getStyles(isResponsiveView))
    
    useEffect(() => {
        setStyles(getStyles(isResponsiveView));
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table cellSpacing={0} cellPadding={0} width="100%" style={{ width: '100%', minWidth: '100%', }} >
                <tbody>
                    <tr>
                        <td className="pax-card-pair" style={{ textAlign: 'left' }}>
                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', border: '1px solid #DBDAD8', borderRadius: '12px', borderCollapse: 'separate', }} >
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '24px', backgroundColor: "#FFFFFF", borderRadius: "12px" }} className="pax-card-mobile-padding">
                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%' }} >
                                                <tbody>
                                                    <tr>
                                                        <td style={{ paddingRight: '16px', width: '58px', height: '58px', verticalAlign: 'top', }} width={58} height={58} className="outlook-status-td" >
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', borderCollapse: 'separate', }} className="outlook-status-td" >
                                                                <tbody>
                                                                    <tr>
                                                                        <td width={56} height={56} className="status-line-member-status outlook-status-td" style={{ borderRadius: '50%', width: '56px', height: '56px', minWidth: '56px', }} >
                                                                            <table cellPadding={0} cellSpacing={0} style={{ margin: '0 auto' }} >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width={52} height={52} className="status-bg-member-status outlook-status-td" style={{ borderRadius: '50%', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '20px', minWidth: '52px', }} >
                                                                                            <span className="outlook-status-td status-color-all-status">
                                                                                                {   // @ts-expect-error doesn't exist in pax card props
                                                                                                    data[langProp].paxInitials
                                                                                                }
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td className="outlook-flight-details">
                                                            <table cellPadding={0} cellSpacing={0} width="100%" style={{ width: '100%', minWidth: '100%' }} >
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '20px', color: '#333333', paddingBottom: '4px', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].paxName
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="reorder-mobile" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666', paddingBottom: '4px', }}>
                                                                            {
                                                                                // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].status
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="reorder-mobile" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].seats
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="remove-item-mobile" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#333333', paddingBottom: '4px', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].labelTextDocument
                                                                            }:{' '}
                                                                            <span style={{ textDecoration: 'underline', color: '#666666', }} >
                                                                                {
                                                                                    // @ts-expect-error doesn't exist in pax card props
                                                                                    data[langProp].documentStatus
                                                                                }
                                                                            </span>{' '}
                                                                            <img style={{ width: '16px', height: '16px', verticalAlign: 'top', }} 
                                                                            src={ // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].iconURL} alt="" width={16} height={16} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="remove-item-mobile" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#0C7E3E', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist in pax card props
                                                                                data[langProp].checkInStatus
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default PaxCardWCI