import { PaxCardsProps } from "./types";

const PaxCards = (props: PaxCardsProps) => {
    let htmlPaxCard = ""
    if (props.variant === "simple") {
      htmlPaxCard = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td class="pax-card-pair" style="text-align: left;">
                    <table cellpadding="0" cellspacing="0" border="0"
                      style="width: 100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate">
                      <tr>
                        <td style="padding: 24px;" class="outlook-reset-padding">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="padding: 0 16px 0 0; width: 58px;height: 58px;vertical-align: top;" width="58"
                                height="58" class="outlook-status-td">
                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;border-collapse:separate"
                                  class="outlook-status-td">
                                  <tr>
                                    <!--  IMPRIMIR LA SIGUIENTE CLASE DE ACUERDO AL
                                          STATUS DEL PASAJERO:
                                          1. Infant, Interlínea, Sin Status 
                                                  "status-line-without-status"
                                          2. Member
                                                  "status-line-member-status"
                                          3. Silver
                                                  "status-line-silver-status"
                                          4. Gold
                                                  "status-line-gold-status"
                                          5. Platinum
                                                  "status-line-platinum-status"
                                          6. Presidential
                                                  "status-line-presidential-status"
                                    -->
                                    <td class="status-line-presidential-status" width="56" height="56"
                                      style="border-radius: 50%;width: 56px;height: 56px;min-width: 56px;"
                                      class="outlook-status-td">
                                      <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                        <tr>
                                      <!--IMPRIMIR CUANDO ES PRESIDENTIAL-->
                                      <!--[if mso]>
                                      <td>
                                      <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#121212;"></v:oval>
                                      <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                        <v:fill color="#121212;" />
                                        <v:textbox inset="0,0,0,0">
                                          <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                        </v:textbox>
                                        </v:oval>
                                      </td>
                                      <![endif]-->
                                      <!--   IMPRIMIR LAS SIGUIENTES CLASES DE ACUERDO AL
                                              STATUS DEL PASAJERO:
                                                1. Infant, Interlínea, Sin Status 
                                                        "status-bg-without-status",
                                                        "status-color-without-status",
                                                2. Member
                                                        "status-bg-member-status",
                                                        "status-color-all-status",
                                                3. Silver
                                                        "status-bg-silver-status",
                                                        "status-color-all-status",
                                                4. Gold
                                                        "status-bg-gold-status",
                                                        "status-color-all-status"
                                                5. Platinum
                                                        "status-bg-platinum-status",
                                                        "status-color-all-status"
                                                6. Presidential
                                                        "status-bg-presidential-status",
                                                        "status-color-all-status"
                                      -->
                                          <td width="52" height="52"
                                            style="border-radius: 50%;text-align: center;font-size: 16px;font-style: normal;font-weight: 600;line-height: 20px;min-width: 52px;"
                                            class="status-bg-presidential-status outlook-status-td">
                                            <span class="outlook-status-td status-color-all-status">
                                              KA
                                            </span>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="outlook-flight-details">
                                <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 14px; line-height: 20px; color: #333333; padding-bottom: 4px;">
                                      ${props.paxName}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ${props.lealtad}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ${props.seats}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style="display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                    ${props.status}
                                  </td>
                                </tr>
                              </table>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`
    } else {
      htmlPaxCard = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td class="pax-card-pair" style="text-align: left;">
                    <table cellpadding="0" cellspacing="0" border="0"
                      style="width: 100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate">
                      <tr>
                        <td style="padding: 24px;" class="outlook-reset-padding">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="padding: 0 16px 0 0; width: 58px;height: 58px;vertical-align: top;" width="58"
                                height="58" class="outlook-status-td">
                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;border-collapse:separate"
                                  class="outlook-status-td">
                                  <tr>
                                    <!--  IMPRIMIR LA SIGUIENTE CLASE DE ACUERDO AL
                                          STATUS DEL PASAJERO:
                                          1. Infant, Interlínea, Sin Status 
                                                  "status-line-without-status"
                                          2. Member
                                                  "status-line-member-status"
                                          3. Silver
                                                  "status-line-silver-status"
                                          4. Gold
                                                  "status-line-gold-status"
                                          5. Platinum
                                                  "status-line-platinum-status"
                                          6. Presidential
                                                  "status-line-presidential-status"
                                    -->
                                    <td class="status-line-presidential-status" width="56" height="56"
                                      style="border-radius: 50%;width: 56px;height: 56px;min-width: 56px;"
                                      class="outlook-status-td">
                                      <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                        <tr>
                                      <!--IMPRIMIR CUANDO ES PRESIDENTIAL-->
                                      <!--[if mso]>
                                      <td>
                                      <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#121212;"></v:oval>
                                      <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                        <v:fill color="#121212;" />
                                        <v:textbox inset="0,0,0,0">
                                          <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                        </v:textbox>
                                        </v:oval>
                                      </td>
                                      <![endif]-->
                                      <!--   IMPRIMIR LAS SIGUIENTES CLASES DE ACUERDO AL
                                              STATUS DEL PASAJERO:
                                                1. Infant, Interlínea, Sin Status 
                                                        "status-bg-without-status",
                                                        "status-color-without-status",
                                                2. Member
                                                        "status-bg-member-status",
                                                        "status-color-all-status",
                                                3. Silver
                                                        "status-bg-silver-status",
                                                        "status-color-all-status",
                                                4. Gold
                                                        "status-bg-gold-status",
                                                        "status-color-all-status"
                                                5. Platinum
                                                        "status-bg-platinum-status",
                                                        "status-color-all-status"
                                                6. Presidential
                                                        "status-bg-presidential-status",
                                                        "status-color-all-status"
                                      -->
                                          <td width="52" height="52"
                                            style="border-radius: 50%;text-align: center;font-size: 16px;font-style: normal;font-weight: 600;line-height: 20px;min-width: 52px;"
                                            class="status-bg-presidential-status outlook-status-td">
                                            <span class="outlook-status-td status-color-all-status">
                                              KA
                                            </span>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="outlook-flight-details">
                                <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 14px; line-height: 20px; color: #333333; padding-bottom: 4px;">
                                      ${props.paxName}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ${props.lealtad}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ${props.seats}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style="display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                    ${props.status}
                                  </td>
                                </tr>
                              </table>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`
    }
  return <div dangerouslySetInnerHTML={{ __html: htmlPaxCard }} />;
}

export default PaxCards