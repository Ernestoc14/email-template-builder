const style = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "95vw", sm: "85vw", md: "70vw", lg: "60vw", xl: "50vw" },
        maxWidth: "900px",
        maxHeight: "90vh",
        height: "30vh",
        bgcolor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",

        ".sub-container": {
            display: "flex",
            flexDirection: "column",
            height: "100%",

            ".header-section": {
                background: "linear-gradient(135deg, #0032a0 0%, #00227b 50%, #e0e7ff 100%)",
                color: "white",
                position: "relative",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",

                ".title": {
                    fontWeight: 600,
                    textAlign: "center",
                },

                ".subtitle": {
                    fontSize: "0.875rem",
                    opacity: 0.9,
                    margin: 0,
                    fontWeight: 400,
                },

                ".header-icon": {
                    fontSize: "28px",
                    opacity: 0.9,
                }
            },

            ".back-icon": {
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                width: "44px",
                height: "44px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-50%) scale(1.05)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                },
                "&active": {
                    transform: "translateY(-50%) scale(0.95)",
                }
            },
            ".form-section": {
                padding: "20px 24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                backgroundColor: "rgba(248, 250, 252, 0.8)",

                ".form-field": {
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        border: "2px solid transparent",

                        "&:hover": {
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                        },

                        "&.Mui-focused": {
                            borderColor: "#667eea",
                            boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                        }
                    },

                    "& .MuiInputAdornment-root": {
                        color: "#94a3b8",
                    }
                }
            },
            ".form": {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "60%",
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
    },
    inputError: {
        color: '#b71c1c',
        fontSize: '12px'
    }
}

export default style