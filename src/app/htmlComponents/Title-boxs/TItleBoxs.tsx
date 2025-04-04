import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";

const TitleBoxs = ({ data }: { data: Component }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Title Description":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", color: "#FFFFFF" }}
        >
          <tbody>
            <tr>
              <td
                style={{ wordBreak: "break-word", height: "60px" }}
                className="titlebox-mobile-padding"
              >
                <p
                  className="title-titlebox-mobile"
                  style={{
                    fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "40px",
                    margin: 0,
                  }}
                >
                  {
                    // @ts-expect-error doesn't exist title props
                    data[langProp].title
                  }
                </p>
                <p
                  style={{
                    fontFamily: "SuisseIntl, Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: 0,
                    paddingTop: "8px",
                  }}
                >
                  {
                    // @ts-expect-error doesn't exist title props
                    data[langProp].description
                  }
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case "Just Title":
      return (
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ width: "100%", color: "#FFFFFF" }}
        >
          <tbody>
            <tr>
              <td
                style={{ wordBreak: "break-word", height: "60px" }}
                className="titlebox-mobile-padding"
              >
                <p
                  className="title-titlebox-mobile"
                  style={{
                    fontFamily: "Gilroy, Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "40px",
                    margin: 0,
                  }}
                >
                  {
                    // @ts-expect-error doesn't exist title props
                    data[langProp].title
                  }
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
  }
};
export default TitleBoxs;
