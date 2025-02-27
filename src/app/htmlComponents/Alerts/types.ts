export interface Alerts {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: AlertsTranslations;
}

export interface AlertsTranslations {
  ES: AlertsProps;
  EN: AlertsProps;
  PT: AlertsProps;
  FR: AlertsProps;
}

export interface AlertsProps {
  alertText: string;
}