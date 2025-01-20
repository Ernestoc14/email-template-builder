// 

export interface AlertsProps {
  variants: "content" | "inline"
  type: "error" | "warning" | "info" | "invert" | "inverted" | "main" | "transparent" | "success" | "changes"
  iconURL: string
  alertText: string
}