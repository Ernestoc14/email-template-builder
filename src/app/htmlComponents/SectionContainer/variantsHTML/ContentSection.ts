const contentSectionCSS = () => {
    return `<style type="text/css">
                @media all and (max-width: 719px) {
                    .content-section-mobile-padding {
                        padding: 0 16px !important;
                    }
                }
            </style>`
}

const contentSectionHTML = () => {
    return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0;width: 100%; background-color: #FFFFFF; border-collapse: collapse;">
                <tr>
                    <td style="padding: 0px 72px;" class="content-section-mobile-padding">
                        <table cellspacing="0" cellpadding="0" style="margin: auto; width: 100%;">
                            {sectionContainerComponents}
                        </table>
                    </td>
                </tr>
            </table>`
}

export {contentSectionCSS, contentSectionHTML}