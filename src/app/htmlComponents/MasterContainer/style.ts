const style = (isResponsive: boolean, isFullWidth: boolean) => {
    return {
        container: {
            ".email-wrapper" : {
                padding: "25px 0 32px",
                width: isResponsive ? "375px" : "800px",
                maxWidth: isResponsive? "375px" : "800px" 
            },
            ".top-blue-container": {
                backgroundColor: "#0032A0",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                width: "100%",
                minWidth: "100%",
            },
            ".header-table":{
                width: "100%",
                minWidth: "100%"
            },
            ".header-section-mobile-padding":{
                padding: isResponsive ? "32px 16px 0" : "32px 32px 0"
            },
            ".box-azul-table":{
                width: "100%",
                minWidth: "100%"
            },
            ".blue-box-mobile-padding":{
                backgroundColor: "#0032A0",
                padding: isFullWidth ? "0" : (isResponsive ? "32px 16px": "32px 72px"),
            },
            ".body-table":{
                width: "100%",
                minWidth: "100%"
            },
            ".body-section-mobile-padding":{
                padding: "32px 0px",
                backgroundColor: "#FFFFFF",
            },
            ".footer-table":{
                width: "100%",
                minWidth: "100%"
            },
            ".footer-section-mobile-padding":{
                padding: isResponsive ? "32px 24px" : "32px 56px",
                backgroundColor: "#EFEFEE",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
            }
        }
    }
}

export default style