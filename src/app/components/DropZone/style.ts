const style = {
    container: {
        marginTop: '16px',
        border: "1px dashed #d1d1d1",
        height: "100px",
        padding: "8px",
        borderRadius: '16px',
    },
    iconBox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        gap: '12px'
    },
    alert:{
        position: 'fixed',
        top: '20px',
        width: '600px',
        right: 0,
        animation: 'slideInOut 5s ease-in-out forwards',
        '@keyframes slideInOut': {
            '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
            },
            '10%': {
            transform: 'translateX(0)',
            opacity: 1,
            },
            '90%': {
            transform: 'translateX(0)',
            opacity: 1,
            },
            '100%': {
            transform: 'translateX(100%)',
            opacity: 0,
            },
        },
    }
}

export default style