import { Box, Button } from "@mui/material";
import MultiButtonProps from "./types";
import style from "./style";

export const MultiButton = (props: MultiButtonProps) => {
    const styles = style;

    return (
        <Box flexWrap="wrap" sx={styles.container}>
            {props.buttons.map((button, index) => (
                <Button
                    onClick={() => props.onClick(button)}
                    key={index}
                    variant="contained"
                    fullWidth
                    className="button"
                >
                    {button}
                </Button>
            ))}
        </Box>
    );
};
