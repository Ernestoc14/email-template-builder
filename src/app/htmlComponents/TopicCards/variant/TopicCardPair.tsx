import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const getStyles =(isResponsive: boolean | undefined) => {
    return {
        container: {
            backgroundColor: "#ffffff",
            ".block-mobile-item": {
                ...(isResponsive && {
                    display: "block !important",
                })
            },
            ".reorder-mid": {
                ...(isResponsive && {
                    display: "block !important",
                })
            },
            ".img-mb-padding": {
                ...(isResponsive && {
                    padding: "0 0 24px 0 !important",
                })
            },
            ".topic-full-width": {
                ...(isResponsive && {
                    width: "100% !important",
                }) 
            }
        }
    }
}

const TopicCardPair = ({ data, langProp, isResponsiveView } : { data: Component, langProp: string, isResponsiveView?: boolean }) => {
    const [styles, setStyles] = useState(getStyles(isResponsiveView))

    useEffect(() => {
        setStyles(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={{ width: '100%', borderCollapse: 'separate' }}>
                <tbody>
                    <tr>
                        <td className="block-mobile-item">
                            <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={{ width: '100%', borderCollapse: 'separate' }}>
                                <tbody>
                                    <tr>
                                        <td className="reorder-mid img-mb-padding" style={{ paddingRight: '24px' }}>
                                            <table className="topic-full-width" style={{ border: '1px solid #CCCCCB', borderRadius: '16px', borderCollapse: 'separate', borderSpacing: 0,display: 'inline-block',height: '100%', width: '324px'}} >
                                                <tbody>
                                                    <tr>
                                                        <td style={{ lineHeight: 0, padding: 0 }}>
                                                            <img src={`${
                                                                // @ts-expect-error doesn't exist title props
                                                                data[langProp].imgUrl1}`} style={{ width: '100%', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', lineHeight: 0}} width={324} alt="Attenza" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '16px 24px', verticalAlign: 'top', textAlign: 'left' }}>
                                                            <p style={{ fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif', fontSize: '16px', margin: '0 0 8px', fontWeight: 600, lineHeight: '24px', color: '#333333'}} >
                                                                {
                                                                // @ts-expect-error doesn't exist topic card props
                                                                data[langProp].title1
                                                                }
                                                            </p>
                                                            <p style={{ fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif',fontSize: '14px', fontStyle: 'normal',fontWeight: 400, lineHeight: '20px', margin: '0',color: '#666666'}} >
                                                                {
                                                                // @ts-expect-error doesn't exist topic card props
                                                                data[langProp].description1
                                                                }
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '0 24px 16px' }}>
                                                            <table cellSpacing={0} cellPadding={0} style={{ width: 'auto' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left" valign="middle" style={{ color: '#0E68FF', fontSize: '12px', verticalAlign: 'middle'}}>
                                                                            <a href={`${ 
                                                                                        // @ts-expect-error doesn't exist title props
                                                                                        data[langProp].CTALink1}`}
                                                                                        target="_blank" rel="noopener noreferrer" style={{ color: '#0E68FF', textDecoration: 'none', fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif', fontSize: '14px', lineHeight: '20px',fontWeight: 500 }} >
                                                                                    <span>
                                                                                        {
                                                                                        // @ts-expect-error doesn't exist topic card props
                                                                                        data[langProp].labelLink1
                                                                                        }
                                                                                    </span>
                                                                            </a>
                                                                        </td>
                                                                        <td width={24} height={24} align="center" valign="middle" style={{ verticalAlign: 'middle', lineHeight: 0 }} >
                                                                            <a href={`${
                                                                                // @ts-expect-error doesn't exist title props
                                                                                data[langProp].CTALink1}`} 
                                                                                target="_blank" rel="noopener noreferrer">
                                                                                <img src="https://www.copaair.com/webassets/images/icon-chevron-arrow-light-blue.png" alt="arrow" height={24} width={24} />
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td className="reorder-mid">
                                            <table className="topic-full-width" style={{ border: '1px solid #CCCCCB', borderRadius: '16px', borderCollapse: 'separate', borderSpacing: 0, display: 'inline-block', height: '100%', width: '324px'}} >
                                                <tbody>
                                                    <tr>
                                                        <td style={{ lineHeight: 0, padding: 0 }}>
                                                            <img src={`${
                                                                // @ts-expect-error doesn't exist title props
                                                                data[langProp].imgUrl2}`} style={{ width: '100%', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', lineHeight: 0 }} width={324} alt="Attenza" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '16px 24px', verticalAlign: 'top', textAlign: 'left' }}>
                                                            <p style={{ fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif', fontSize: '16px', margin: '0 0 8px', fontWeight: 600, lineHeight: '24px', color: '#333333' }} >
                                                                {
                                                                // @ts-expect-error doesn't exist topic card props
                                                                data[langProp].title2
                                                                }
                                                            </p>
                                                            <p style={{ fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px', margin: '0', color: '#666666'}} >
                                                                {
                                                                // @ts-expect-error doesn't exist topic card props
                                                                data[langProp].description2
                                                                }
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '0 24px 16px' }}>
                                                            <table cellSpacing={0} cellPadding={0} style={{ width: 'auto' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left" valign="middle" style={{ color: '#0E68FF', fontSize: '12px', verticalAlign: 'middle'}} >
                                                                            <a href={`${
                                                                                // @ts-expect-error doesn't exist title props
                                                                                data[langProp].imgCTALink2}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0E68FF', textDecoration: 'none', fontFamily: 'SuisseIntl, Helvetica, Arial, sans-serif', fontSize: '14px', lineHeight: '20px', fontWeight: 500 }} >
                                                                                <span>
                                                                                    {
                                                                                    // @ts-expect-error doesn't exist topic card props
                                                                                    data[langProp].labelLink2
                                                                                    }
                                                                                </span>
                                                                            </a>
                                                                        </td>
                                                                        <td width={24} height={24} align="center" valign="middle" style={{ verticalAlign: 'middle', lineHeight: 0 }} > 
                                                                            <a href={`${
                                                                                // @ts-expect-error doesn't exist title props
                                                                                data[langProp].imgCTALink2}`} target="_blank" rel="noopener noreferrer" >
                                                                                <img src="https://www.copaair.com/webassets/images/icon-chevron-arrow-light-blue.png" alt="arrow" height={24} width={24} />
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default TopicCardPair