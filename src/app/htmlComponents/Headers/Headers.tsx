import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";

const Headers = ({ data }: { data: Component }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Copa Logo":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td style={{ width: "100%", height: "40px" }}>
                <img
                  height="auto"
                  src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                  style={{
                    border: 0,
                    display: "block",
                    outline: "none",
                    textDecoration: "none",
                    width: "176px",
                    height: "auto",
                    lineHeight: "100%",
                  }}
                  alt="Copa Logo"
                  className="copa-logo-width"
                  width={176}
                />
              </td>
            </tr>
            <tr>
              <td
                className="divider-mobile-spacing"
                style={{
                  borderBottom: "1px solid #cccccb",
                  paddingTop: "22px",
                  width: "100%",
                  maxHeight: "1px",
                  height: "1px",
                  lineHeight: "0",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      );

    case "Copa y ConnectMiles":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td style={{ width: "50%", height: "40px" }}>
                <img
                  height="auto"
                  src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                  style={{
                    border: 0,
                    display: "block",
                    outline: "none",
                    textDecoration: "none",
                    width: "176px",
                    height: "auto",
                    lineHeight: "100%",
                  }}
                  alt="Copa Logo"
                  className="copa-logo-width"
                  width={176}
                />
              </td>
              <td style={{ width: "50%" }} align="right">
                <img
                  height="auto"
                  src="https://www.copaair.com/assets/connectMilesLogo.png"
                  style={{
                    border: 0,
                    display: "block",
                    outline: "none",
                    textDecoration: "none",
                    width: "159px",
                    height: "auto",
                    lineHeight: "100%",
                    paddingBottom: "8px",
                  }}
                  alt="ConnectMiles Logo"
                  className="connectmiles-logo-width"
                  width={159}
                />
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="divider-mobile-spacing"
                style={{
                  borderBottom: "1px solid #cccccb",
                  paddingTop: "22px",
                  width: "100%",
                  maxHeight: "1px",
                  height: "1px",
                  lineHeight: "0",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      );

    case "Reservation Code":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td style={{ width: "50%", height: "40px" }}>
                <img
                  height="auto"
                  src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                  style={{
                    border: 0,
                    display: "block",
                    outline: "none",
                    textDecoration: "none",
                    width: "176px",
                    height: "auto",
                    lineHeight: "100%",
                  }}
                  alt="Copa Logo"
                  className="copa-logo-width"
                  width={176}
                />
              </td>
              <td
                align="right"
                style={{ width: "50%", color: "#ffffff", margin: 0 }}
              >
                <table border={0} cellPadding={0} cellSpacing={0} align="right">
                  <tbody>
                    <tr>
                      <td
                        align="right"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist header props
                          data[langProp].labelTextReservationCode
                        }
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="right"
                        style={{
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                        }}
                      >
                        {
                          // @ts-expect-error doesn't exist header props
                          data[langProp].reservationCode
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="divider-mobile-spacing"
                style={{
                  borderBottom: "1px solid #cccccb",
                  paddingTop: "22px",
                  width: "100%",
                  maxHeight: "1px",
                  height: "1px",
                  lineHeight: "0",
                }}
              >
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      );
  }
};
export default Headers;
