const style = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        border: "1px solid #000",
        boxShadow: 24,
        p: 3,
        ".sub-container":{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ".header":{
                paddingBottom: "20px",
                ".back-button":{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    color: "#0032a0",
                    "&:hover": { 
                        backgroundColor: "#e0e7ff",
                        color:"#00227b"
                    }, 
                }
            },
            ".form":{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "60%",
                ".button":{
                    marginTop: "20px",
                    backgroundColor: "#0032a0",
                    color: "white",
                    textTransform: "none",
                }
            }
        }
    },
    inputError:{
        color: '#b71c1c',
        fontSize: '12px'
    }
}

export default style