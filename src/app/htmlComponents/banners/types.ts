export interface Banners {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: BannersTranslations;
}

export interface BannersTranslations {
  ES: BannersProps;
  EN: BannersProps;
  PT: BannersProps;
  FR: BannersProps;
}

export interface BannersProps {
  desktopImageURL: string;
  mobileImageURL: string;
  title: string;
  description: string;
}