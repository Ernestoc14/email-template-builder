import { ButtonsProps } from "./types";

const Buttons = (props: ButtonsProps) => {
  const ButtonCmp = (props: ButtonsProps) => {
    let lightButtonCmp, linkButtonCmp, mainButtonCmp, outlineButtonCmp = "";
    switch (props.variant) {
      case "light":
        lightButtonCmp = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0E68FF">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="https://mytrips.copaair.com" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0E68FF;">
                    ${props.label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        return lightButtonCmp;

      case "link":
        linkButtonCmp = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #ffffff;">
            <tr>
              <td align="right" style="width: 50%;">
                <!-- <p style="text-align: left; margin: 0; color: #0032a0; font-size: 12px; display: table;"> -->
                  <a href="https://mytrips.copaair.com/" target="_blank"
                    style="border: none; display: inline-block;color: #0032a0;text-decoration: none; margin: 0;text-align: center; font-size: 14px;line-height: 20px;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;">
                    ${props.label}
                  </a>
                <!-- </p> -->
              </td>
              <td style="width: 50%;">
                <a href="https://mytrips.copaair.com/" target="_blank" style="display: block; height: 24px">
                  <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow"/>
                </a>
              </td>
            </tr>
          </table>`
        return linkButtonCmp;

      case "main":
        mainButtonCmp = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #FFFFFF;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="false" fillcolor="#0032A0">
                    <w:anchorlock/>
                    <center style="">
                <![endif]-->
                <a class="btn-blue" href="https://mytrips.copaair.com" 
                    style="border: none; display: inline-block;color: #ffffff;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 15px 0;font-size: 14px;line-height: 20px;width: 100%;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;background-color: #0032A0;">
                    ${props.label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        return mainButtonCmp;

      case "outline":
        outlineButtonCmp = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; color: #ffffff;">
          <tr>
            <td>
                <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:40px;v-text-anchor:middle;width:730px;" arcsize="50%" stroke="true" strokecolor="#0032A0" fillcolor="none">
                    <w:anchorlock/>
                    <center>
                <![endif]-->
                <a class="btn-blue" href="https://mytrips.copaair.com" 
                    style="mso-border-alt: none; display: inline-block;color: #0032A0; border: 1px solid #0032A0; text-decoration: none; border-radius: 40px; margin: 0; text-align: center; padding: 15px 0;font-size: 14px;line-height: 20px; width: 100%; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 600; background-color: transparent;">
                    ${props.label}
                </a>
                <!--[if mso]>
                    </center>
                    </v:roundrect>
                <![endif]-->
            </td>
          </tr>
        </table>`
        return outlineButtonCmp;

      default:
        return "No variant selected";

    }
  };
  return ButtonCmp(props);
};

export default Buttons;
