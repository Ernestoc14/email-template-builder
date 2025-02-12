import { ObjectComponents } from "@/app/types/Components";

const Infobars = (variant: string) => {
  let renderHTML, previewHTML = "";
  if (variant === "Single Infobar") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
          <tr>
            <td class="reorder-mid">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                  <td class="reorder-mobile-table xsmall-reorder">
                    <table border="0" cellpadding="0" cellspacing="0" class="info-mobile-padding" style="width: 100%;" width="100%">
                      <tr>
                        <td style="padding-right: 16px;" class="destino-img-remove">
                          <!--[if mso]>
                              <v:oval xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="display:inline-block;text-decoration:none;color:#333333;border-radius:50%;width:56px;height:56px" strokecolor="#ffffff" strokeweight="1pt">
                              <v:fill color="#0032A0" />
                              </v:oval>
                          <![endif]-->
                          <!--[if mso]>
                            <v:rect stroked="f" filled="false" style="position:absolute; top:-3.1px; left:-8.3px; width:100%;">
                          <![endif]-->
                          <div class="no-border"
                            style="border: 1px solid #ffffff;width: 52px;height: 52px;border-radius: 50%;padding: 1px;margin: 0 auto;">
                            <!--Change the "JFK" below with the IAT Code of the destination in uppercase-->
                            <img src="${ObjectComponents.Components.Infobars.props.imageURL}"
                              width="52" height="52" border="0" alt="City IMG" style="border:0;">
                          </div>
                          <!--[if mso]>
                            </v:rect>
                          <![endif]-->
                        </td>
                        <td class="destino-mobile-padding">
                          <p
                            style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                            ${ObjectComponents.Components.Infobars.props.labelTextDestination}</p>
                          <p
                            style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 20px;font-style: normal;font-weight: 700;line-height: 32px;color: #ffffff;">
                            ${ObjectComponents.Components.Infobars.props.destination}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="infobar-divider-remove" style="padding: 0 32px; width: 1px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%"  style="width: 100%;">
                      <tr>
                        <td style="border-right: 1px solid #CCCCCB;width: 1px;height:24px;">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td class="reorder-mobile-table">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                  <td class="xsmall-reorder mid-right-spacing date-mobile-padding">
                    <p
                      style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.labelTextDate}</p>
                    <p
                      style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;white-space:nowrap">
                      ${ObjectComponents.Components.Infobars.props.date}</p>
                  </td>
                  <td style="padding: 0 32px; width: 1px;" class="infobar-divider-remove">
                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                      <tr>
                        <td style="border-right: 1px solid #CCCCCB;width:1px; height:24px;">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="xsmall-reorder">
                    <p
                      style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.labelTextReservationCode}</p>
                    <p
                      style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.reservationCode}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`;
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: blue; border-collapse: collapse;">
    <tr>
      <td style="font-size: 14px; padding: 32px 48px">
        <!-- Start Infobar Cmp-->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
          <tr>
            <td class="reorder-mid">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                  <td class="reorder-mobile-table xsmall-reorder">
                    <table border="0" cellpadding="0" cellspacing="0" class="info-mobile-padding" style="width: 100%;" width="100%">
                      <tr>
                        <td style="padding-right: 16px;" class="destino-img-remove">
                          <!--[if mso]>
                              <v:oval xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="display:inline-block;text-decoration:none;color:#333333;border-radius:50%;width:56px;height:56px" strokecolor="#ffffff" strokeweight="1pt">
                              <v:fill color="#0032A0" />
                              </v:oval>
                          <![endif]-->
                          <!--[if mso]>
                            <v:rect stroked="f" filled="false" style="position:absolute; top:-3.1px; left:-8.3px; width:100%;">
                          <![endif]-->
                          <div class="no-border"
                            style="border: 1px solid #ffffff;width: 52px;height: 52px;border-radius: 50%;padding: 1px;margin: 0 auto;">
                            <!--Change the "JFK" below with the IAT Code of the destination in uppercase-->
                            <img src="${ObjectComponents.Components.Infobars.props.imageURL}"
                              width="52" height="52" border="0" alt="City IMG" style="border:0;">
                          </div>
                          <!--[if mso]>
                            </v:rect>
                          <![endif]-->
                        </td>
                        <td class="destino-mobile-padding">
                          <p
                            style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                            ${ObjectComponents.Components.Infobars.props.labelTextDestination}</p>
                          <p
                            style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 20px;font-style: normal;font-weight: 700;line-height: 32px;color: #ffffff;">
                            ${ObjectComponents.Components.Infobars.props.destination}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="infobar-divider-remove" style="padding: 0 32px; width: 1px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%"  style="width: 100%;">
                      <tr>
                        <td style="border-right: 1px solid #CCCCCB;width: 1px;height:24px;">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td class="reorder-mobile-table">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                  <td class="xsmall-reorder mid-right-spacing date-mobile-padding">
                    <p
                      style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.labelTextDate}</p>
                    <p
                      style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;white-space:nowrap">
                      ${ObjectComponents.Components.Infobars.props.date}</p>
                  </td>
                  <td style="padding: 0 32px; width: 1px;" class="infobar-divider-remove">
                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                      <tr>
                        <td style="border-right: 1px solid #CCCCCB;width:1px; height:24px;">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="xsmall-reorder">
                    <p
                      style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.labelTextReservationCode}</p>
                    <p
                      style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;">
                      ${ObjectComponents.Components.Infobars.props.reservationCode}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <!-- End InfoBar Cmp -->
      </td>
    </tr>
  </table>`;
  }
  return { renderHTML, previewHTML };
};

export default Infobars;
