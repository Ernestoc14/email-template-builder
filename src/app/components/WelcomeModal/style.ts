const style = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        ".sub-container":{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ".text":{
                fontSize: "28px",
                textAlign: "center",
                padding: "20px"
            }
        }
    }
}

export default style