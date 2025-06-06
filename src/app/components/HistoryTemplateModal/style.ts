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
        p: 4,
        ".sub-container":{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ".title": {
                textAlign: "center", padding: "20px"
            },
            ".back-icon":{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#0032a0",
                "&:hover": {
                    backgroundColor: "#e0e7ff",
                    color:"#00227b"
                }, 
            },
            '.templates-list':{
                width: "100%",
                padding: "0",
                margin: "0",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                ".template-item":{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    ".template-box":{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        paddingLeft: "10px",
                        ".button":{
                            backgroundColor: "#0032a0",
                            height: "20%",
                            display: "flex",
                            alignItems: "center",
                            color: "white", "&:hover": {
                                backgroundColor: "#00227b"
                            }
                        }
                    }
                }
            }
        }
    }
}

export default style