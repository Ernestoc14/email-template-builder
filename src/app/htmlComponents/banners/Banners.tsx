import { ObjectComponents } from "@/app/types/Components";

const Banners = (variant: string, language: string) => {
  let renderHTML, previewHTML = "";
  if(variant === "Banner with Image") {
    renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td style="line-height: 0; background-color:#FFFFFF; border-radius: 16px; border: 1px solid #DBDAD8;">
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <td class="block-mobile-item" style="padding: 24px 32px; mso-padding-alt: 0 32px;">
                    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
                      <tr>
                        <td style="color: #0032A0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;font-weight:700;">
                          ${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].title}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #666666;">
                          ${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].description}
                        </td>
                      </tr>
                      <tr>
                        <td class="apps-logo-mobile-padding" style="padding-top: 16px;">
                          <table class="mobile-table-center" style="border-collapse: collapse;">
                            <tr>
                              <td style="width: 87px; padding-right: 16px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].appGalleryLink}}"
                                  target="_blank" style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/app-store-2X.png"
                                    alt="Apple Store" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                              <td style="width: 87px; padding-right: 16px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].appGalleryLink}}"
                                  target="_blank" style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/play-store-2X.png"
                                    alt="Google Play" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                              <td style="width: 87px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].appGalleryLink}}" target="_blank"
                                  style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/app-gallery-2X.png"
                                    alt="AppGallery" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="block-mobile-item phone-image-mobile-padding" valign="bottom" align="center"
                    style="vertical-align:bottom;padding:0;padding-right: 19px;">
                    <img
                      src="https://www.copaair.com/webassets/images/notifications/gate-banner-phone-mobile-es.png"
                      style="width: 214px; height: 172px;" width="214" height="172" class="remove-image-mobile">
                    <!--[if !mso]><!-->
                    <img
                      src="https://www.copaair.com/webassets/images/notifications/gate-banner-phone-mobile-es.png"
                      style="display: none; " width="300" class="show-image-mobile">
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`
    previewHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
          <tr>
            <td style="line-height: 0; background-color:#FFFFFF; border-radius: 16px; border: 1px solid #DBDAD8;">
              <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                <tr>
                  <td class="block-mobile-item" style="padding: 24px 32px; mso-padding-alt: 0 32px;">
                    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
                      <tr>
                        <td style="color: #0032A0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;font-weight:700;">
                          ${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].title}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #666666;">
                          ${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].description}
                        </td>
                      </tr>
                      <tr>
                        <td class="apps-logo-mobile-padding" style="padding-top: 16px;">
                          <table class="mobile-table-center" style="border-collapse: collapse;">
                            <tr>
                              <td style="width: 87px; padding-right: 16px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].appStoreLink}"
                                  target="_blank" style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/app-store-2X.png"
                                    alt="Apple Store" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                              <td style="width: 87px; padding-right: 16px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].playStoreLink}"
                                  target="_blank" style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/play-store-2X.png"
                                    alt="Google Play" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                              <td style="width: 87px;">
                                <a href="${ObjectComponents.Components.Banners.props[language as "ES" | "EN" | "PT" | "FR"].appGalleryLink}" target="_blank"
                                  style="text-decoration: none;">
                                  <img src="https://www.copaair.com/assets/app-gallery-2X.png"
                                    alt="AppGallery" width="87" height="26"
                                    style="width: 87px;margin: 0;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;">
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td class="block-mobile-item phone-image-mobile-padding" valign="bottom" align="center"
                    style="vertical-align:bottom;padding:0;padding-right: 19px;">
                    <img
                      src="https://www.copaair.com/webassets/images/notifications/gate-banner-phone-mobile-es.png"
                      style="width: 214px; height: 172px;" width="214" height="172" class="remove-image-mobile">
                    <!--[if !mso]><!-->
                    <img
                      src="https://www.copaair.com/webassets/images/notifications/gate-banner-phone-mobile-es.png"
                      style="display: none; " width="300" class="show-image-mobile">
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`
  }
  return { renderHTML, previewHTML }
}

export default Banners;