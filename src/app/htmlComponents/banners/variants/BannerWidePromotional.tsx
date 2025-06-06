import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const getStyles = (isResponsive: boolean | undefined) => {
	return {
        container: {
            ".stopover-table": {
                borderTopLeftRadius: isResponsive ? '32px !important' : '0',
                borderTopRightRadius: isResponsive ? '32px !important' : '0',
            },
            ".stopover-img-container": {
				display: isResponsive ? "block !important" : 'table-cell',
				borderRadius: "0 !important",
			},
            ".imgStopoverMobile" : {
                display: isResponsive ? "inline-block !important" : 'none',
            },
			".stopover-img-mobile": {
				display: isResponsive ? "inline-block !important" : 'none',
				width: "100% !important",
			}, ".imgStopoverDesktop": {
				display: isResponsive ? "none !important" : 'inline-block',
			}, ".stopoverImg": {
                display: isResponsive ? "inline-block !important" : 'table-cell',
            }, ".stopoverDesc": {
				display: isResponsive ? "block !important" : 'table-cell',
				padding: isResponsive ? "6px 16px !important" : '0px',
			},".eligiste-title": {
				padding: isResponsive ? "24px 24px 0 !important" : '0px',
				fontSize: isResponsive ? "14px !important" : '16px',
				lineHeight: isResponsive ? "18px" : '24px',
			},".descubre-actividades": {
				margin: isResponsive ? "8px 24px 8px !important" : '0px',
				padding: isResponsive ? "0 0 10px 0 !important" : '0px',
			},".cta-stopover-mobile": {
				padding: isResponsive ? "0 24px 24px !important" : '0px',
			},".book-info-div-padd-2": {
				margin: isResponsive ? "0 !important" : '0px',
				padding: isResponsive ? "0 10px 0 0 !important" : '0px',
				textAlign: isResponsive ? "left !important" : 'center',
			}
        }
    }
}

const BannerWidePromotional = ({ data, langProp, isResponsiveView } : { data: Component, langProp: string, isResponsiveView?: boolean}) => {
    const [styles, setStyle] = useState(getStyles(isResponsiveView))

    useEffect(() => {
        setStyle(getStyles(isResponsiveView))
    }, [isResponsiveView])

    return (
        <Box sx={styles.container}>
            <table className="stopover-table" cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0, border: '1px solid #E2E2E1', borderRadius: '8px', backgroundColor: '#FFFFFF', borderCollapse: 'separate', width: '100%', }}>
                <tbody>
                    <tr>
                        <td style={{ padding: 0, verticalAlign: 'top', borderRadius: '8px', }} className="td-img-container" >
                            <table cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <th className="stopoverImg" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', lineHeight: 0, width: '308px',}}>
                                            <img  className="imgStopoverDesktop"  src={ 
                                                // @ts-expect-error doesn't exist banner props
                                                data[langProp].imageUrl ? data[langProp].imageUrl : "https://www.copaair.com/webassets/images/stopover-panama-la-vieja.jpeg"
                                            } alt="Stopover" height={159.5} style={{ height: '159.5px', borderRadius: '8px 0 0 8px', }} />
                                            <img className="imgStopoverMobile" src={
                                                // @ts-expect-error doesn't exist banner props
                                                data[langProp].imageUrl ? data[langProp].imageUrl : "https://www.copaair.com/webassets/images/Mobile-Stopover-ES.png"} alt="Stopover" width={317}/>
                                        </th>
                                        <th className="stopoverDesc" style={{ verticalAlign: 'middle', fontSize: '16px', color: '#0E68FF', lineHeight: '24px', padding: '0 20px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', textAlign: 'left', }} >
                                            <h4 style={{color: '#0032A0', fontSize: '16px', margin: '0 0 4px 0',}} className="eligiste-title">
                                                {
                                                    // @ts-expect-error doesn't exist banner props
                                                    data[langProp].title
                                                }
                                            </h4>
                                            <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#0032A0', lineHeight: '16px', fontWeight: 'normal', }} className="descubre-actividades" >
                                                {
                                                    // @ts-expect-error doesn't exist banner props
                                                    data[langProp].description
                                                }
                                            </p>
                                            <table cellPadding={0} cellSpacing={0} role="presentation" width="100%" className="outlook-stopover-top-margin" >
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: 0 }} className="cta-stopover-mobile">
                                                            <div className="book-info-div-padd-2" style={{ textAlign: 'left' }} >
                                                                <a className="btn-blue" href={
                                                                    // @ts-expect-error doesn't exist header props
                                                                    data[langProp].buttonLink
                                                                } style={{ border: '1px solid #0032A0', display: 'inline-block', color: '#0032A0', backgroundColor: 'transparent', textDecoration: 'none', borderRadius: '40px', margin: 0, textAlign: 'center', padding: '8px 0', fontSize: '12px', lineHeight: 1.2, width: '100%', fontWeight: 600, background: '#ffffff', }} >
                                                                    {
                                                                        // @ts-expect-error doesn't exist banner props
                                                                        data[langProp].buttonLabel
                                                                    }
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </th>
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

export default BannerWidePromotional;