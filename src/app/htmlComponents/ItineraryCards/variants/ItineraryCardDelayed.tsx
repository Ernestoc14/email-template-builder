import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const getStyles = (isResponsive: boolean | undefined) => {
  return {
    container: {
      backgroundColor: "#FFFFFF",
      ".remove-text-mobile": {
        display: isResponsive ? "none !important" : "block",
      },
      ".show-text-mobile": {
        display: isResponsive ? "block !important" : "none",
      },
      ".itinerary-mobile-padding": {
        padding: isResponsive ? "16px !important" : "24px",
      },
      ".reorder-terminal-gate-mobile": {
        display: isResponsive ? "block !important" : "",
      },
      ".remove-padding-mobile": {
        padding: isResponsive ? "0 !important" : "0 8px",
      },
      ".right-padding-mobile": {
        padding: isResponsive ? "0 8px 0 0 !important" : "0",
      },
      ".left-padding-mobile": {
        padding: isResponsive ? "0 0 0 8px !important" : "0",
      },
    }
    }
}

const ItineraryCardDelayed = ({data, langProp, isResponsiveView} : {data: Component, langProp: string, isResponsiveView?: boolean}) => {
  const [styles, setStyle] = useState(getStyles(isResponsiveView))

  useEffect(() => {
    setStyle(getStyles(isResponsiveView))
  }, [isResponsiveView])

  return (
    <Box sx={styles.container}>
      <table cellSpacing="0" cellPadding="0" width="100%" style={{ width: '100%', minWidth: '100%' }}>
        <tbody>
          <tr>
            <td>
              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', minWidth: '100%', border: '1px solid #DBDAD8', borderRadius: '12px', borderCollapse: 'separate' }}>
                <tbody>
                  <tr>
                    <td className="itinerary-mobile-padding" style={{ padding: '24px', borderCollapse: 'collapse' }}>
                      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', minWidth: '100%' }}>
                        <tbody>
                          <tr>
                            <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', lineHeight: '16px', fontWeight: 600, color: '#333333' }}>
                              {
                                // @ts-expect-error doesn't exist itineraryCard props
                                data[langProp].date
                              } · {
                                // @ts-expect-error doesn't exist itineraryCard props
                                data[langProp].aircraft
                              }
                            </td>
                            <td align="right" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#666666', verticalAlign: 'top' }}>
                              <span style={{ whiteSpace: 'nowrap', fontFamily: 'SuisseIntl, Helvetica, sans-serif', fontSize: '12px', fontWeight: 600, padding: '2px 12px', backgroundColor: '#D52525', borderRadius: '12px', color: '#ffffff' }}>
                                {
                                  // @ts-expect-error doesn't exist itineraryCard props
                                  data[langProp].pillsFlightStatus
                                }
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td colSpan={2} style={{ paddingTop: '16px' }}>
                              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', minWidth: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td style={{ whiteSpace: 'nowrap' }}>
                                      <a>
                                        <s className="remove-text-mobile" style={{ fontFamily: 'Gilroy, Helvetica, Arial, sans-serif', color: '#333333', fontSize: '18px', lineHeight: '24px', fontWeight: 400 }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].departureCrossedOutTime
                                          }
                                        </s>
                                      </a>
                                    </td>
                                    <td className="right-padding-mobile" style={{ whiteSpace: 'nowrap' }}>
                                      <span className="remove-padding-mobile" style={{ fontSize: '20px', lineHeight: '32px', padding: '0 8px', fontWeight: 700, color: '#D52525' }}>
                                        {
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].departureTime
                                        }
                                      </span>
                                    </td>
                                    <td style={{ width: '48%' }}>
                                      <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>&nbsp;</p>
                                    </td>
                                    <td style={{ color: '#666666', fontSize: '12px', fontWeight: 400, lineHeight: '16px', verticalAlign: 'middle', textAlign: 'center', whiteSpace: 'nowrap', padding: '0 8px' }}>
                                      {
                                        // @ts-expect-error doesn't exist itineraryCard props
                                        data[langProp].flightDuration
                                      }
                                    </td>
                                    <td style={{ width: '48%' }}>
                                      <p style={{ borderTop: 'solid 1px #999999', lineHeight: 0, margin: '0px auto', width: '100%' }}>&nbsp;</p>
                                    </td>
                                    <td align="right" className="left-padding-mobile" style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                                      <span className="remove-padding-mobile" style={{ fontFamily: 'Gilroy, Helvetica, Arial, sans-serif', fontSize: '20px', lineHeight: '32px', padding: '0 8px', fontWeight: 700, color: '#D52525' }}>
                                        {
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].arrivalTime
                                        }
                                      </span>
                                    </td>
                                    <td style={{ whiteSpace: 'nowrap' }}>
                                      <a>
                                        <s className="remove-text-mobile" style={{ fontFamily: 'Gilroy, Helvetica, Arial, sans-serif', color: '#333333', fontSize: '18px', lineHeight: '24px', fontWeight: 400 }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].arrivalCrossedOutTime
                                          }
                                        </s>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody>					
                                  <tr>
                                    <td colSpan={3} style={{ width: '50%' }} className="mso-noshow">
                                      <a>
                                        <s className="show-text-mobile" style={{ lineHeight: '24px', fontSize: '18px', fontWeight: 400, display: 'none', color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].departureCrossedOutTime
                                          }
                                        </s>
                                      </a>
                                    </td>
                                    <td colSpan={3} style={{ textAlign: 'right', width: '50%' }} className="mso-noshow">
                                      <a>
                                        <s className="show-text-mobile" style={{ lineHeight: '24px', fontSize: '18px', fontWeight: 400, display: 'none', color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].arrivalCrossedOutTime
                                          }
                                        </s>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>										
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', minWidth: '100%' }}>
                                <tbody>					
                                  <tr>
                                    <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingRight: '12px', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, fontStyle: 'normal' }}>
                                      {
                                        // @ts-expect-error doesn't exist itineraryCard props
                                        data[langProp].origin
                                      }
                                    </td>
                                    <td align="right" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '14px', paddingLeft: '12px', textAlign: 'right', color: '#333333', width: '50%', lineHeight: '20px', verticalAlign: 'top', fontWeight: 400, fontStyle: 'normal' }}>
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
                        </tbody>
                        <tbody>
                          <tr>
                            <td colSpan={2} style={{ paddingTop: '16px' }}>
                              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', minWidth: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', paddingRight: '12px', color: '#666666', width: '50%', lineHeight: '16px', verticalAlign: 'top', fontWeight: 600 }}>
                                      <span className="reorder-terminal-gate-mobile">
                                        {
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].labelTextOriginTerminal
                                        }: {' '}
                                        <span style={{ color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].originTerminal } 
                                        </span>
                                      </span>
                                      <span className="reorder-terminal-gate-mobile">
                                        {' '}{
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].labelTextOriginGate
                                        }: {' '}
                                        <span style={{ color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].originGate
                                          }
                                        </span>
                                      </span>
                                    </td>
                                    <td align="right" style={{ fontFamily: 'SuisseIntl,Helvetica, Arial, sans-serif', fontSize: '12px', paddingLeft: '12px', textAlign: 'right', color: '#666666', width: '50%', lineHeight: '16px', verticalAlign: 'top', fontWeight: 600 }}>
                                      <span className="reorder-terminal-gate-mobile">
                                        {
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].labelTextDestinationTerminal
                                        }: {' '}
                                        <span style={{ color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].destinationTerminal
                                          } {' '}
                                        </span>
                                      </span>
                                      <span className="reorder-terminal-gate-mobile">
                                        {
                                          // @ts-expect-error doesn't exist itineraryCard props
                                          data[langProp].labelTextDestinationGate
                                        }: {' '}
                                        <span style={{ color: '#333333' }}>
                                          {
                                            // @ts-expect-error doesn't exist itineraryCard props
                                            data[langProp].destinationGate
                                          }
                                        </span>
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
          </tr>
        </tbody>
      </table>
    </Box>
  )
}
export default ItineraryCardDelayed;