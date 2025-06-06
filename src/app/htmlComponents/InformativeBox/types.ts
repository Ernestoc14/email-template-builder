export interface InformativeBox {
    componentName: string
    variant: string
    props: InformativeBoxTranslations
}

export interface InformativeBoxTranslations{
    ES: InformativeBoxProps
    EN: InformativeBoxProps
    PT: InformativeBoxProps
    FR: InformativeBoxProps
}

export interface InformativeBoxProps {
    imgUrl: string
    title: string
    description: string
}