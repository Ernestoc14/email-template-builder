export interface Images {
  componentName: string;
  variant: string;
  props: ImagesTranslations;
}

export interface ImagesTranslations {
  ES: ImagesProps;
  EN: ImagesProps;
  PT: ImagesProps;
  FR: ImagesProps;
}

export interface ImagesProps {
  desktopURL: string;
  mobileURL: string;
  altText: string;
}