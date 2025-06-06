import { TopicCardsProps } from "../types"

const topicCardPairCSS = () => {
  return `<style type="text/css">
          @media all and (max-width:719px) {
            .block-mobile-item {
              display: block !important;
            }
            .reorder-mid {
              display: block !important;
            }
          }
          </style>
          <style type="text/css">
          @media all and (max-width: 580px) {
            .img-mb-padding {
              padding: 0 0 24px 0 !important;
            }
            .topic-full-width {
              width: 100% !important;
            }
          }
          </style>`
}

const topicCardPairHTML = (props: TopicCardsProps) => {
  return `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; border-collapse: separate;">
            <tr>
              <td class="block-mobile-item">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; border-collapse: separate;">
                  <tr>
                    <td style="padding-right: 24px;" class="reorder-mid img-mb-padding">
                      <table style="border: 1px solid #CCCCCB;border-radius: 16px;border-collapse: separate;border-spacing: 0;display: inline-block; height: 100%; width: 324px;">
                        <tr>
                          <td style="line-height: 0; padding: 0;">
                            <img src=${props.imgUrl1}
                              style="width: 100%;border-top-left-radius: 16px;border-top-right-radius: 16px; line-height: 0;"
                              width="355" alt="Attenza" />
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 24px;vertical-align: top; text-align: left;">
                            <p style="font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 16px;margin: 0 0 8px;font-weight: 600;line-height: 24px;color: #333333;">
                              ${props.title1}
                            </p>
                            <p style="font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;margin: 0 !important; color: #666666;">
                              ${props.description1}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 24px 16px;">
                            <table cellspacing="0" cellpadding="0" style="width: auto">
                              <tbody>
                                <tr>
                                  <td align="left" valign="middle" style="color: #0E68FF;font-size: 12px;vertical-align: middle;">
                                    <a href=${props.CTALink1} target="_blank"
                                      style="color: #0E68FF;text-decoration: none;font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-size: 14px;line-height: 20px;font-weight: 500;">
                                      <span>
                                        ${props.labelLink1}
                                      </span>
                                    </a>
                                  </td>
                                  <td width="24" height="24" align="center" valign="middle" style="vertical-align: middle;line-height: 0;">
                                    <a href=${props.CTALink1} target="_blank">
                                      <img src="https://www.copaair.com/webassets/images/icon-chevron-arrow-light-blue.png"
                                        alt="arrow" height="24" width="24" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>  
                    <td class="reorder-mid ">
                      <table style="border: 1px solid #CCCCCB;border-radius: 16px;border-collapse: separate;border-spacing: 0;display: inline-block; height: 100%; width: 324px;">
                        <tr>
                          <td style="line-height: 0; padding: 0;">
                            <img src=${props.imgUrl2} style="width: 100%;border-top-left-radius: 16px;border-top-right-radius: 16px; line-height: 0;" width="355" alt="Attenza" />
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 24px;vertical-align: top; text-align: left;">
                            <p style="font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 16px;margin: 0 0 8px;font-weight: 600;line-height: 24px;color: #333333;">
                              ${props.title2}
                            </p>
                            <p style="font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;margin: 0 !important; color: #666666;">
                              ${props.description2}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 24px 16px;">
                            <table cellspacing="0" cellpadding="0" style="width: auto">
                            <tbody>
                              <tr>
                                <td align="left" valign="middle" style="color: #0E68FF;font-size: 12px;vertical-align: middle;">
                                  <a href=${props.CTALink2} target="_blank" style="color: #0E68FF;text-decoration: none;font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-size: 14px;line-height: 20px;font-weight: 500;">
                                    <span>
                                      ${props.labelLink2}
                                    </span>
                                  </a>
                                </td>
                                <td width="24" height="24" align="center" valign="middle" style="vertical-align: middle;line-height: 0;">
                                  <a href=${props.CTALink2} target="_blank">
                                    <img src="https://www.copaair.com/webassets/images/icon-chevron-arrow-light-blue.png" alt="arrow" height="24" width="24" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>`
}

export { topicCardPairCSS, topicCardPairHTML}