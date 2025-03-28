import { Component } from "@/app/components/Canva/Canva";
import { useLanguage } from "@/app/context/LanguageContext";

const Infobars = ({ data }: { data: Component }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;
  switch (data.variant) {
    case "Single Infobar":
      return (
        <table
          border={0}
          cellPadding="0"
          cellSpacing="0"
          style={{ width: "100%" }}
          width="100%"
        >
          <tbody>
            <tr>
              <td className="reorder-mid">
                <table
                  border={0}
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ width: "100%" }}
                  width="100%"
                >
                  <tbody>
                  <tr>
                    <td className="reorder-mobile-table xsmall-reorder">
                      <table
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        className="info-mobile-padding"
                        style={{ width: "100%" }}
                        width="100%"
                      >
                        <tbody>
                        <tr>
                          <td
                            style={{ paddingRight: "16px" }}
                            className="destino-img-remove"
                          >
                            {/* [if mso] block for Outlook */}
                            <div
                              className="no-border"
                              style={{
                                border: "1px solid #ffffff",
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                padding: "1px",
                                margin: "0 auto",
                              }}
                            >
                              <img
                                src={
                                  // @ts-expect-error doesn't exist button props
                                  `${data[langProp].imageURL}`
                                }
                                width="52"
                                height="52"
                                alt="City IMG"
                                style={{ border: "0" }}
                              />
                            </div>
                            {/* [endif] block for Outlook */}
                          </td>
                          <td className="destino-mobile-padding">
                            <p
                              style={{
                                margin: "0",
                                fontFamily:
                                  "SuisseIntl, Helvetica, Arial, sans-serif",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "20px",
                                color: "#ffffff",
                              }}
                            >
                              {
                                // @ts-expect-error doesn't exist button props
                                data[langProp].labelTextDestination
                              }
                            </p>
                            <p
                              style={{
                                margin: "0",
                                fontFamily:
                                  "Gilroy, Helvetica, Arial, sans-serif",
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                lineHeight: "32px",
                                color: "#ffffff",
                              }}
                            >
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
                    <td
                      className="infobar-divider-remove"
                      style={{ padding: "0 32px", width: "1px" }}
                    >
                      <table
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        style={{ width: "100%" }}
                      >
                          <tbody>
                        <tr>
                          <td
                            style={{
                              borderRight: "1px solid #CCCCCB",
                              width: "1px",
                              height: "24px",
                            }}
                            >
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
                <table
                  border={0}
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ width: "100%" }}
                  width="100%"
                >
                  <tbody>
                  <tr>
                    <td className="xsmall-reorder mid-right-spacing date-mobile-padding">
                      <p
                        style={{
                          margin: "0",
                          fontFamily:
                            "SuisseIntl, Helvetica, Arial, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "#ffffff",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist button props
                          data[langProp].labelTextDate
                        }
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "24px",
                          color: "#ffffff",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist button props
                          data[langProp].date
                        }
                      </p>
                    </td>
                    <td
                      style={{ padding: "0 32px", width: "1px" }}
                      className="infobar-divider-remove"
                    >
                      <table
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ width: "100%" }}
                        width="100%"
                      >
                        <tbody>
                        <tr>
                          <td
                            style={{
                              borderRight: "1px solid #CCCCCB",
                              width: "1px",
                              height: "24px",
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="xsmall-reorder">
                      <p
                        style={{
                          margin: "0",
                          fontFamily:
                            "SuisseIntl, Helvetica, Arial, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "#ffffff",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist button props
                          data[langProp].labelTextReservationCode
                        }
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "24px",
                          color: "#ffffff",
                        }}
                      >
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
      );
  }
};

export default Infobars;
