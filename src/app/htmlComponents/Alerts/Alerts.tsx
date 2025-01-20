import AlertContent from "./Content/AlertContent";
import AlertInline from "./Inline/AlertInline";
import { AlertsProps } from "./types";

const Alerts = (props: AlertsProps) => {
  let alertVariant: string = ""
  if (props.variants === "content") {
    alertVariant = AlertContent(props)
  } else {
    if( props.variants === "inline") {
      alertVariant = AlertInline(props)
    }
  }
  return alertVariant;
}

export default Alerts;
