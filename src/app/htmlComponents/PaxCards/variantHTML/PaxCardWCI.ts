import { PaxCardsProps } from "../types"

const paxCardWciCSS = () => {
    return `<style type="text/css">
                .status-bg-without-status {
                    background-color: #D6E3FF;
                }
                .status-line-without-status {
                    border: 1px solid #D6E3FF;
                }

                .status-bg-member-status {
                    background-color: #0032A0;
                }

                .status-line-member-status {
                    border: 1px solid #0032A0;
                }

                .status-bg-silver-status {
                    background-color: #062660;
                }

                .status-line-silver-status {
                    border: 1px solid #062660;
                }

                .status-bg-gold-status {
                    background-color: #8D7249;
                }

                .status-line-gold-status {
                    border: 1px solid #8D7249;
                }

                .status-bg-platinum-status {
                    background-color: #666666;
                }

                .status-line-platinum-status {
                    border: 1px solid #666666;
                }

                .status-bg-presidential-status {
                    background-color: #121212;
                }

                .status-line-presidential-status {
                    border: 1px solid #121212;
                }

                .status-color-without-status {
                    color: #0032A0;
                }

                .status-color-all-status {
                    color: #F9F9F8;
                }
                .status-color-gold-status-mso {
                    color: #8D7249;
                }

                .status-color-silver-status-mso {
                    color: #062660;
                }

                .status-color-platinum-status-mso {
                    color: #666666;
                }

                .status-color-presidential-status-mso {
                    color: #121212;
                }
            </style>
        <!--[if mso]>
        <style type="text/css">
        .email-wrapper{
            width: 800px
        }
        .left-padding-mobile {
            padding: 0 0 0 8px !important;
        }
        .no-border {
            border:0 !important;
        }
        .outlook-reset-padding {
            padding: 24px 10px !important;  
        }
        .outlook-status-td {
            display: none !important;
        }
        .outlook-flight-details {
            height: 88px !important;
            width: 90%;
        }
        body, table, td, p, div, a, span {
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->`
}

const paxCardWciHTML = (props: PaxCardsProps) => {
    return `<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                    <td class="pax-card-pair" style="text-align: left;">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate">
                            <tr>
                                <td style="padding: 24px;" class="pax-card-mobile-padding">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                        <tr>
                                            <td style="padding-right: 16px; width: 58px;height: 58px;vertical-align: top;" width="58" height="58" class="outlook-status-td">
                                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;border-collapse:separate" class="outlook-status-td">
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
                                                        <td class="status-line-member-status" width="56" height="56" style="border-radius: 50%;width: 56px;height: 56px;min-width: 56px;" class="outlook-status-td">
                                                            <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                                                <tr>
                                                                <!--IMPRIMIR CUANDO ES INFANTE, INTERLINEA Y SIN STATUS-->
                                                                <!--[if mso]>
                                                                    <td>
                                                                        <v:oval style="width: 56px; height: 56px;position: static;" strokecolor="#D6E3FF"></v:oval>
                                                                        <v:oval style="position:absolute;margin-left:2px;;margin-top:2px;width:52px;height:52px" stroke="false">
                                                                            <v:fill color="#D6E3FF" />
                                                                            <v:textbox inset="0,0,0,0">
                                                                            <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #0032A0;">${props.paxInitials}</p>
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
                                                                            <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">${props.paxInitials}</p>
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
                                                                            <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">${props.paxInitials}</p>
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
                                                                            <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">${props.paxInitials}</p>
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
                                                                            <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">${props.paxInitials}</p>
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
                                                                        <p style="text-align:center;font-size:12pt;font-family:Arial; position:absolute;margin-left:1px;margin-top:8px;color: #F9F9F8;">${props.paxInitials}</p>
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
                                                                <td width="52" height="52" style="border-radius: 50%;text-align: center;font-size: 16px;font-style: normal;font-weight: 600;line-height: 20px;min-width: 52px;" class="status-bg-member-status outlook-status-td">
                                                                    <span class="outlook-status-td status-color-all-status">
                                                                        ${props.paxInitials}
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
                                                        ${props.paxName}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666; padding-bottom: 4px;">
                                                        ${props.status}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="reorder-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 16px; color: #666666;">
                                                        ${props.seats}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #333333; padding-bottom: 4px;">
                                                        ${props.labelTextDocument}: 
                                                        <span style="text-decoration: underline; color: #666666;">
                                                            ${props.documentStatus}
                                                        </span>
                                                        <img style="width: 16px; height: 16px; vertical-align: top;" src=${props.iconURL} alt="" width="16" height="16">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="remove-item-mobile" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; line-height: 16px; color: #0C7E3E;">
                                                        ${props.checkInStatus}
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
        </table>`
}

export {paxCardWciCSS, paxCardWciHTML}