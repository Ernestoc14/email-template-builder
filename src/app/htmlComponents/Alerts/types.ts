export interface AlertContentProps {
  variants: "content"
  type: "error" | "info" | "invert" | "warning"
  iconURL: string
  alertText: string
}

export interface AlertInlineProps {
  variants: "inline"
  type: "changes" | "error" | "inverted" | "main" | "success" | "transparent" | "warning"
  iconURL: string
  alertText: string
}

export type AlertsProps = AlertContentProps | AlertInlineProps;