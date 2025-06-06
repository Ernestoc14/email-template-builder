import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react"

const getStyles = (isResponsive: boolean | undefined) => {
    return {
        container: {
			".stopover-img-container": {
				width: isResponsive ? "100% !important" : '317px',
				display: isResponsive ? "block !important" : 'table-cell',
				borderBottomLeftRadius: isResponsive ? '0 !important' : '8px',
				borderTopRightRadius: isResponsive ? '8px !important' : '0',
			},
			".stopover-img-mobile": {
				display: isResponsive ? "inline-block !important" : 'none',
				width: "146px !important",
			}, ".imageStopoverDesktop": {
				display: isResponsive ? "none !important" : 'inline-block',
			},".stopoverDesc": {
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

const BannerStopover = ({ data, langProp, isResponsiveView }: { data: Component, langProp: string, isResponsiveView?: boolean }) => {
	const [styles, setStyle] = useState(getStyles(isResponsiveView))

	useEffect(() => {
		setStyle(getStyles(isResponsiveView))
	}, [isResponsiveView])

	return (
		<Box sx={styles.container}>
			<table width="672" cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0, border: '1px solid #E2E2E1', borderRadius: '8px', backgroundColor: '#FFFFFF', borderCollapse: 'separate', width: '100%',}}>
        <tbody>
					<tr>
						<td style={{ padding: 0, verticalAlign: 'top', borderRadius: '8px' }} className="td-img-container" >
							<table cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%' }} >
								<tbody>
									<tr>
										<th align="center" className="stopover-img-container" style={{ padding: '16px 0', width: '317px', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#EFF5FF', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', }} > 
											<img className="imageStopoverDesktop" src="https://www.copaair.com/webassets/images/stopover/stopover-stamp-blue-es.png" style={{ borderRadius: '8px 0 0 8px', width: '146px', }} width={146} alt="Stopover" />
											<img className="stopover-img-mobile" src="https://www.copaair.com/webassets/images/stopover/stopover-stamp-blue-es.png" alt="Stopover" style={{ display: 'none', borderRadius: '0 0 0 0', }} width={146} />
										</th>
										<th className="stopoverDesc" style={{ verticalAlign: 'middle', fontSize: '16px', color: '#0E68FF', lineHeight: '24px', padding: '0 24px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', textAlign: 'left', }} >
											<h4 style={{ color: '#0032A0', fontSize: '16px', margin: '0 0 4px 0', }} className="eligiste-title">
												{
													// @ts-expect-error doesn't exist header props
													data[langProp].title
												}
											</h4>
											<p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#0032A0', lineHeight: '16px', fontWeight: 'normal', }} className="descubre-actividades" >
												{
													// @ts-expect-error doesn't exist header props
													data[langProp].description
												}
											</p>
											<table cellPadding={0} cellSpacing={0} role="presentation" width="100%" >
												<tbody>	
													<tr>
														<td style={{ padding: 0 }} className="cta-stopover-mobile">
															<div className="book-info-div-padd-2" style={{ textAlign: 'left' }} >	
																<a className="btn-blue" href="https://www.stopoverinpanama.com/#anchor_itinerary" style={{ border: '1px solid #0032A0', display: 'inline-block', color: '#0032A0', backgroundColor: 'transparent', textDecoration: 'none', borderRadius: '40px', margin: 0, textAlign: 'center', padding: '8px 0', fontSize: '12px', lineHeight: 1.2, width: '100%',fontWeight: 600, background: '#ffffff', }}>
																	{
																		// @ts-expect-error doesn't exist header props
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

export default BannerStopover;