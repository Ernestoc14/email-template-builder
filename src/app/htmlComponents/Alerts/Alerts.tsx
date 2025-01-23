import { ReactElement } from "react";
import AlertContent from "./Content/AlertContent";
import AlertInline from "./Inline/AlertInline";
import { AlertsProps } from "./types";

const Alerts = (props: AlertsProps): ReactElement => {
  let alertVariant: ReactElement = <></>
  if (props.variant === "content") {
    alertVariant  = <AlertContent {...props} />
  } else {
    if( props.variant === "inline") {
      alertVariant = <AlertInline {...props} />
    }
  }
  return alertVariant;
}

export default Alerts;
