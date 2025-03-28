import { Component } from "@/app/components/Canva/Canva";
import { useLanguage } from "@/app/context/LanguageContext";

const Footers = ({ data }: { data: Component }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Social":
      return (
        <table
          align="center"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td style={{ paddingBottom: "16px" }}>
                <table
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ margin: "0 auto" }}
                >
                  <tbody>
                    <tr>
                      {[
                        {
                          href: "https://twitter.com/copaairlines",
                          src: "https://www.copaair.com/assets/twitter-x.png",
                        },
                        {
                          href: "https://www.facebook.com/copaairlines",
                          src: "https://www.copaair.com/assets/facebook.png",
                        },
                        {
                          href: "https://www.instagram.com/copaairlines",
                          src: "https://www.copaair.com/assets/instagram.png",
                        },
                        {
                          href: "https://www.youtube.com/copaairlines",
                          src: "https://www.copaair.com/assets/youtube.png",
                        },
                        {
                          href: "https://www.tiktok.com/@copaairlines",
                          src: "https://www.copaair.com/assets/tiktok.png",
                        },
                        {
                          href: "https://linkedin.com/company/copa-airlines",
                          src: "https://www.copaair.com/assets/linkedin.png",
                        },
                      ].map(({ href, src }) => (
                        <td key={href}>
                          <a
                            href={href}
                            style={{ display: "block", height: "32px" }}
                          >
                            <img src={src} alt="Social Media Icon" />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  color: "#666666",
                  paddingBottom: "8px",
                }}
              >
                {
                  // @ts-expect-error doesn't exist footer props
                  data[langProp].text
                }
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  color: "#666666",
                  paddingBottom: "16px",
                }}
              >
                {
                  // @ts-expect-error doesn't exist footer props
                  data[langProp].secondText
                }{" "}
                <a
                  style={{
                    color: "#666666",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                  href={`${
                    // @ts-expect-error doesn't exist footer props
                    data[langProp].secondLink
                  }`}
                  target="_blank"
                >
                  <span style={{ whiteSpace: "nowrap" }}>
                    {
                      // @ts-expect-error doesn't exist footer props
                      data[langProp].secondLinkText
                    }
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a href="https://www.staralliance.com/en/" target="_blank">
                  <img
                    src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png"
                    alt="StarAlliance Logo"
                    width="168"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      );

    case "Traditional":
      return (
        <table
          align="center"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td
                align="center"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  color: "#666666",
                  paddingBottom: "8px",
                }}
              >
                {
                  // @ts-expect-error doesn't exist footer props
                  data[langProp].text
                }{" "}
                <a
                  style={{
                    color: "#666666",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                  href={`${
                    // @ts-expect-error doesn't exist footer props
                    data[langProp].firstLink
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ whiteSpace: "nowrap" }}>
                    {
                      // @ts-expect-error doesn't exist footer props
                      data[langProp].linkText
                    }
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  color: "#666666",
                  paddingBottom: "16px",
                }}
              >
                {
                  // @ts-expect-error doesn't exist footer props
                  data[langProp].secondText
                }{" "}
                <a
                  style={{
                    color: "#666666",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                  href={`${
                    // @ts-expect-error doesn't exist footer props
                    data[langProp].secondLink
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {
                      // @ts-expect-error doesn't exist footer props
                      data[langProp].secondLinkText
                    }
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a
                  href="https://www.staralliance.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png"
                    alt="StarAlliance Logo"
                    width={168}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      );
  }
};

export default Footers;
