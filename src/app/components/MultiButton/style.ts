const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        gap: 3,
        justifyContent: "center",

        ".button": {
            background: "#0032a0",
            color: "white",
            borderRadius: "12px",
            padding: "12px 24px",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            minWidth: "120px",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

            "&:hover": {
                boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                background: "#00227b",
            },

            "&:active": {
                transform: "translateY(0)",
            },
        }
    }
}

export default style;