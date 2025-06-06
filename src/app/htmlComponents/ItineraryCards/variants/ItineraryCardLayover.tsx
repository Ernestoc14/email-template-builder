import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            ".itinerary-mobile-padding": {
                padding: isResponsive ? '16px' : '24px',
            }
        }
    }
}

const ItineraryCardLayover = ({ data, langProp, isResponsiveView } : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))

    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table cellSpacing={0} cellPadding={0} width="100%" style={{ width: '100%', minWidth: '100%' }}>
                <tbody>
                    <tr>
                        <td>
                            <table  cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%', border: '1px solid #DBDAD8', borderRadius: '12px', borderCollapse: 'separate', }}>
                                <tbody>
                                {/* Primer vuelo */}
                                    <tr>
                                        <td className="itinerary-mobile-padding" style={{ padding: '24px', borderCollapse: 'collapse' }}>
                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', lineHeight: '16px', fontWeight: 600, color: '#333333', }} >
                                                            {
                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                data[langProp].date
                                                            } · {
                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                data[langProp].aircraft
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{ paddingTop: '16px' }}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ paddingRight: '8px', whiteSpace: 'nowrap' }}>
                                                                            <p style={{ margin: 0, color: '#333333', fontFamily: 'Gilroy, Helvetica, Arial, sans-serif' }}>
                                                                                <span style={{ fontSize: '20px', lineHeight: '32px', fontWeight: 700, color: '#333333' }}>
                                                                                    {
                                                                                        // @ts-expect-error doesn't exist itineraryCard props
                                                                                        data[langProp].departureTime
                                                                                    }
                                                                                </span>
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ width: '48%' }}>
                                                                            <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                                &nbsp;
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ color: '#666666', fontSize: '12px', fontWeight: 400, lineHeight: '16px', verticalAlign: 'middle', textAlign: 'center', whiteSpace: 'nowrap', padding: '0 8px', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].flightDuration
                                                                            }
                                                                        </td>
                                                                        <td style={{ width: '48%' }}>
                                                                            <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                            &nbsp;
                                                                            </p>
                                                                        </td>
                                                                        <td align="right" style={{ paddingLeft: '8px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                                                            <p style={{ margin: 0, color: '#333333', fontFamily: 'Gilroy, Helvetica, Arial, sans-serif' }}>
                                                                            <span style={{ fontSize: '20px', lineHeight: '32px', fontWeight: 700, color: '#333333' }}>
                                                                                {
                                                                                    // @ts-expect-error doesn't exist itineraryCard props
                                                                                    data[langProp].arrivalTime
                                                                                }
                                                                            </span>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingRight: '12px', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].origin
                                                                            }
                                                                        </td>
                                                                        <td align="right" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingLeft: '12px', textAlign: 'right', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].destination
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{ paddingTop: '16px' }}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="right" style={{ whiteSpace: 'nowrap', fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', paddingLeft: '12px', textAlign: 'right', color: '#666666', width: '50%', lineHeight: '16px', verticalAlign: 'top', fontWeight: 400, }}  >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].labelTextDestinationTerminal
                                                                            }: {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].destinationTerminal
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
                                   {/* Escala */}
                                    <tr>
                                        <td style={{ color: '#666666', fontSize: '12px', fontWeight: 400, lineHeight: '16px', verticalAlign: 'middle', textAlign: 'center', whiteSpace: 'nowrap', padding: '0 8px', }} >
                                            <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td className="width-mso" style={{ width: '48%' }}>
                                                            <p style={{ borderTop: 'dashed 1px #CCCCCB', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                        <td style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
                                                            <p style={{ whiteSpace: 'nowrap', fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', color: '#333333', textAlign: 'center', }} >
                                                                {
                                                                    // @ts-expect-error doesn't exist itineraryCard props
                                                                    data[langProp].layoverText
                                                                }
                                                            </p>
                                                        </td>
                                                        <td className="width-mso" style={{ width: '48%' }}>
                                                            <p style={{ borderTop: 'dashed 1px #CCCCCB', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    {/* Segundo vuelo */}
                                    <tr>
                                        <td className="itinerary-mobile-padding" style={{ padding: '24px', borderCollapse: 'collapse' }}>
                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', lineHeight: '16px', fontWeight: 600, color: '#333333', }} >
                                                            {
                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                data[langProp].dateSecondFlight
                                                            } · {
                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                data[langProp].aircraftSecondFlight
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{ paddingTop: '16px' }}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ paddingRight: '8px', whiteSpace: 'nowrap' }}>
                                                                            <p style={{ margin: 0, color: '#333333', fontFamily: 'Gilroy, Helvetica, Arial, sans-serif' }}>
                                                                                <span style={{ fontSize: '20px', lineHeight: '32px', fontWeight: 700, color: '#333333' }}>
                                                                                    {
                                                                                        // @ts-expect-error doesn't exist itineraryCard props
                                                                                        data[langProp].departureTimeSecondFlight
                                                                                    }
                                                                                </span>
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ width: '48%' }}>
                                                                            <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                                &nbsp;
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ color: '#666666', fontSize: '12px', fontWeight: 400, lineHeight: '16px', verticalAlign: 'middle', textAlign: 'center', whiteSpace: 'nowrap', padding: '0 8px', }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].flightDurationSecondFlight
                                                                            }
                                                                        </td>
                                                                        <td style={{ width: '48%' }}>
                                                                            <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>
                                                                            &nbsp;
                                                                            </p>
                                                                        </td>
                                                                        <td align="right" style={{ paddingLeft: '8px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                                                            <p style={{ margin: 0, color: '#333333', fontFamily: 'Gilroy, Helvetica, Arial, sans-serif' }}>
                                                                            <span style={{ fontSize: '20px', lineHeight: '32px', fontWeight: 700, color: '#333333' }}>
                                                                                {
                                                                                    // @ts-expect-error doesn't exist itineraryCard props
                                                                                    data[langProp].arrivalTimeSecondFlight
                                                                                }
                                                                            </span>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingRight: '12px', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].originSecondFlight
                                                                            }
                                                                        </td>
                                                                        <td align="right" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingLeft: '12px', textAlign: 'right', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, }} >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].destinationSecondFlight
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{ paddingTop: '16px' }}>
                                                            <table cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="right" style={{ whiteSpace: 'nowrap', fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', paddingLeft: '12px', textAlign: 'right', color: '#666666', width: '50%', lineHeight: '16px', verticalAlign: 'top', fontWeight: 400, }}  >
                                                                            {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].labelTextDestinationGateSecondFlight
                                                                            }: {
                                                                                // @ts-expect-error doesn't exist itineraryCard props
                                                                                data[langProp].destinationGateSecondFlight
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

export default ItineraryCardLayover;