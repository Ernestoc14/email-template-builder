import { Component } from "@/app/context/MasterJSONContext"
import { getComponentHTML } from "@/app/utils/componentsUtils"

const getBoxAzulHTML = (components: Component[], lang: string) => {
    const componentsHtml = components.map((c, index) => {
        const isFirst = index === 0;
        const isLast = index === components.length - 1;
        return getComponentHTML(c, lang, isFirst, isLast);
    });

    const html = componentsHtml.map((c) => c.html).join('')
    const css = componentsHtml.map((c) => c.css).join('')

    return {html, css}
}

export {getBoxAzulHTML}