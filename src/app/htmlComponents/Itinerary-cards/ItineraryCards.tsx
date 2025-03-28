import { Component } from "@/app/components/Canva/Canva";
import { useLanguage } from "@/app/context/LanguageContext";

const ItineraryCards = ({ data }: { data: Component }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Adelantado":
      return (
        <table
          cellSpacing="0"
          cellPadding="0"
          width="100%"
          style={{ width: "100%", minWidth: "100%" }}
        >
          <tbody>
            <tr>
              <td>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    width: "100%",
                    minWidth: "100%",
                    border: "1px solid #DBDAD8",
                    borderRadius: "12px",
                    borderCollapse: "separate",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        className="itinerary-mobile-padding"
                        style={{ padding: "24px", borderCollapse: "collapse" }}
                      >
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ width: "100%", minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontFamily:
                                    "SuisseIntl, Helvetica, Arial, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  fontWeight: "600",
                                  color: "#333333",
                                }}
                              >
                                {
                                  // @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].date
                                }{" "}
                                ·{" "}
                                {
                                  // @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].aircraft
                                }
                              </td>
                              <td
                                align="right"
                                style={{
                                  fontFamily:
                                    "SuisseIntl, Helvetica, Arial, sans-serif",
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  color: "#666666",
                                  verticalAlign: "top",
                                }}
                              >
                                {/* MSO Conditional VML for Outlook */}
                                <span
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontFamily:
                                      "SuisseIntl, Helvetica, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    padding: "2px 12px",
                                    backgroundColor: "#0E68FF",
                                    borderRadius: "12px",
                                    color: "#ffffff",
                                  }}
                                >
                                  {
                                    // @ts-expect-error doesn't exist itinerary Card props
                                    data[langProp].pillsFlightStatus
                                  }
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ paddingTop: "16px" }}>
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{ width: "100%", minWidth: "100%" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ whiteSpace: "nowrap" }}>
                                        <a>
                                          <s
                                            className="remove-text-mobile"
                                            style={{
                                              fontFamily:
                                                "Gilroy, Helvetica, Arial, sans-serif",
                                              color: "#333333",
                                              fontSize: "18px",
                                              lineHeight: "24px",
                                              fontWeight: "400",
                                            }}
                                          >
                                            {
                                              // @ts-expect-error doesn't exist itinerary Card props
                                              data[langProp].departureCrossedOutTime
                                            }
                                          </s>
                                        </a>
                                      </td>
                                      <td
                                        className="right-padding-mobile"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <span
                                          className="remove-padding-mobile"
                                          style={{
                                            fontSize: "20px",
                                            lineHeight: "32px",
                                            padding: "0 8px",
                                            fontWeight: "700",
                                            color: "#0E68FF",
                                          }}
                                        >
                                          {
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].departureTime
                                          }
                                        </span>
                                      </td>
                                      <td style={{ width: "48%" }}>
                                        <p
                                          style={{
                                            borderTop: "solid 1px #999999",
                                            lineHeight: "0",
                                            margin: "0px auto",
                                            width: "100%",
                                          }}
                                        >
                                          &nbsp;
                                        </p>
                                      </td>
                                      <td
                                        style={{
                                          color: "#666666",
                                          fontSize: "12px",
                                          fontWeight: "400",
                                          lineHeight: "16px",
                                          verticalAlign: "middle",
                                          textAlign: "center",
                                          whiteSpace: "nowrap",
                                          padding: "0 8px",
                                        }}
                                      >
                                        {
                                          // @ts-expect-error doesn't exist itinerary Card props
                                          data[langProp].flightDuration
                                        }
                                      </td>
                                      <td style={{ width: "48%" }}>
                                        <p
                                          style={{
                                            borderTop: "solid 1px #999999",
                                            lineHeight: "0",
                                            margin: "0px auto",
                                            width: "100%",
                                          }}
                                        >
                                          &nbsp;
                                        </p>
                                      </td>
                                      <td
                                        align="right"
                                        className="left-padding-mobile"
                                        style={{
                                          textAlign: "right",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span
                                          className="remove-padding-mobile"
                                          style={{
                                            fontFamily:
                                              "Gilroy, Helvetica, Arial, sans-serif",
                                            fontSize: "20px",
                                            lineHeight: "32px",
                                            padding: "0 8px",
                                            fontWeight: "700",
                                            color: "#0E68FF",
                                          }}
                                        >
                                          {
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].arrivalTime
                                          }
                                        </span>
                                      </td>
                                      <td style={{ whiteSpace: "nowrap" }}>
                                        <a>
                                          <s
                                            className="remove-text-mobile"
                                            style={{
                                              fontFamily:
                                                "Gilroy, Helvetica, Arial, sans-serif",
                                              color: "#333333",
                                              fontSize: "18px",
                                              lineHeight: "24px",
                                              fontWeight: "400",
                                            }}
                                          >
                                            {
                                              // @ts-expect-error doesn't exist itinerary Card props
                                              data[langProp].arrivalCrossedOutTime
                                            }
                                          </s>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        colSpan={3}
                                        style={{ width: "50%" }}
                                        className="mso-noshow"
                                      >
                                        <a>
                                          <s
                                            className="show-text-mobile"
                                            style={{
                                              lineHeight: "24px",
                                              fontSize: "18px",
                                              fontWeight: "400",
                                              display: "none",
                                              color: "#333333",
                                            }}
                                          >
                                            {
                                              // @ts-expect-error doesn't exist itinerary Card props
                                              data[langProp].departureCrossedOutTime
                                            }
                                          </s>
                                        </a>
                                      </td>
                                      <td
                                        colSpan={3}
                                        style={{
                                          textAlign: "right",
                                          width: "50%",
                                        }}
                                        className="mso-noshow"
                                      >
                                        <a>
                                          <s
                                            className="show-text-mobile"
                                            style={{
                                              lineHeight: "24px",
                                              fontSize: "18px",
                                              fontWeight: "400",
                                              display: "none",
                                              color: "#333333",
                                            }}
                                          >
                                            {
                                              // @ts-expect-error doesn't exist itinerary Card props
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
                            <tr>
                              <td colSpan={2}>
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{ width: "100%", minWidth: "100%" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          fontFamily:
                                            "SuisseIntl, Helvetica, Arial, sans-serif",
                                          fontSize: "14px",
                                          paddingRight: "12px",
                                          color: "#333333",
                                          width: "50%",
                                          lineHeight: "20px",
                                          verticalAlign: "top",
                                          fontWeight: "400",
                                        }}
                                      >
                                        {
                                          // @ts-expect-error doesn't exist itinerary Card props
                                          data[langProp].origin
                                        }
                                      </td>
                                      <td
                                        align="right"
                                        style={{
                                          fontFamily:
                                            "SuisseIntl, Helvetica, Arial, sans-serif",
                                          fontSize: "14px",
                                          paddingLeft: "12px",
                                          textAlign: "right",
                                          color: "#333333",
                                          width: "50%",
                                          lineHeight: "20px",
                                          verticalAlign: "top",
                                          fontWeight: "400",
                                        }}
                                      >
                                        {
                                          // @ts-expect-error doesn't exist itinerary Card props
                                          data[langProp].destination
                                        }
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{ paddingTop: "16px" }}>
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{ width: "100%", minWidth: "100%" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          fontFamily:
                                            "SuisseIntl, Helvetica, Arial, sans-serif",
                                          fontSize: "12px",
                                          paddingRight: "12px",
                                          color: "#666666",
                                          width: "50%",
                                          lineHeight: "16px",
                                          verticalAlign: "top",
                                          fontWeight: "600",
                                        }}
                                      >
                                        <span className="reorder-terminal-gate-mobile">
                                          {
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].labelTextOriginTerminal
                                          }
                                          :{" "}
                                          <span style={{ color: "#333333" }}>
                                            {// @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].originTerminal}
                                          </span>
                                        </span>
                                        <span className="reorder-terminal-gate-mobile">
                                          {" "}{
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].labelTextOriginGate
                                          }
                                          :{" "}
                                          <span style={{ color: "#333333" }}>
                                            {// @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].originGate}
                                          </span>
                                        </span>
                                      </td>
                                      <td
                                        align="right"
                                        style={{
                                          fontFamily:
                                            "SuisseIntl, Helvetica, Arial, sans-serif",
                                          fontSize: "12px",
                                          paddingLeft: "12px",
                                          textAlign: "right",
                                          color: "#666666",
                                          width: "50%",
                                          lineHeight: "16px",
                                          verticalAlign: "top",
                                          fontWeight: "600",
                                        }}
                                      >
                                        <span className="reorder-terminal-gate-mobile">
                                          {
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].labelTextDestinationTerminal
                                          }
                                          :{" "}
                                          <span style={{ color: "#333333" }}>
                                            {// @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].destinationTerminal}
                                          </span>
                                        </span>
                                        <span className="reorder-terminal-gate-mobile">
                                          {" "}{
                                            // @ts-expect-error doesn't exist itinerary Card props
                                            data[langProp].labelTextDestinationGate
                                          }
                                          :{" "}
                                          <span style={{ color: "#333333" }}>
                                            {// @ts-expect-error doesn't exist itinerary Card props
                                  data[langProp].destinationGate}
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
      );
    case "A Tiempo":

    case "Cambios":

    case "Cancelado":

    case "Demorado":
  }
};

export default ItineraryCards;
