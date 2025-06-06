export interface TopicCards {
  componentName: string;
  variant: string;
  props: TopicCardsTranslations;
}

export interface TopicCardsTranslations {
  ES: TopicCardsProps;
  EN: TopicCardsProps;
  PT: TopicCardsProps;
  FR: TopicCardsProps;
}

export interface TopicCardsProps {
  imgUrl1: string;
  title1: string;
  description1: string;
  labelLink1: string;
  CTALink1: string;
  imgUrl2?: string;
  title2?: string;
  description2?: string;
  labelLink2?: string;
  CTALink2?: string;
}