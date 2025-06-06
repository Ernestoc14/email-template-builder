const style = {
    container: {
        position: 'relative',
        ":hover":{
            ".box-icons":{
                display: 'flex'
            }
        },
        '.box-icons' :{
            gap: '8px',
            display: 'none',
            position: 'absolute',
            top: '0px',
            right: '0px',
            '.icons:first-of-type':{
                backgroundColor: '#FFC300'
            },
            '.icons': {
                backgroundColor: '#aa1e00',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '.icon':{
                    fontSize: '14px',
                    color: 'white',
                }
            }
        }
    }
}

export default style