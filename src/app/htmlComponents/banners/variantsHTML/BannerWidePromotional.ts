import { BannersProps } from "../types";

const bannerWidePromotionalCSS = () => {
    return `<style type="text/css">
  .imgStopoverMobile {
    display: none;
  }
  @media all and (max-width: 719px) {
    .stopoverImg {
    display: inline-block;
    width: 100% !important;
    height: 100%;
    }
    .imgStopoverDesktop {
      display: none;
    }
    .imgStopoverMobile {
      display: block !important;
      width: 100%;
  }

  .stopover-table {
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
}
      .stopoverDesc {
				display: inline-block;
        padding: 6px 16px !important;
      }
      .eligiste-title {
		    padding: 24px 24px 0 !important;
        font-size: 14px !important;
        line-height: 18px;
      }
      .descubre-actividades {
        margin: 8px 24px 8px !important;
        padding-bottom: 10px !important;
      }
      .cta-stopover-mobile {
        padding: 0 24px 24px !important;
      }
      .book-info-div-padd-2 {
        margin: 0 !important;
        padding: 0 10px 0 0 !important;
        text-align: left !important;
      }
    }
  </style>
  <!-- Clases CSS -->
<!--[if mso]>
    <style type="text/css">
      body, table, td, p, div, span {font-family: Arial, sans-serif !important;}
      .stopoverDesc {padding: 0 16px 0 24px !important;}
    </style>
<![endif]-->`
}

const bannerWidePromotionalHTML = (props: BannersProps) => {
    return `<table class="stopover-table" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0;border: 1px solid #E2E2E1;border-radius: 8px;background-color: #FFFFFF;border-collapse: separate;width: 100%;">
          <tbody>
            <tr>
              <td style="padding: 0;vertical-align: top;border-radius: 8px;" class="td-img-container">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                  <tbody>
                    <tr>
                      <th class="stopoverImg" style="border-top-left-radius: 8px;border-bottom-left-radius: 8px;width: 308px; line-height: 0;">
                        <img class="imgStopoverDesktop" src="https://www.copaair.com/webassets/images/stopover-panama-la-vieja.jpeg" alt="Stopover" height="159.5" style="height: 159.5;border-radius: 8px 0 0 8px">
                        <!--[if mso | IE]>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="287" style="width:287;display:none;">
                            <tr>
                              <td align="left" style="vertical-align:top;width:100%;text-align:left;display:none;">
                        <![endif]-->
                        <img class="imgStopoverMobile" src="https://www.copaair.com/webassets/images/Mobile-Stopover-ES.png" alt="Stopover" width="287">
                          <!--[if mso | IE]>
                              </td>
                            </tr>
                          </table>
                        <![endif]-->
                      </th>
                      <th class="stopoverDesc" style="vertical-align: middle; font-size: 16px; color:#0E68FF; line-height: 24px;padding: 0 20px 0 20px;border-top-right-radius: 8px;border-bottom-right-radius: 8px;text-align: left;">
                        <h4 style="color: #0032A0;font-size: 16px;margin: 0 0 4px 0" class="eligiste-title">${props.title}</h4>
                        <p style="font-size: 12px; margin: 0 0 8px 0;color: #0032A0;line-height: 16px;font-weight: normal;" class="descubre-actividades">${props.description}</p>

                          <!-- Boton -->
                          <table  border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" class="outlook-stopover-top-margin">
                            <tr>
                              <td style="padding: 0;" class="cta-stopover-mobile">
                                <div class="book-info-div-padd-2" style="text-align: left;">
                                  <!--[if mso | IE]>
                                  <table bgcolor="#ffffff;" align="left" border="0" cellpadding="0" cellspacing="0" style="width:100%;background: #ffffff;" width="180">
                                      <tr>
                                        <td align="left" bgcolor="#ffffff;" class="btn-td" style="background: #ffffff;text-align:center;font-size: 12px;color: #0032A0;line-height: 1.2;font-weight: 600; padding-bottom: 2px;">
                                  <![endif]-->
                                  <a class="btn-blue" href="https://www.stopoverinpanama.com/#anchor_itinerary" style="border: 1px solid #0032A0; display: inline-block;color: #0032A0;background-color: transparent;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 8px 0;font-size: 12px;line-height: 1.2;width: 100%;font-weight: 600;background: #ffffff;">${props.buttonLabel}</a>
                                  <!--[if mso | IE]>
                                        </td>
                                      </tr>
                                  </table>
                                  <![endif]-->
                                </div>
                              </td>
                            </tr>
                          </table>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
    `
}

export { bannerWidePromotionalHTML, bannerWidePromotionalCSS}