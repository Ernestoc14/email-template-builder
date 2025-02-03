
const Headers = (variant: string) => {
  let renderHTML, previewHTML = "";
  if (variant === "Copa y ConnectMiles") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height:40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                  alt="Copa Logo" class="copa-logo-width" width="176">
              </td>
              <td style="width: 50%;" align="right">
                <img height="auto" src="https://www.copaair.com/assets/connectMilesLogo.png"
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
        </table>
    `;
    previewHTML = `<table align="center" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #0032A0;border-collapse: collapse;border-top-left-radius: 8px;border-top-right-radius: 8px; ">
    <tr>
      <td style=" font-size: 14px; padding: 32px 32px 0 32px" class="header-logo-padding">
        <!-- Start Header Cmp -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height:40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                  style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                  alt="Copa Logo" class="copa-logo-width" width="176">
              </td>
              <td style="width: 50%;" align="right">
                <img height="auto" src="https://www.copaair.com/assets/connectMilesLogo.png"
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
        </table>
        <!-- End Header Cmp -->
      </td>
    </tr>
  </table>`;
  } else if (variant === "Reservation Code") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height: 40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
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
                      EBXGHT
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
        </table>`;
    previewHTML = `<table align="center" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #0032A0;border-collapse: collapse;border-top-left-radius: 8px;border-top-right-radius: 8px; ">
    <tr>
      <td style=" font-size: 14px; padding: 32px 32px 0 32px" class="logo-header-padding">
        <!-- Start Header Cmp -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 50%; height: 40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
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
                      EBXGHT
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
        </table>
        <!-- End Header Cmp -->
      </td>
    </tr>
  </table>`;
  } else if (variant === "Copa Logo") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 100%; height:40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
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
    previewHTML = `<table align="center" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #0032A0;border-collapse: collapse;border-top-left-radius: 8px;border-top-right-radius: 8px; ">
    <tr>
      <td style=" font-size: 14px; padding: 32px 32px 0 32px" class="header-logo-padding">
        <!-- Start Header Cmp -->
        <!-- Copy this code into Master Container -->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
          <tbody>
            <tr>
              <td style="width: 100%; height:40px;">
                <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
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
        </table>
        <!-- End Header Cmp -->
      </td>
    </tr>
  </table>`;
  }
  return {renderHTML, previewHTML};
};

export default Headers;
