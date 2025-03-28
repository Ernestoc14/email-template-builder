import { Component } from "@/app/components/Canva/Canva";
import { useLanguage } from "@/app/context/LanguageContext";

const Buttons = ({ data}:{data: Component}) => {
  const { language} =useLanguage()
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
  language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Light":
      return (<table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", color: "#FFFFFF" }}>
        <tr>
          <td>
            <a
              className="btn-blue"
              href={
                // @ts-expect-error doesn't exist button props
                `${data[langProp].urlLink}`
              }
              style={{
                border: "none",
                display: "inline-block",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "40px",
                margin: 0,
                textAlign: "center",
                padding: "15px 0",
                fontSize: "14px",
                lineHeight: "20px",
                width: "100%",
                fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                backgroundColor: "#0E68FF",
              }}
            >
              {
                // @ts-expect-error doesn't exist button props
                data[langProp].label
              }
            </a>
          </td>
        </tr>
      </table>)
    case "Link":
      return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: "100%", color: "#ffffff" }}>
      <tr>
        <td align="right" style={{ width: "50%" }}>
          <a
            href={
              // @ts-expect-error doesn't exist button props
              `${data[langProp].urlLink}`
            }
            target="_blank"
            style={{
              border: "none",
              display: "inline-block",
              color: "#0032a0",
              textDecoration: "none",
              margin: 0,
              textAlign: "center",
              fontSize: "14px",
              lineHeight: "20px",
              fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            {
              // @ts-expect-error doesn't exist button props
            data[langProp].label}
          </a>
        </td>
        <td style={{ width: "50%" }}>
          <a 
            href={
              // @ts-expect-error doesn't exist button props
              `${data[langProp].urlLink}`
            }
            target="_blank" style={{ display: "block", height: "24px" }}>
            <img
              src="https://www.copaair.com/assets/icon-keyboard-arrow.png"
              alt="arrow"
            />
          </a>
        </td>
      </tr>
    </table>
      )
    case "Main":
      return(<table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', color: '#FFFFFF' }}>
        <tr>
          <td>
            {/* [if mso] block for Outlook */}
            <a
              className="btn-blue"
              href={
                // @ts-expect-error doesn't exist button props
                `${data[langProp].urlLink}`
              }
              style={{
                border: 'none',
                display: 'inline-block',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '40px',
                margin: '0',
                textAlign: 'center',
                padding: '15px 0',
                fontSize: '14px',
                lineHeight: '20px',
                width: '100%',
                fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                backgroundColor: '#0032A0',
              }}
            >
              {
              // @ts-expect-error doesn't exist button props
              data[langProp].label}
            </a>
            {/* [endif] block for Outlook */}
          </td>
        </tr>
      </table>)
    case "Outline":
      return(<table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', color: '#ffffff' }}>
        <tbody>
          <tr>
            <td>
              {/* [if mso] block for Outlook */}
              <a
                className="btn-blue"
                href={
                  // @ts-expect-error doesn't exist button props
                  `${data[langProp].urlLink}`
                }
                style={{
                  // msoBorderAlt: 'none',
                  display: 'inline-block',
                  color: '#0032A0',
                  border: '1px solid #0032A0',
                  textDecoration: 'none',
                  borderRadius: '40px',
                  margin: '0',
                  textAlign: 'center',
                  padding: '15px 0',
                  fontSize: '14px',
                  lineHeight: '20px',
                  width: '100%',
                  fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                }}
              >
                {
                // @ts-expect-error doesn't exist button props
                data[langProp].urlLink}
              </a>
            </td>
          </tr>
        </tbody>
      </table>)
  }
}

export default Buttons