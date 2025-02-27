export interface Footers {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: FootersTranslations;
}

export interface FootersTranslations {
  ES: FootersProps;
  EN: FootersProps;
  PT: FootersProps;
  FR: FootersProps;
}

export interface FootersProps {
  text: string;
}