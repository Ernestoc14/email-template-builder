import { AlertsProps } from "../types";

const AlertsInline = (props: AlertsProps) => {
  let htmlAlert = "";
  if (props.type === "changes") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  } else if (props.type === "error") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  } else if (props.type === "inverted") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  } else if (props.type === "main") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  } else if (props.type === "success") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  } else if (props.type === "transparent") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%;">
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
                    Flight canceled due to adverse weather conditions
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`;
  } else if (props.type === "warning") {
    htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
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
                            Flight canceled due to adverse weather conditions
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
        </table>`;
  }
  return <div dangerouslySetInnerHTML={{ __html: htmlAlert }} />;
};

export default AlertsInline;
