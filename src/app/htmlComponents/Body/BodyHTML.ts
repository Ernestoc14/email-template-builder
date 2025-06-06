import { SectionComponent } from "@/app/context/MasterJSONContext"
import { makeSectionContainer } from "../SectionContainer/SectionContainersHTML"

const getBodyHTML = (data: SectionComponent[], lang: string) => {
    const sectionContainers = data.map((s, index) => {
        const isFirst = index === 0;
        const isLast = index === data.length - 1;
        return makeSectionContainer(s, lang, isFirst, isLast)
    })

    const css = sectionContainers.map((s) => s.css).join('')
    const html = sectionContainers.map((s) => s.html).join('')

    return {html, css}
}

export {getBodyHTML}