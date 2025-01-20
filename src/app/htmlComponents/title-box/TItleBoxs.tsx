import { TitleBoxProps } from "./types";

const TitleBoxs = (props: TitleBoxProps) => {
  const TitleBoxCmp = (props: TitleBoxProps) => {
    let titleBox = ""
    if(props.variant === "titleBox")
      titleBox = `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
          <tr>
            <td style="word-break: break-word; height: 60px;" class="titlebox-mobile-padding">
              <p class="title-titlebox-mobile"
                style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                ${props.title}
              </p>
              <p
                style=" font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 24px; margin: 0; padding-top: 8px;">
                ${props.subtitle}
              </p>
            </td>
          </tr>
        </table>`
    return titleBox
  }
  return TitleBoxCmp(props);
}

export default TitleBoxs