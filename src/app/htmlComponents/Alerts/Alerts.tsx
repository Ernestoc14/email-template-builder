import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";

const Alerts = ({ data }: { data: Component }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Content Error":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "16px",
                  backgroundColor: "#FFEFEF",
                  borderRadius: "4px",
                  border: "1px solid #D52525",
                }}
              >
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_high.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontWeight: 400,
                          color: "#333333",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Content Info":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "16px",
                  backgroundColor: "#EFF5FF",
                  borderRadius: "4px",
                  border: "1px solid #9FC3FF",
                }}
              >
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/images/icon-alert-blue-rounded.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontWeight: 400,
                          color: "#333333",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Content Invert":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "16px",
                  backgroundColor: "#001A66",
                  borderRadius: "4px",
                  border: "1px solid #001A66",
                }}
              >
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_inverted.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontWeight: 400,
                          color: "#FFFFFF",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Content Warning":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "16px",
                  backgroundColor: "#FFF4D5",
                  borderRadius: "4px",
                  border: "1px solid #FFC82C",
                }}
              >
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/images/icon-alert-yellow-rounded.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontWeight: 400,
                          color: "#333333",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Changes":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  "mso-border-alt": "none",
                  // msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#B15C37",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/assets/info-circle-white.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Error":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#D52525",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/assets/info-circle-white.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Inverted":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#0E68FF",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/assets/info-circle-white.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Main":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#0E68FF",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/assets/info-circle-white.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Success":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#0C7E3E",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/icons/alerts/inline_success.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="success"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Transparent":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "8px 16px 8px 0",
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                }}
              >
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                      >
                        <img
                          src="https://www.copaair.com/assets/inner-alert-blue-icon.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Inline Warning":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "separate" }}
        >
          <tbody>
            <tr>
              <td
                className="remove-styles-mso"
                style={{
                  msoBorderAlt: "none",
                  padding: "8px 16px",
                  backgroundColor: "#FFC82C",
                  borderRadius: "4px",
                }}
              >
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ verticalAlign: "middle" }}
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "8px",
                          verticalAlign: "top",
                          width: "20px",
                          maxWidth: "20px",
                        }}
                        className="mso-padding"
                      >
                        <img
                          src="https://www.copaair.com/webassets/icons/alerts/inline_warning.png"
                          style={{
                            width: "20px",
                            border: 0,
                            height: "auto",
                            lineHeight: "100%",
                            outline: "none",
                            textDecoration: "none",
                            verticalAlign: "top",
                          }}
                          width={20}
                          alt="information"
                        />
                      </td>
                      <td
                        style={{
                          fontFamily:
                            "SuisseIntl, Arial, Helvetica, sans-serif",
                          fontWeight: 600,
                          color: "#333333",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "left",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist title props
                          data[langProp].alertText
                        }
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
export default Alerts;
