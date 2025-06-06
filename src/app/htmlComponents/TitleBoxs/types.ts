export interface TitleBoxs {
  componentName: string;
  variant: string;
  props: TitleBoxsTranslations;
}

export interface TitleBoxsTranslations {
  ES: TitleBoxsProps;
  EN: TitleBoxsProps;
  PT: TitleBoxsProps;
  FR: TitleBoxsProps;
}

export interface TitleBoxsProps {
  title: string;
  description?: string;
}