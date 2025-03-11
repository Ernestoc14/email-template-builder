export interface SectionContainers {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: SectionContainersTranslations;
}

export interface SectionContainersTranslations {
  ES: SectionContainersProps;
  EN: SectionContainersProps;
  PT: SectionContainersProps;
  FR: SectionContainersProps;
}

export interface SectionContainersProps {
  imageURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}