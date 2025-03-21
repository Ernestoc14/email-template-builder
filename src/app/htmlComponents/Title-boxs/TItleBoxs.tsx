import { ObjectComponents } from "@/app/types/Components";

const TitleBoxs = (variant: string, language: string) => {
    let renderHTML, previewHTML = "";
    if(variant === "Title Description"){
      renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
          <tr>
            <td style="word-break: break-word; height: 60px;" class="titlebox-mobile-padding">
              <p class="title-titlebox-mobile"
                style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].title}
              </p>
              <p
                style=" font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 24px; margin: 0; padding-top: 8px;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].description}
              </p>
            </td>
          </tr>
        </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #0032A0; border-collapse: collapse;border-bottom: 1px solid #CCCCCB;">
    <tr>
      <td class="titlebox-remove-mbpadding" style="font-size: 14px; padding: 48px 40px 24px;">
        <!-- Inicia TitleBox Cmp -->
        <!--  Copy this code into Master Container-->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
          <tr>
            <td style="word-break: break-word; height: 60px;" class="titlebox-mobile-padding">
              <p class="title-titlebox-mobile"
                style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].title}
              </p>
              <p
                style=" font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 24px; margin: 0; padding-top: 8px;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].description}
              </p>
            </td>
          </tr>
        </table>
        <!-- Finaliza TitleBox Cmp-->
      </td>
    </tr>
  </table>`
    } else if(variant === "Just Title") {
      renderHTML = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
          <tr>
            <td style="word-break: break-word; height: 60px;" class="titlebox-mobile-padding">
              <p class="title-titlebox-mobile"
                style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].title}
              </p>
            </td>
          </tr>
        </table>`
        previewHTML = `<table cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #0032A0; border-collapse: collapse;border-bottom: 1px solid #CCCCCB;">
    <tr>
      <td class="titlebox-remove-mbpadding" style="font-size: 14px; padding: 48px 40px 24px;">
        <!-- Inicia TitleBox Cmp -->
        <!--  Copy this code into Master Container-->
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
          <tr>
            <td style="word-break: break-word; height: 60px;" class="titlebox-mobile-padding">
              <p class="title-titlebox-mobile"
                style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                ${ObjectComponents.Components.TitleBoxs.props[language as "ES" | "EN" | "PT" | "FR"].title}
              </p>
            </td>
          </tr>
        </table>
        <!-- Finaliza TitleBox Cmp-->
      </td>
    </tr>
  </table>`
    }
    return {renderHTML, previewHTML}
  }

export default TitleBoxs