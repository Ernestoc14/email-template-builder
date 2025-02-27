export interface Buttons {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: ButtonsTranslations;
}

export interface ButtonsTranslations {
  ES: ButtonsProps;
  EN: ButtonsProps;
  PT: ButtonsProps;
  FR: ButtonsProps;
}

export interface ButtonsProps {
  label: string;
  urlLink: string;
}