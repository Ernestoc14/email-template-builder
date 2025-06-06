import { Component } from "@/app/context/MasterJSONContext"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

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

const PaxCardPair = ({ data, langProp, isResponsiveView} : { data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))

    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])
    
    return (
        <Box sx={styles.container}>
            <table border={0} cellSpacing={0} cellPadding={0} width="100%" style={{backgroundColor: '#FFFFFF', borderRadius: "12px" }}>
                <tbody>
                    <tr>
                        <td className="pax-card-pair">
                            <table className="mb-pax-full-width" cellPadding={0} cellSpacing={0} border={0} style={{ border: '1px solid #DBDAD8', borderRadius: '12px', borderCollapse: 'separate'}}>
                                <tbody>
                                    <tr>
                                        <td style={{padding: '24px 16px 24px 24px', width: '58px'}}>
                                            <table border={0} cellPadding={0} cellSpacing={0} style={{width: '58px'}}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{width: '58px', height: '58px', verticalAlign: 'middle'}} width={58} height={58}>
                                                            <table border={0} cellPadding={0} cellSpacing={0} style={{width: '52px', borderCollapse: 'separate'}} >
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="status-line-member-status" width="56" height="56" style={{borderRadius: '50%', width: '56px', height: '56px', minWidth: '56px'}}>
                                                                            <table border={0} cellPadding={0} cellSpacing={0} style={{margin: "0 auto"}}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width={52} height={52} style={{borderRadius: '50%', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '20px', minWidth: '52px', maxWidth: '52px'}} className="status-bg-member-status ">
                                                                                            <span className="status-color-all-status">
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
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table border={0} cellSpacing={0} cellPadding={0} width="100%" style={{width: '100%', minWidth: '100%'}}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{fontFamily: 'Gilroy, Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '24px', color: '#333333'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].paxName
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666', paddingBottom: '4px'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].status
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td  style={{fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].seats
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
                        <td className="pax-card-pair remove-mbpadding">
                            <table className="mb-pax-full-width" cellPadding={0} cellSpacing={0} border={0} style={{ border: '1px solid #DBDAD8', borderRadius: '12px', borderCollapse: 'separate'}}>
                                <tbody>
                                    <tr>
                                        <td style={{padding: '24px 16px 24px 24px', width: '58px'}}>
                                            <table border={0} cellPadding={0} cellSpacing={0} style={{width: '58px'}}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: '58px', height: '58px', verticalAlign: 'middle'}} width={58} height={58}>
                                                            <table border={0} cellPadding={0} cellSpacing={0} style={{width: '52px', borderCollapse: 'separate'}} >
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="status-line-gold-status" width="56" height="56" style={{borderRadius: '50%', width: '56px', height: '56px', minWidth: '56px'}}>
                                                                            <table border={0} cellPadding={0} cellSpacing={0} style={{margin: "0 auto"}}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width={52} height={52} style={{borderRadius: '50%', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '20px', minWidth: '52px', maxWidth: '52px'}} className="status-bg-gold-status">
                                                                                            <span className="status-color-all-status">
                                                                                                {
                                                                                                    // @ts-expect-error doesn't exist in pax card props
                                                                                                    data[langProp].paxInitials2
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
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table border={0} cellSpacing={0} cellPadding={0} width="100%" style={{width: '100%', minWidth: '100%'}}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{fontFamily: 'Gilroy, Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '24px', color: '#333333'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].paxName2
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666', paddingBottom: '4px'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].status2
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666'}}>
                                                            {
                                                                // @ts-expect-error doesn't exist in pax card props
                                                                data[langProp].seats2
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
        </Box>
    )
}

export default PaxCardPair