
const PaxCards = (variant: string) => {
    let renderHTML, previewHTML = ""
    if(variant === "Simple Pax") {
      renderHTML = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
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
                                      Katia Selena Vega Rios
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      Sin programa de lealtad
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      Seats 5F, 6D, 7G, 4A
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style="display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                    Check-In Completed
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
      previewHTML = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
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
                                      Katia Selena Vega Rios
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      Sin programa de lealtad
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      Seats 5F, 6D, 7G, 4A
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style="display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                    Check-In Completed
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
    } else if(variant === "WCI Pax"){
      renderHTML = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td class="pax-card-pair" style="text-align: left;">
                    <table cellpadding="0" cellspacing="0" border="0"
                      style="width: 100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate">
                      <tr>
                        <td style="padding: 24px;" class="pax-card-mobile-padding">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="padding-right: 16px; width: 58px;height: 58px;vertical-align: top;" width="58"
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
                                    <td class="status-line-member-status" width="56" height="56"
                                      style="border-radius: 50%;width: 56px;height: 56px;min-width: 56px;"
                                      class="outlook-status-td">
                                      <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                        <tr>
                                        <!--IMPRIMIR CUANDO ES INFANTE, INTERLINEA Y SIN STATUS-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#D6E3FF"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                            <v:fill color="#D6E3FF" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #0032A0;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES MEMBER-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#0032A0;"></v:oval>
                                            <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                              <v:fill color="#0032A0;" />
                                                <v:textbox inset="0,0,0,0">
                                                  <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                                </v:textbox>
                                              </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES SILVER-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#062660;"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                            <v:fill color="#062660;" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES GOLD-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#8D7249;"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                          <v:fill color="#8D7249;" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                      <![endif]-->
                                      <!--IMPRIMIR CUANDO ES PLATINUM-->
                                      <!--[if mso]>
                                      <td>
                                      <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#666666;"></v:oval>
                                        <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                        <v:fill color="#666666;" />
                                          <v:textbox inset="0,0,0,0">
                                          <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                        </v:textbox>
                                      </v:oval>
                                      </td>
                                      <![endif]-->
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
                                            class="status-bg-member-status outlook-status-td">
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
                                <table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 14px; line-height: 20px; color: #333333; padding-bottom: 4px;">
                                      Katia Selena Vega Rios
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ConnectMiles Member
                                      <span class="remove-item-mobile">
                                        |
                                      </span>
                                      <span class="reorder-mobile">
                                        Pending Seats
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #333333; padding-bottom: 4px;">
                                      Documents: 
                                      <span style="text-decoration: underline; color: #666666;">
                                        Verification Completed
                                      </span>
                                      <img style="width: 16px; height: 16px; vertical-align: top;" src="https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png" alt="" width="16" height="16">
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                      Check-In Completed
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table  border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style=" display: none; padding: 16px 0 8px; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; vertical-align:top">
                                    <!--[if mso]>
                                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:28px;v-text-anchor:middle;width:128px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#FFF4D5">
                                        <w:anchorlock/>
                                        <v:textbox inset="0,0,0,0">
                                        <center style="mso-line-height-rule:exactly;">
                                    <![endif]-->
                                    <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 4px 8px;background-color: #FFF4D5;border-radius: 12px;color:#121212">
                                      Check-In Pendiente
                                    </span>
                                    <!--[if mso]>
                                        </center>
                                        </v:textbox>
                                        </v:roundrect>
                                    <![endif]-->
                                  </td>
                                </tr>
                                <tr>
                                  <td class="show-item-mobile" style="width: 100%; display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #333333;">
                                    Documents: 
                                    <span style=" color: #0C7E3E;">
                                      Verification Completed
                                    </span>
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
      previewHTML = `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td class="pax-card-pair" style="text-align: left;">
                    <table cellpadding="0" cellspacing="0" border="0"
                      style="width: 100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate">
                      <tr>
                        <td style="padding: 24px;" class="pax-card-mobile-padding">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="padding-right: 16px; width: 58px;height: 58px;vertical-align: top;" width="58"
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
                                    <td class="status-line-member-status" width="56" height="56"
                                      style="border-radius: 50%;width: 56px;height: 56px;min-width: 56px;"
                                      class="outlook-status-td">
                                      <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                        <tr>
                                        <!--IMPRIMIR CUANDO ES INFANTE, INTERLINEA Y SIN STATUS-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#D6E3FF"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                            <v:fill color="#D6E3FF" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #0032A0;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES MEMBER-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#0032A0;"></v:oval>
                                            <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                              <v:fill color="#0032A0;" />
                                                <v:textbox inset="0,0,0,0">
                                                  <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                                </v:textbox>
                                              </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES SILVER-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#062660;"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                            <v:fill color="#062660;" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                        <![endif]-->
                                        <!--IMPRIMIR CUANDO ES GOLD-->
                                        <!--[if mso]>
                                        <td>
                                          <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#8D7249;"></v:oval>
                                          <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                          <v:fill color="#8D7249;" />
                                            <v:textbox inset="0,0,0,0">
                                              <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                            </v:textbox>
                                          </v:oval>
                                        </td>
                                      <![endif]-->
                                      <!--IMPRIMIR CUANDO ES PLATINUM-->
                                      <!--[if mso]>
                                      <td>
                                      <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#666666;"></v:oval>
                                        <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                        <v:fill color="#666666;" />
                                          <v:textbox inset="0,0,0,0">
                                          <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">KA</p>
                                        </v:textbox>
                                      </v:oval>
                                      </td>
                                      <![endif]-->
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
                                            class="status-bg-member-status outlook-status-td">
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
                                <table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 14px; line-height: 20px; color: #333333; padding-bottom: 4px;">
                                      Katia Selena Vega Rios
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                      ConnectMiles Member
                                      <span class="remove-item-mobile">
                                        |
                                      </span>
                                      <span class="reorder-mobile">
                                        Pending Seats
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #333333; padding-bottom: 4px;">
                                      Documents: 
                                      <span style="text-decoration: underline; color: #666666;">
                                        Verification Completed
                                      </span>
                                      <img style="width: 16px; height: 16px; vertical-align: top;" src="https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png" alt="" width="16" height="16">
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                      Check-In Completed
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <table  border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                <tr>
                                  <td class="show-item-mobile" style=" display: none; padding: 16px 0 8px; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; vertical-align:top">
                                    <!--[if mso]>
                                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:28px;v-text-anchor:middle;width:128px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#FFF4D5">
                                        <w:anchorlock/>
                                        <v:textbox inset="0,0,0,0">
                                        <center style="mso-line-height-rule:exactly;">
                                    <![endif]-->
                                    <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 4px 8px;background-color: #FFF4D5;border-radius: 12px;color:#121212">
                                      Check-In Pendiente
                                    </span>
                                    <!--[if mso]>
                                        </center>
                                        </v:textbox>
                                        </v:roundrect>
                                    <![endif]-->
                                  </td>
                                </tr>
                                <tr>
                                  <td class="show-item-mobile" style="width: 100%; display: none; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #333333;">
                                    Documents: 
                                    <span style=" color: #0C7E3E;">
                                      Verification Completed
                                    </span>
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
  return {renderHTML, previewHTML}
}

export default PaxCards