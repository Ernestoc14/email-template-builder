import { ObjectComponents } from "@/app/types/Components";

const ItineraryCards = (variant: string, language: string) => {
    let renderHTML, previewHTML = "";
    if(variant === "Adelantado") {
      renderHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:90px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#0E68FF">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #0E68FF;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s></a>
                                    </td>
                                    <td class="right-padding-mobile"  style="white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#0E68FF">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" class="left-padding-mobile" style="text-align: right;white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#0E68FF">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                    </td>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3" style="width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s>
                                      </a>
                                    </td>
                                    <td colspan="3" style="text-align: right;width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:90px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#0E68FF">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #0E68FF;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s></a>
                                    </td>
                                    <td class="right-padding-mobile"  style="white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#0E68FF">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" class="left-padding-mobile" style="text-align: right;white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#0E68FF">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                    </td>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3" style="width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s>
                                      </a>
                                    </td>
                                    <td colspan="3" style="text-align: right;width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
    } else if(variant === "A Tiempo") {
      renderHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:78px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#0C7E3E">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #0C7E3E;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:78px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#0C7E3E">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #0C7E3E;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
    } else if(variant === "Cambios") {
      renderHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #B15C37;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:75px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#B15C37">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #B15C37;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#B15C37">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#B15C37">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #B15C37;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:75px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#B15C37">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #B15C37;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#B15C37">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#B15C37">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
    }
    else if(variant === "Cancelado") {
      renderHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:85px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#D52525">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #D52525;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:85px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#D52525">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #D52525;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="padding-right: 8px; white-space: nowrap;">
                                      <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                      </p>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                      <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                        <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
    }
    else if(variant === "Demorado") {
      renderHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:90px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#D52525">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #D52525;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s></a>
                                    </td>
                                    <td class="right-padding-mobile"  style="white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#D52525">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" class="left-padding-mobile" style="text-align: right;white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#D52525">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                    </td>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3" style="width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s>
                                      </a>
                                    </td>
                                    <td colspan="3" style="text-align: right;width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
      previewHTML = `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate;">
                      <tr>
                        <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                          <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            <tr>
                              <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].date} · ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].aircraft}
                              </td>
                              <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; vertical-align:top">
                                <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:20px;v-text-anchor:middle;width:90px;line-height: 1;" arcsize="50%" stroke="false" fillcolor="#D52525">
                                    <w:anchorlock/>
                                    <v:textbox inset="0,0,0,0">
                                    <center style="mso-line-height-rule:exactly;">
                                <![endif]-->
                                <span style="white-space:nowrap;font-family: SuisseIntl, Helvetica, sans-serif;font-size: 12px;font-weight: 600;padding: 2px 12px;background-color: #D52525;border-radius: 12px;color:#ffffff">
                                  ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].pillsFlightStatus}
                                </span>
                                <!--[if mso]>
                                    </center>
                                    </v:textbox>
                                    </v:roundrect>
                                <![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif; color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s></a>
                                    </td>
                                    <td class="right-padding-mobile"  style="white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#D52525">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureTime}</span>
                                    </td>
                                    <td style="width:48%">
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td
                                      style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].flightDuration}
                                    </td>
                                    <td style="width:48%" >
                                      <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                        &nbsp;
                                      </p>
                                    </td>
                                    <td align="right" class="left-padding-mobile" style="text-align: right;white-space: nowrap;">
                                        <span class="remove-padding-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;font-size: 20px; line-height: 32px; padding: 0 8px; font-weight: 700; color:#D52525">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalTime}</span>
                                    </td>
                                    <td style="white-space: nowrap;">
                                      <a>
                                        <s class="remove-text-mobile" style="font-family:Gilroy, Helvetica, Arial, sans-serif;color: #333333; font-size: 18px; line-height: 24px; font-weight: 400;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="3" style="width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].departureCrossedOutTime}</s>
                                      </a>
                                    </td>
                                    <td colspan="3" style="text-align: right;width: 50%;" class="mso-noshow">
                                      <a>
                                        <s class="show-text-mobile" style="line-height: 24px;font-size: 18px;font-weight: 400;display: none; color: #333333;">
                                          ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].arrivalCrossedOutTime}</s>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].origin}
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;font-style: normal;">
                                      ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destination}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" border="1" style="padding-top: 16px;">
                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                  <tr>
                                    <td
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-right: 12px; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextOriginGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].originGate}</span>
                                      </span>
                                    </td>
                                    <td align="right"
                                      style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 600;">
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationTerminal}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationTerminal}</span>
                                      </span>
                                      <span class="reorder-terminal-gate-mobile">
                                        ${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].labelTextDestinationGate}:
                                        <span style="color: #333333;">${ObjectComponents.Components.ItineraryCards.props[language as "ES" | "EN" | "PT" | "FR"].destinationGate}</span>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
    }
  return { renderHTML, previewHTML };
}

export default ItineraryCards;