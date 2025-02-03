
const Footers = (variant: string) => {
    let renderHTML, previewHTML;
    if(variant === "Social"){
      renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        <td>
                          <a href="https://twitter.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/twitter-x.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.facebook.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/facebook.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.instagram.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/instagram.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.youtube.com/copaairlines" style="display: block; height: 32px;"> 
                            <img src="https://www.copaair.com/assets/youtube.png"> 
                          </a>
                        </td>
                        <td>
                          <a href="https://www.tiktok.com/@copaairlines" style="display: block; height: 32px;"> 
                            <img src="https://www.copaair.com/assets/tiktok.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://linkedin.com/company/copa-airlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/linkedin.png">
                          </a>
                        </td>
                      </tr>
                  </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 8px;">
                    Este mensaje ha sido enviado a la dirección proporcionada a Copa Airlines para informarle sobre el estado de su solicitud.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 16px;">
                    Por favor no responder a este correo. Revise nuestras 
                    <a style="color: #666666; font-weight: 600; text-decoration: underline !important;" 
                      href="https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy" target="_blank">
                      <span style=" white-space: nowrap;">Políticas de Privacidad.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">  
                    <a href="https://www.staralliance.com/en/" target="_blank">
                      <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168">
                    </a>
                  </td>
                </tr>
              </table>`
      previewHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <!-- Start Footer Cmp -->
            <!--  Copy this code into Master Container-->
            <td style="padding: 32px 56px; background-color: #EFEFEF; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;" class="socialsFooter-mobile-padding">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        <td>
                          <a href="https://twitter.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/twitter-x.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.facebook.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/facebook.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.instagram.com/copaairlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/instagram.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://www.youtube.com/copaairlines" style="display: block; height: 32px;"> 
                            <img src="https://www.copaair.com/assets/youtube.png"> 
                          </a>
                        </td>
                        <td>
                          <a href="https://www.tiktok.com/@copaairlines" style="display: block; height: 32px;"> 
                            <img src="https://www.copaair.com/assets/tiktok.png">
                          </a>
                        </td>
                        <td>
                          <a href="https://linkedin.com/company/copa-airlines" style="display: block; height: 32px;">
                            <img src="https://www.copaair.com/assets/linkedin.png">
                          </a>
                        </td>
                      </tr>
                  </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 8px;">
                    Este mensaje ha sido enviado a la dirección proporcionada a Copa Airlines para informarle sobre el estado de su solicitud.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 16px;">
                    Por favor no responder a este correo. Revise nuestras 
                    <a style="color: #666666; font-weight: 600; text-decoration: underline !important;" 
                      href="https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy" target="_blank">
                      <span style=" white-space: nowrap;">Políticas de Privacidad.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">  
                    <a href="https://www.staralliance.com/en/" target="_blank">
                      <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168">
                    </a>
                  </td>
                </tr>
              </table>
              <!-- Finaliza Footer Cmp-->
            </td>
          </tr>
        </table>`
    } else if(variant === "Traditional") {
      renderHTML = `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td align="center"
                    style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 8px;">
                    Por favor no responder a este mensaje. Para mayor asistencia contacte a nuestro
                    <a style="color: #666666;font-weight:600;text-decoration:underline!important;"
                      href="https://www.copaair.com/en-gs/customer-service/call-center/" target="_blank">
                      <span style="white-space: nowrap;">Centro de Llamadas.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center"
                    style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 16px;">
                    Vea nuestra
                    <a style="color: #666666;font-weight:600;text-decoration:underline!important"
                      href="https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy/" target="_blank">
                      <span>Politica de Privacidad.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://www.staralliance.com/en/" target="_blank">
                      <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168">
                    </a>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <!-- Start Footer Cmp -->
            <!--  Copy this code into Master Container-->
            <td style="padding: 32px 56px; background-color: #EFEFEF; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;" class="transaccionalFooter-mobile-padding">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td align="center"
                    style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 8px;">
                    Por favor no responder a este mensaje. Para mayor asistencia contacte a nuestro
                    <a style="color: #666666;font-weight:600;text-decoration:underline!important;"
                      href="https://www.copaair.com/en-gs/customer-service/call-center/" target="_blank">
                      <span style="white-space: nowrap;">Centro de Llamadas.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center"
                    style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 16px;">
                    Vea nuestra
                    <a style="color: #666666;font-weight:600;text-decoration:underline!important"
                      href="https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy/" target="_blank">
                      <span>Politica de Privacidad.</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://www.staralliance.com/en/" target="_blank">
                      <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168">
                    </a>
                  </td>
                </tr>
              </table>
              <!-- Finaliza Footer Cmp-->
            </td>
          </tr>
        </table>`;
    }
  return { renderHTML, previewHTML };
}

export default Footers