import { ObjectComponents } from "@/app/types/Components";

const Alerts = (variant: string, language: string) => {
  let renderHTML, previewHTML = "";
  if (variant === "Content Error") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso"
              style="mso-border-alt: none; padding: 16px; background-color:#FFEFEF; border-radius: 4px; border: 1px solid #D52525;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#D52525"fillcolor="#FFEFEF">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_high.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #d5d5d5; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso"
              style="mso-border-alt: none; padding: 16px; background-color:#FFEFEF; border-radius: 4px; border: 1px solid #D52525;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#D52525"fillcolor="#FFEFEF">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_high.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if( variant === "Content Info") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso"
              style="mso-border-alt: none; padding: 16px; background-color:#EFF5FF; border-radius: 4px; border: 1px solid #9FC3FF;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#9FC3FF"fillcolor="#EFF5FF">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/images/icon-alert-blue-rounded.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #d5d5d5; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso"
              style="mso-border-alt: none; padding: 16px; background-color:#EFF5FF; border-radius: 4px; border: 1px solid #9FC3FF;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#9FC3FF"fillcolor="#EFF5FF">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/images/icon-alert-blue-rounded.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`  
  } else if (variant === "Content Invert") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 16px; background-color:#001A66; border-radius: 4px; border: 1px solid #001A66;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#001A66"fillcolor="#001A66">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_inverted.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #FFFFFF; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #d5d5d5; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 16px; background-color:#001A66; border-radius: 4px; border: 1px solid #001A66;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#001A66"fillcolor="#001A66">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_inverted.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #FFFFFF; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Content Warning") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 16px; background-color:#FFF4D5; border-radius: 4px; border: 1px solid #FFC82C;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#FFC82C"fillcolor="#FFF4D5">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/images/icon-alert-yellow-rounded.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #d5d5d5; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 16px; background-color:#FFF4D5; border-radius: 4px; border: 1px solid #FFC82C;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:76px;v-text-anchor:middle;" 
                  arcsize="4%" stroked="true" strokecolor="#FFC82C"fillcolor="#FFF4D5">
                <w:anchorlock/>
								<v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
								<center style="mso-line-height-rule:exactly; v-text-anchor:middle;">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <!--[if mso]>
                    <td style="padding: 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                    <img src="https://www.copaair.com/webassets/images/icon-alert-yellow-rounded.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                    <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                </tr>
              </table>
              <!--[if mso]>
							</center>
							</v:textbox>
              </v:roundrect>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Changes") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color:#B15C37; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#B15C37">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color:#B15C37; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#B15C37">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Error") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #D52525; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#D52525">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #D52525; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#D52525">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Inverted") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #0E68FF; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#0E68FF">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #0E68FF; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#0E68FF">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Main") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #001A66; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#001A66">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #001A66; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#001A66">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/assets/info-circle-white.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Success") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #0C7E3E; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#0C7E3E">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/webassets/icons/alerts/inline_success.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #0C7E3E; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#0C7E3E">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/webassets/icons/alerts/inline_success.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Transparent") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%;">
          <tr>
            <td style="padding: 8px 16px 8px 0; background-color: transparent; border-radius: 4px">
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px">
                    <img src="https://www.copaair.com/assets/inner-alert-blue-icon.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #4d4d4f; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%;">
          <tr>
            <td style="padding: 8px 16px 8px 0; background-color: transparent; border-radius: 4px">
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px">
                    <img src="https://www.copaair.com/assets/inner-alert-blue-icon.png"
                      style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                      width="20" alt="information">
                  </td>
                  <td style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                    ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Inline Warning") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #FFC82C; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#FFC82C">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/webassets/icons/alerts/inline_warning.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>`
    previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #0032A0; border-collapse: collapse;">
    <tr>
      <td style="padding: 15px 30px;">
        <!-- Start Alert Component -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
          <tr>
            <td class="remove-styles-mso" style="mso-border-alt: none; padding: 8px 16px; background-color: #FFC82C; border-radius: 4px">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
                  xmlns:w="urn:schemas-microsoft-com:office:word" style="width:792px;height:40px;v-text-anchor:middle;" 
                  arcsize="10%" stroked="false" fillcolor="#FFC82C">
                <w:anchorlock/>
                <v:textbox inset="0,0,0,0" style="v-text-anchor:middle;">
                <center style="mso-line-height-rule:exactly;v-text-anchor:middle;">
              <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                  <tr>
                    <!--[if mso]>
                    <td style="padding: 8px 16px;">
                      <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                        <tr>
                    <![endif]-->
                          <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                            <img src="https://www.copaair.com/webassets/icons/alerts/inline_warning.png"
                              style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                              width="20" alt="information">
                          </td>
                          <td
                            style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                            ${ObjectComponents.Components.Alerts.props[language as "ES" | "EN" | "PT" | "FR"].alertText}
                          </td>
                        <!--[if mso]>
                        </tr>
                      </table>
                    </td>
                    <![endif]-->
                  </tr>
                </table>
              <!--[if mso]>
                </center>
                :textbox>
                </v:roundrect>              
              <![endif]-->
            </td>
          </tr>
        </table>
        <!-- End Alert Component -->
      </td>
    </tr>
  </table>`
  }
  return { renderHTML, previewHTML };
}

export default Alerts;
