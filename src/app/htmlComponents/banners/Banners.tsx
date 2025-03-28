import { Component } from "@/app/components/Canva/Canva";
import { useLanguage } from "@/app/context/LanguageContext";

const Banners = ({ data }: { data: Component }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Banner with Image":
      return (
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  lineHeight: 0,
                  border: "solid 1px #DBDAD8",
                  backgroundColor: "#FFFFFF",
                  padding: 0,
                  borderRadius: "8px",
                }}
              >
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    borderSpacing: 0,
                  }}
                >
                  <tbody>
                    <tr>
                      <td className="block-mobile-item">
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          role="presentation"
                          style={{
                            borderCollapse: "collapse",
                            width: "100%",
                            borderSpacing: 0,
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                className="banner-paddings"
                                style={{
                                  padding: "24px 32px 0 32px",
                                  color: "#0032A0",
                                  fontFamily:
                                    "Gilroy, Helvetica, Arial, sans-serif",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  fontWeight: 700,
                                }}
                              >
                                {
                                  // @ts-expect-error doesn't exist header props
                                  data[langProp].title
                                }
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="banner-paddings-1"
                                style={{
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  color: "#666666",
                                  padding: "8px 32px 16px 32px",
                                }}
                              >
                                {
                                  // @ts-expect-error doesn't exist header props
                                  data[langProp].description
                                }
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{ padding: "0 32px 24px 32px" }}
                                className="mobile-padding-app-images"
                              >
                                <table
                                  className="store-table"
                                  role="presentation"
                                  style={{
                                    borderCollapse: "collapse",
                                    textAlign: "center",
                                    width: "100%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          width: "87px",
                                          padding: "0 16px 0 0",
                                        }}
                                        className="store-padding-image"
                                      >
                                        <a
                                          href="https://apps.apple.com/es/app/copa-airlines/id533700785"
                                          target="_blank"
                                          style={{ textDecoration: "none" }}
                                        >
                                          <img
                                            src="https://www.copaair.com/assets/app-store-2X.png"
                                            alt="Apple Store"
                                            width="87"
                                            style={{
                                              width: "87px",
                                              margin: 0,
                                              border: 0,
                                              height: "auto",
                                              lineHeight: "100%",
                                              outline: "none",
                                              textDecoration: "none",
                                            }}
                                            className="img-stores"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          width: "87px",
                                          padding: "0 16px 0 0",
                                        }}
                                        className="store-padding-image"
                                      >
                                        <a
                                          href="https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es"
                                          target="_blank"
                                          style={{ textDecoration: "none" }}
                                        >
                                          <img
                                            src="https://www.copaair.com/assets/play-store-2X.png"
                                            alt="Google Play"
                                            width="87"
                                            style={{
                                              width: "87px",
                                              margin: 0,
                                              border: 0,
                                              height: "auto",
                                              lineHeight: "100%",
                                              outline: "none",
                                              textDecoration: "none",
                                            }}
                                            className="img-stores"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          padding: 0,
                                          textAlign: "left",
                                        }}
                                      >
                                        <a
                                          href="https://appgallery.huawei.com/app/C102348393"
                                          target="_blank"
                                          style={{ textDecoration: "none" }}
                                        >
                                          <img
                                            src="https://www.copaair.com/assets/app-gallery-2X.png"
                                            alt="AppGallery"
                                            width="87"
                                            style={{
                                              width: "87px",
                                              margin: 0,
                                              border: 0,
                                              height: "auto",
                                              lineHeight: "100%",
                                              outline: "none",
                                              textDecoration: "none",
                                            }}
                                            className="img-stores"
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td
                        className="block-mobile-item phone-image-mobile-padding"
                        valign="bottom"
                        align="center"
                        style={{ verticalAlign: "bottom" }}
                      >
                        <img
                          src={`${
                            // @ts-expect-error doesn't exist header props
                            data[langProp].desktopImageURL
                          }`}
                          style={{ width: "214px", height: "172px" }}
                          width={214}
                          height={172}
                          className="remove-image-mobile"
                        />
                        {/* [if !mso] --> */}
                        <img
                          src={`${
                            // @ts-expect-error doesn't exist header props
                            data[langProp].mobileImageURL
                          }`}
                          style={{ display: "none" }}
                          width={300}
                          className="show-image-mobile"
                        />
                        {/* <! [endif] */}
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
export default Banners;
