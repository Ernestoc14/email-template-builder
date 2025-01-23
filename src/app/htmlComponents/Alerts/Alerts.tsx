import { ReactElement } from "react";
import AlertContent from "./Content/AlertContent";
import AlertInline from "./Inline/AlertInline";
import { AlertsProps } from "./types";

const Alerts = (props: AlertsProps): ReactElement => {
  let alertVariant: ReactElement = <></>
  if (props.variants === "content") {
    alertVariant  = <AlertContent {...props} />
  } else {
    if( props.variants === "inline") {
      alertVariant = <AlertInline {...props} />
    }
  }
  return alertVariant;
}

export default Alerts;
