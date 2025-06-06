export interface Markdown {
    componentName: string
    variant: string
    props: MarkdownTranslations
}

export interface MarkdownTranslations{
    ES: MarkdownProps
    EN: MarkdownProps
    PT: MarkdownProps
    FR: MarkdownProps
}

export interface MarkdownProps {
    markdown: string
}