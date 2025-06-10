import { Component } from '@/app/context/MasterJSONContext';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
            padding: "0 !important",
            ".header-banner-desktop": {
                display: isResponsive ? "none !important" : "table-cell",
                width: "100% !important",
            },
            ".header-banner-mobile": {
                display: isResponsive ? "block !important" : "none",
            }
        }

    }
}

const ImageFullWidth = ({ data, langProp, isResponsiveView }: { data: Component, langProp: string, isResponsiveView?: boolean }) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))

    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ width: '100%', minWidth: '100%' }} >
                <tbody>
                    <tr>    
                        <td className="header-banner-desktop">
                            <img height="auto" 
                                // @ts-expect-error doesn't exist image props
                                src={`${data[langProp].desktopURL}`} style={{ border: 0, display: 'block', outline: 'none', textDecoration: 'none', width: '100%', height: 'auto', lineHeight: '100%', }} 
                                // @ts-expect-error doesn't exist image props
                                alt={ data[langProp].altText } width={800} />    
                        </td>
                        <td className="header-banner-mobile" style={{ display: 'none' }} >
                            <img height="auto" 
                                // @ts-expect-error doesn't exist image props
                                src={`${data[langProp].mobileURL}`} style={{ border: 0, display: 'block', outline: 'none', textDecoration: 'none', width: '100%', height: 'auto', lineHeight: '100%', }} 
                                // @ts-expect-error doesn't exist image props
                                alt={ data[langProp].altText } />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default ImageFullWidth;