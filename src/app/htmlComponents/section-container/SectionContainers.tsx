import { SectionContainersProps } from "./types";

const SectionContainers = (props: SectionContainersProps) => {
  let htmlSectionContainer = ""
  if (props.variant === "centerSection") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 16px;border-top-right-radius: 16px;">
    <!-- Start -->
    <tr>
      <td style="font-size: 14px; padding: 32px 48px" class="mobile-padding">
        <!-- Start Section Title -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td>
                <img src="${props.iconURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table>
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                        ${props.title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoRight}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Section Title -->
      </td>
    </tr>
    <!-- Start Divider -->
    <tr>
      <td class="divider-mobile-spacing"
        style="border-bottom: 1px solid #cccccb; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
        &nbsp;
      </td>
    </tr>
    <!-- End Divider -->
    <tr>
      <td>
        <!-- Start Content Area Cmp -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;">
          <tr>
            <td style="padding: 32px 48px;" class="content-area-mobile-padding">
              <table cellspacing="0" cellpadding="0"
                style="margin: auto; width: 100%; min-height: 500px;">
                <tr>
                  <td align="center" style="color: #0032a0; background-color: #8ed8ff; border-radius: 6px;">
                    Content Area - Children Size (Min Height 500px)
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <!-- End Content Area Cmp -->
      </td>
    </tr>
  </table>`
  } else if (props.variant === "centerTitleSection") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 16px;border-top-right-radius: 16px;">
    <tr>
      <td style="font-size: 14px; padding: 32px 48px" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td>
                <img src="${props.iconURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table>
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${props.title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoRight}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Title Cmp -->
      </td>
    </tr>
    <!-- Start Divider -->
    <tr>
      <td class="divider-mobile-spacing"
        style="border-bottom: 1px solid #cccccb; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
        &nbsp;
      </td>
    </tr>
  </table>`
  } else if (props.variant === "contentSection") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;">
    <tr>
      <td style="padding: 32px 48px;" class="content-area-mobile-padding">
        <!-- Start Replace -->
        <table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%; min-height: 500px;">
          <tr>
            <td align="center" style="color: #0032a0; background-color: #8ed8ff; border-radius: 6px;">
              Content Area - Children Size (Min Height 500px)
            </td>
          </tr>
        </table>
        <!-- End Replace -->
      </td>
    </tr>
  </table>`
  } else if (props.variant === "leftSection") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 16px;border-top-right-radius: 16px;">
    <tr>
      <td style="padding: 0 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;"> 
          <!-- Start -->
          <tr>
            <td style="font-size: 14px; padding: 32px 48px" class="mobile-padding">
              <!-- Start Section Title -->
              <table cellpadding="0" cellspacing="0" border="0" style="width: auto">
                <tbody>
                  <tr style="height: 100%" class="title-info-reorder">
                    <td>
                      <img src="${props.iconURL}"
                        style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                        class="card-logo" alt="card logo" width="48" />
                    </td>
                    <td>
                      <table>
                        <tr>
                          <td
                            style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                            class="title-info-reorder title-mobile-padding">
                            ${props.title}
                          </td>
                          <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                            class="title-info-reorder">
                            <span class="remove-span-info">·</span>
                            <span
                              style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoLeft}</span>
                            <span>·</span>
                            <span
                              style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoRight}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End Section Title -->
            </td>
          </tr>
          <!-- Start Divider -->
          <tr>
            <td class="divider-mobile-spacing"
              style="border-bottom: 1px solid #cccccb; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
              &nbsp;
            </td>
          </tr>
          <!-- End Divider -->
          <tr>
            <td>
              <!-- Start Content Area Cmp -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;">
                <tr>
                  <td style="padding: 32px 48px;" class="content-area-mobile-padding">
                    <table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%; min-height: 500px;">
                      <tr>
                        <td align="center" style="color: #0032a0; background-color: #8ed8ff; border-radius: 6px;">
                          Content Area - Children Size (Min Height 500px)
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- End Content Area Cmp -->
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
  } else if (props.variant === "leftTitleSection") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 16px;border-top-right-radius: 16px;">
    <tr>
      <td style="font-size: 14px; padding: 32px 48px" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td>
                <img src="${props.iconURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo" alt="card logo" width="48"/>
              </td>
              <td>
                <table>
                  <tr>
                    <td
                      style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${props.title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoRight}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Title Cmp -->
      </td>
    </tr>
    <!-- Start Divider -->
    <tr>
      <td class="divider-mobile-spacing"
        style="border-bottom: 1px solid #cccccb; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
        &nbsp;
      </td>
    </tr>
  </table>`
  } else if (props.variant === "section") {
    htmlSectionContainer = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 16px;border-top-right-radius: 16px;border-bottom: 1px solid #dbdad8;">
    <tr>
      <td style="font-size: 14px; padding: 32px 48px" class="section-title-mobile-padding">
        <table cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td>
                <img src="${props.iconURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo" alt="card logo" />
              </td>
              <td>
                <table>
                  <tr>
                    <td style="color: #0032a0; padding: 0 8px; vertical-align: middle;"
                      class="title-info-reorder title-mobile-padding">
                      <p
                        style="width: 120px;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;">
                        ${props.title}
                      </p>
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${props.infoRight}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
  <!-- End Section Title -->
  <!-- Start Content Area -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; height: 100%; background-color: #fcfcfc; border-collapse: collapse;">
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%; height: 100%; padding: 32px 48px;"
          class="mobile-padding">
          <tr>
            <td align="center" style="color: #0032a0; background-color: #8ed8ff; border-radius: 6px;">
              <p>Content Area</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
  }
  return <div dangerouslySetInnerHTML={{ __html: htmlSectionContainer }} />;
}

  export default SectionContainers;