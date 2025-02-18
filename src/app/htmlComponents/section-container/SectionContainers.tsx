import { ObjectComponents } from "@/app/types/Components"

const SectionContainers = (variant: string, language: string) => {
  // Left section Cmp is DONE
  // Left title section Cmp under Construction
  let renderHTML, previewHTML = ""
  if (variant === "Center Section") {
    renderHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-radius: 8px;">
    <!-- Start -->
    <tr>
      <td align="center" style="font-size: 14px; padding: 16px 48px" class="mobile-padding">
        <!-- Start Section Title -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                        ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
          style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px;">
          <tr>
            <td style="padding: 32px;" class="content-area-mobile-padding">
              <table cellspacing="0" cellpadding="0"
                style="margin: auto; width: 100%; min-height: 500px;">
                <tr>
                  <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
                    DropZone Component
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
    previewHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-radius: 8px;">
    <!-- Start -->
    <tr>
      <td align="center" style="font-size: 14px; padding: 16px 48px" class="mobile-padding">
        <!-- Start Section Title -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                        ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
          style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px;">
          <tr>
            <td style="padding: 32px;" class="content-area-mobile-padding">
              <table cellspacing="0" cellpadding="0"
                style="margin: auto; width: 100%; min-height: 500px;">
                <tr>
                  <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
                    DropZone Component
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
  } else if (variant === "Center Title Section") {
    renderHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 10px;border-top-right-radius: 10px;">
    <tr>
      <td align="center" style="font-size: 14px; padding: 16px;" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
    previewHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 10px;border-top-right-radius: 10px;">
    <tr>
      <td align="center" style="font-size: 14px; padding: 16px;" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="widht: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
  } else if (variant === "Content Section") {
    renderHTML = `<table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%; min-height: 500px;">
          <tr>
            <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
              DropZone Component
            </td>
          </tr>
        </table>`
    previewHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse;">
    <tr>
      <td style="padding: 32px 48px;" class="content-area-mobile-padding">
        <!-- Start Replace -->
        <table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%; min-height: 500px;">
          <tr>
            <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
              DropZone Component
            </td>
          </tr>
        </table>
        <!-- End Replace -->
      </td>
    </tr>
  </table>`
  } else if (variant === "Left Section") {
    renderHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-radius: 8px;">
    <!-- Start -->
    <tr>
      <td style="font-size: 14px; padding: 16px 48px" class="mobile-padding">
        <!-- Start Section Title -->
        <table cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                        ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
          style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px;">
          <tr>
            <td style="padding: 32px;" class="content-area-mobile-padding">
              <table cellspacing="0" cellpadding="0"
                style="margin: auto; width: 100%; min-height: 500px;">
                <tr>
                  <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
                    DropZone Component
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
    previewHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-radius: 8px;">
    <!-- Start -->
    <tr>
      <td style="font-size: 14px; padding: 16px 48px" class="mobile-padding">
        <!-- Start Section Title -->
        <table cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle; font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif; white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                        ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
          style="margin: 0;width: 100%; background-color: #fcfcfc; border-collapse: collapse; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px;">
          <tr>
            <td style="padding: 32px;" class="content-area-mobile-padding">
              <table cellspacing="0" cellpadding="0"
                style="margin: auto; width: 100%; min-height: 500px;">
                <tr>
                  <td align="center" style="color: #0032a0; border: 1px solid #cccccb; border-radius: 6px;">
                    DropZone Component
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
  } else if (variant === "Left Title Section") {
    renderHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 10px;border-top-right-radius: 10px;">
    <tr>
      <td style="font-size: 14px; padding: 16px;" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
    previewHTML = `<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="margin: 0;width: 100%;background-color: #fcfcfc; border-collapse: collapse;border-top-left-radius: 10px;border-top-right-radius: 10px;">
    <tr>
      <td style="font-size: 14px; padding: 16px;" class="section-title-mobile-padding">
        <!-- Start Title Cmp -->
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: auto">
          <tbody>
            <tr style="height: 100%" class="title-info-reorder">
              <td style="width: 48px;">
                <img src="${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].imageURL}"
                  style="width: 48px;border: 0;margin: 0;padding: 0; height: auto;outline: none;text-decoration: none; display: block;"
                  class="card-logo remove-title-image" alt="card logo" width="48" />
              </td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="color: #0032a0; padding: 0 8px; vertical-align: middle;font-size: 20px;font-weight: 700; margin:0;font-family: Gilroy, Arial, Helvetica, sans-serif;white-space: nowrap;"
                      class="title-info-reorder title-mobile-padding">
                      ${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].title}
                    </td>
                    <td style="align-items: center; color: #666666; vertical-align: middle; white-space: nowrap;"
                      class="title-info-reorder">
                      <span class="remove-span-info">·</span>
                      <span style="padding: 0 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoLeft}</span>
                      <span>·</span>
                      <span style="padding-left: 8px; font-family: SuisseIntl, Helvetica, Arial, sans-serif;">${ObjectComponents.Components.SectionContainers.props[language as "ES" | "EN" | "PT" | "FR"].infoRight}</span>
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
  }
  return { renderHTML, previewHTML }
}

  export default SectionContainers;