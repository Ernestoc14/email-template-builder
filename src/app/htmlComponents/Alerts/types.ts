export interface AlertContentProps {
  variant: "content"
  type: "error" | "info" | "invert" | "warning"
  iconURL: string
  alertText: string
}

export interface AlertInlineProps {
  variant: "inline"
  type: "changes" | "error" | "inverted" | "main" | "success" | "transparent" | "warning"
  iconURL: string
  alertText: string
}

export type AlertsProps = AlertContentProps | AlertInlineProps;