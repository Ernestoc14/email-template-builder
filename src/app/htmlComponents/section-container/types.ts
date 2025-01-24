export interface CenterSectionProps {
  variant: "centerSection"
  iconURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}

export interface CenterTitleSectionProps {
  variant: "centerTitleSection";
  iconURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}

export interface ContentSectionProps {
  variant: "contentSection";
}

export interface LeftSectionProps {
  variant: "leftSection";
  iconURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}

export interface LeftTitleSectionProps {
  variant: "leftTitleSection";
  iconURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}

export interface SectionProps {
  variant: "section";
  iconURL: string;
  title: string;
  infoLeft: string;
  infoRight: string;
}

export type SectionContainersProps = CenterSectionProps | CenterTitleSectionProps | ContentSectionProps | LeftSectionProps | LeftTitleSectionProps | SectionProps;