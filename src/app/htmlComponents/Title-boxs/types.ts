export interface TitleBoxs {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
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
  description: string;
}