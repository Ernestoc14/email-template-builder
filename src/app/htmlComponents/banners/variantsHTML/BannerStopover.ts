import { BannersProps } from "../types";

const bannerStopoverCSS = () => {
  return `<style type="text/css">
    @media all and (max-width: 719px) {
      .stopover-img-container {
        display: block !important;
        width: 100% !important;
        border-top-left-radius: 8px !important;
        border-top-right-radius: 8px !important;
        border-bottom-left-radius: 0 !important;
      }
      .stopover-img-mobile {
        width: 160px;
        display: inline-block !important;
      }
      .imageStopoverDesktop {
        display: none;
      }
      .stopoverDesc {
				display: inline-block;
			}
      .eligiste-title {
		    padding: 24px 24px 0 !important;
        font-size: 14px !important;
        line-height: 18px;
      }
      .stopoverDesc {
        padding: 6px 16px !important;
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
      .btn-blue {
        height: 20px !important;
        background-color: #0E68FF;
        font-family: Arial, sans-serif !important;
      }
    </style>
<![endif]-->`
}

const bannerStopoverHTML = (props: BannersProps) => {
  return `<table width="672" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0;border: 1px solid #E2E2E1;border-radius: 8px;background-color: #FFFFFF;border-collapse: separate;width: 100%;">
          <tbody>
            <tr>
                <td style="padding: 0;vertical-align: top;border-radius: 8px;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                    <tbody>
                        <tr>
                          <th align="center" class="stopover-img-container" style="padding: 16px 0; width: 317px; text-align: center !important; vertical-align: middle; background-color: #EFF5FF; border-bottom-left-radius: 8px; border-top-left-radius: 8px;">
                            <!--[if mso]>
                              <img src="https://www.copaair.com/webassets/images/stopover/stopover-stamp-blue-es.png" style="width: 146px; padding: 0 77px !important;" width="146" alt="Stopover">
                            <![endif]-->
                            <!--[if !mso]><!-->
                            <img class="imageStopoverDesktop" src="https://www.copaair.com/webassets/images/stopover/stopover-stamp-blue-es.png" style="border-radius: 8px 0 0 8px;width: 146px" width="146" alt="Stopover">
                            <img class="stopover-img-mobile" src="https://www.copaair.com/webassets/images/stopover/stopover-stamp-blue-es.png" alt="Stopover" style="display: none; border-radius: 16px 16px 0 0;" width="315">
                            <!--<![endif]-->
                          </th>
                        <th class="stopoverDesc" style="vertical-align: middle; font-size: 16px; color:#0E68FF; line-height: 24px;padding: 0 24px 0 24px;border-top-right-radius: 8px;border-bottom-right-radius: 8px;text-align: left;">
                          <h4 style="color: #0032A0;font-size: 16px;margin: 0 0 4px 0" class="eligiste-title">${props.title}</h4>
                          <p style="font-size: 12px; margin: 0 0 8px 0;color: #0032A0;line-height: 16px;font-weight: normal;" class="descubre-actividades">Descubre ofertas exclusivas  en hoteles, restaurantes, atracciones y convierte tu estadía en una experiencia única.</p>

                            <!-- Boton -->
                            <table  border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td style="padding: 0;" class="cta-stopover-mobile">
                                  <div class="book-info-div-padd-2" style="text-align: left;">
                                    <!--[if mso | IE]>
                                    <table bgcolor="#ffffff;" align="left" border="0" cellpadding="0" cellspacing="0" style="width:100%;background: #ffffff;" width="180">
                                        <tr>
                                          <td align="left" bgcolor="#ffffff;" class="btn-td" style="background: #ffffff;text-align:center;font-size: 12px;color: #0032A0;line-height: 1.2;font-weight: 600; padding-bottom: 2px;">
                                    <![endif]-->
                                    <a class="btn-blue" href="https://www.stopoverinpanama.com/#anchor_itinerary" style="border: 1px solid #0032A0; display: inline-block;color: #0032A0;background-color: transparent;text-decoration: none;border-radius: 40px;margin: 0;text-align: center;padding: 8px 0;font-size: 12px;line-height: 1.2;width: 100%;font-weight: 600;background: #ffffff;">Conoce las ofertas </a>
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
        </table>`
}

export { bannerStopoverCSS, bannerStopoverHTML };