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
                justifyContent: "center",
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

            ".buttons-section": {
                padding: "20px 24px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(248, 250, 252, 0.8)",
            },
        }
    }
}

export default style