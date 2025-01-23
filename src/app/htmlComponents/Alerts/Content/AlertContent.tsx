import { AlertsProps } from "../types";

const AlertContent = (props: AlertsProps) => {
    let htmlAlert = "";
    if (props.type === "error") {
        htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
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
                    Estamos teniendo inconvenientes con nuestras líneas telefónicas para Nicaragua, Perú y Bolivia. Estamos trabajando para recuperar el servicio.
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
        </table>`;
    } else if(props.type === "info") {
        htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
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
                    Estamos teniendo inconvenientes con nuestras líneas telefónicas para Nicaragua, Perú y Bolivia. Estamos trabajando para recuperar el servicio.
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
    } else if(props.type === "invert") {
        htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
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
                    Estamos teniendo inconvenientes con nuestras líneas telefónicas para Nicaragua, Perú y Bolivia. Estamos trabajando para recuperar el servicio.
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
    } else if(props.type === "warning") {
        htmlAlert = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
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
                    Estamos teniendo inconvenientes con nuestras líneas telefónicas para Nicaragua, Perú y Bolivia. Estamos trabajando para recuperar el servicio.
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
    }
  return <div dangerouslySetInnerHTML={{ __html: htmlAlert }} />;
};

export default AlertContent;
