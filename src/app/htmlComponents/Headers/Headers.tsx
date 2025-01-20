import { HeadersProps } from "./types";

const Headers = (props: HeadersProps) => {
  const HeaderCmp = (props: HeadersProps) => {
    let bothLogoHeaderCmp, reservationCodeHeaderCmp, singleLogoHeaderCmp = ""

    if(props.variant === "copaBothLogo") {
      bothLogoHeaderCmp = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height:40px;">
                <img height="auto" src="${props.copaLogoURL}"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                  alt="Copa Logo" class="copa-logo-width" width="176">
              </td>
              <td style="width: 50%;" align="right">
                <img height="auto" src="${props.aditionalLogoURL}"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 159px;height: auto;line-height: 100%; padding-bottom: 8px;"
                  alt="ConnectMiles Logo" class="connectmiles-logo-width" width="159">
              </td>
            </tr>
            <tr>
              <td colspan="2" class="divider-mobile-spacing"
                  style="border-bottom: 1px solid #cccccb; padding-top: 22px; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
                  &nbsp;
              </td>
            </tr>
          </tbody>
        </table>`
      return bothLogoHeaderCmp
    } else if(props.variant === "reservationCode") {
      reservationCodeHeaderCmp = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height: 40px;">
                <img height="auto" src="${props.copaLogoURL}"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                  alt="Copa Logo" class="copa-logo-width" width="176">
              </td>
              <td align="right" style="width: 50%; color: #ffffff; margin: 0;">
                <table border="0" cellpadding="0" cellspacing="0" align="right">
                  <tr>
                    <td align="right"
                      style="font-size: 14px; line-height: 20px; font-style: normal; font-weight: 400; white-space: nowrap;">
                      Código de reserva:
                    </td>
                  </tr>
                  <tr>
                    <td align="right"
                      style="font-size: 16px; line-height: 20px; font-style: normal; font-weight: 600; font-family: Gilroy, Arial, Helvetica, sans-serif; ">
                      ${props.reservationCode}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="divider-mobile-spacing"
                  style="border-bottom: 1px solid #cccccb; padding-top: 22px; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
                  &nbsp;
              </td>
            </tr>
          </tbody>
        </table>`
      return reservationCodeHeaderCmp
    } else if(props.variant === "copaSingleLogo") {
      singleLogoHeaderCmp = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 100%; height:40px;">
                <img height="auto" src="${props.copaLogoURL}"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                  alt="Copa Logo" class="copa-logo-width" width="176">
              </td>
            </tr>
            <tr>
              <td class="divider-mobile-spacing"
                  style="border-bottom: 1px solid #cccccb; padding-top: 22px; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
                  &nbsp;
              </td>
            </tr>
          </tbody>
        </table>`
      return singleLogoHeaderCmp
    }
  }
  return HeaderCmp(props)
}

export default Headers;