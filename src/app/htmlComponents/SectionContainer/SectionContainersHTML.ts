import { SectionComponent } from "@/app/context/MasterJSONContext"
import { contentSectionCSS, contentSectionHTML } from "./variantsHTML/ContentSection"
import { getComponentHTML } from "@/app/utils/componentsUtils"

const makeSectionContainer = (data: SectionComponent, lang: string, isFirst: boolean, isLast: boolean) => {
    const variant = data.sectionComponentsInfo.variant
    const components = data.components
    let tmpHtml;
    let html: string
    let css: string
    const startString = `<tr><td style="${isFirst ? '' : 'padding-top: 12px;'} ${isLast ? '' : 'padding-bottom:12px'}">`
    const endString = '</td></tr>'

    switch (variant) {
        case "Content Section":
            tmpHtml = contentSectionHTML()
            tmpHtml = startString + tmpHtml + endString
            html = tmpHtml
            css = contentSectionCSS()
            break;
    
        default:
            html = ''
            css = '' 
            break;
    }

    
    const componentsTmpHtml = components.map((c, index) =>{
        const isFirst = index === 0;
        const isLast = index === components.length - 1;
        return getComponentHTML(c, lang, isFirst, isLast)
    })

    const componentsHtml = componentsTmpHtml.map((c) => c.html).join('')
    const componentsCss = componentsTmpHtml.map((c) => c.css).join('')
    
    html = html.replace('{sectionContainerComponents}', componentsHtml)
    css = css + componentsCss
    return {html, css}
}

export { makeSectionContainer, }