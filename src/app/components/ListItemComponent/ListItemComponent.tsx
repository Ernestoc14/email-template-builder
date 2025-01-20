import { ListItem, ListItemText } from "@mui/material";
import { ListItemComponentProps } from "./types";

export const ListItemComponent = (props: ListItemComponentProps) => {
  return (
    <ListItem>
      <ListItemText primary={props.primary} />
    </ListItem>
  );
};
