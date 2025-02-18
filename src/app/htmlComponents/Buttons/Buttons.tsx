import { ObjectComponents } from "@/app/types/Components";

const Buttons = (variant: string, language: string) => {
    let renderHTML, previewHTML = "";
    if (variant === "Light") {
      renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0E68FF">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0E68FF;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #ffffff; border-collapse: collapse;">
    <tr>
      <td align="center" class="mobile-padding" style="padding: 24px 32px; font-size: 14px;">
        <!-- Inicia Button Cmp -->
        <!-- Copy this code into Master Container -->
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0E68FF">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0E68FF;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>
        <!-- Finaliza Button Cmp -->
      </td>
    </tr>
  </table>`
    } else if(variant === "Link") {
        renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #ffffff;">
            <tr>
              <td align="right" style="width: 50%;">
                <!-- <p style="text-align: left; margin: 0; color: #0032a0; font-size: 12px; display: table;"> -->
                  <a href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" target="_blank"
                    style="border: none; display: inline-block;color: #0032a0;text-decoration: none; margin: 0;text-align: center; font-size: 14px;line-height: 20px;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                  </a>
                <!-- </p> -->
              </td>
              <td style="width: 50%;">
                <a href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" target="_blank" style="display: block; height: 24px">
                  <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow"/>
                </a>
              </td>
            </tr>
          </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0" style=" margin: 0; width: 100%; background-color: #ffffff;border-collapse: collapse;">
      <tr>
        <td align="center" style="padding: 24px 32px; font-size: 14px;">
          <!-- Inicia Button Cmp -->
          <!-- Copy this code into Master Container -->
          <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #ffffff;">
            <tr>
              <td align="right" style="width: 50%;">
                <!-- <p style="text-align: left; margin: 0; color: #0032a0; font-size: 12px; display: table;"> -->
                  <a href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" target="_blank"
                    style="border: none; display: inline-block;color: #0032a0;text-decoration: none; margin: 0;text-align: center; font-size: 14px;line-height: 20px;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                  </a>
                <!-- </p> -->
              </td>
              <td style="width: 50%;">
                <a href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" target="_blank" style="display: block; height: 24px">
                  <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow"/>
                </a>
              </td>
            </tr>
          </table>
          <!-- Finaliza Button Cmp -->
        </td>
      </tr>
    </table>`
    } else if(variant === "Main") {
        renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0032A0">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0032A0;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #ffffff; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 20px; font-size: 14px;">
        <!-- Inicia Button Cmp -->
        <!-- Copy this code into Master Container -->
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0032A0">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0032A0;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>
        <!-- Finaliza Button Cmp -->
      </td>
    </tr>
  </table>`
    } else if(variant === "Outline") {
        renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #ffffff;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="true" strokecolor="#0032A0" fillcolor="none">
                    <w:anchorlock/>
                    <center>
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="mso-border-alt: none; display: inline-block;color: #0032A0; border: 1px solid #0032A0; text-decoration: none; border-radius: 40px; margin: 0; text-align: center; padding: 15px 0;font-size: 14px;line-height: 20px; width: 100%; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 600; background-color: transparent;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0; width: 100%; background-color: #FFFFFF; border-collapse: collapse;">
    <tr>
      <td align="center" class="mobile-padding" style="padding: 24px 32px; font-size: 14px;">
        <!-- Inicia Button Cmp -->
        <!-- Copy this code into Master Container -->
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #ffffff;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="true" strokecolor="#0032A0" fillcolor="none">
                    <w:anchorlock/>
                    <center>
                <![endif]-->
                <a class="btn-blue" href="${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].urlLink}" 
                    style="mso-border-alt: none; display: inline-block;color: #0032A0; border: 1px solid #0032A0; text-decoration: none; border-radius: 40px; margin: 0; text-align: center; padding: 15px 0;font-size: 14px;line-height: 20px; width: 100%; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 600; background-color: transparent;">
                    ${ObjectComponents.Components.Buttons.props[language as "ES" | "EN" | "PT" | "FR"].label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>
        <!-- Finaliza Button Cmp -->
      </td>
    </tr>
  </table>`
    }
  return {renderHTML, previewHTML};
};

export default Buttons;
