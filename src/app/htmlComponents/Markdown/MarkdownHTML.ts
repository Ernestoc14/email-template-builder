import { Component } from "@/app/context/MasterJSONContext"
import markdownToHtml from "@/app/utils/markdownUtils"

const getMarkdownHTML = (data: Component, lang: string) => {
    // @ts-expect-error doesn't exist title props 
    const md = data[lang].markdown
    const html = markdownToHtml(md)
    const css = ''
    return {html, css}
}

export default getMarkdownHTML