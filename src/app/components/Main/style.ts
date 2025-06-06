const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        ".header":{
            backgroundColor: "#0032a0",
            width: "100%",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems:'center',
            padding: '25px 20px',
            ".title":{
                textAlign: "right", 
                flex: 1,
                color: 'white',
                fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                fontWeight: '700',
                fontSize: "28px"
            },
            ".logos":{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }
        },
        ".section":{
            display: "flex",
            width: "100%",
            height: "calc(100% - 102px)",
            gap: '24px',
            justifyContent: 'space-between',
            ".sidebar":{
                width: "20%",
                backgroundColor: 'white',
                border: '1px solid#d6d6d6',
                '> h6':{
                    padding: '20px  0 16px 16px',
                    fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                    fontWeight: '700',
                    fontSize: "24px",
                    color: '#0032A0',
                },
                ".tools":{
                    ".toggles":{
                        display:'flex',
                        flexDirection: 'column',
                        ".toggle-section":{
                            width: "100%",
                            borderBottom: "solid 1px #cccccc",
                            padding: "16px 20px",
                            ".template-title":{
                                fontFamily: "SuisseIntl, Arial, Helvetica, sans-serif",
                                color: '#0032A0',
                                fontWeight: '600',
                                fontSize: '24px'
                            },
                            ".sub-heading":{
                                fontFamily: "Gilroy, Arial, Helvetica, sans-serif",
                                fontWeight: '700',
                                fontSize: "16px"
                            }
                        },
                        '.breakpoints':{
                            width: '100%',
                            ">button": {
                                width: '100%'
                            }
                        }
                    }
                }
            }
        },
        ".canvas":{
            width: "80%",  
            height: '100%',
            overflow: 'auto',
            scrollbarWidth: 'none', 
        }
    }
}

export default style