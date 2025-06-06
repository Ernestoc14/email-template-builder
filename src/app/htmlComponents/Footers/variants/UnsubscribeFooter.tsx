import { Component } from "@/app/context/MasterJSONContext";
import { Box } from "@mui/material";


const UnsubscribeFooter = ({ data, langProp }: { data: Component, langProp: string }) => {

	return (
		<Box>
			<table align="center" cellPadding={0} cellSpacing={0} style={{ width: '100%', backgroundColor: "#EFEFEE" }}>
				<tbody>
					<tr>
						<td style={{ paddingBottom: '24px' }}>
							<table align="center" cellPadding={0} cellSpacing={0} style={{ margin: '0 auto' }}>
								<tbody>
									<tr>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://twitter.com/copaairlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/twitter-x.png" alt="Twitter" />
											</a>
										</td>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://www.facebook.com/copaairlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/facebook.png" alt="Facebook" />
											</a>
										</td>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://www.instagram.com/copaairlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/instagram.png" alt="Instagram" />
											</a>
										</td>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://www.youtube.com/copaairlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/youtube.png" alt="YouTube" />
											</a>
										</td>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://www.tiktok.com/@copaairlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/tiktok.png" alt="TikTok" />
											</a>
										</td>
										<td style={{ paddingRight: '8px' }}>
											<a href="https://linkedin.com/company/copa-airlines" style={{ display: 'block', height: '32px' }}>
												<img src="https://www.copaair.com/assets/linkedin.png" alt="LinkedIn" />
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td	align="center" style={{ fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '16px', color: '#666666', paddingBottom: '8px',}}>
							{
								// @ts-expect-error doesn't exist footer props
								data[langProp].text
							}
						</td>
					</tr>
					<tr>
						<td align="center" style={{ fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '16px', color: '#666666', }} >
							{
								// @ts-expect-error doesn't exist footer props
								data[langProp].secondText
							}{' '} 
								<a style={{ color: '#666666', fontWeight: 600, textDecoration: 'underline', }}
									// @ts-expect-error doesnt exist footer props
									href={`${ data[langProp].secondLink }`}
									target="_blank" rel="noopener noreferrer" >
									<span style={{ whiteSpace: 'nowrap' }}>
										{
											// @ts-expect-error doesn't exist footer props
											data[langProp].secondLinkText
										}
									</span>
								</a>
						</td>
					</tr>
					<tr>
						<td align="center" style={{ padding: '24px 0' }}>
							<a href="https://www.staralliance.com/en/" target="_blank" rel="noopener noreferrer">
								<img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width={198} height={18} />
							</a>
						</td>
					</tr>
					<tr>
						<td align="center" style={{ fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '16px', color: '#666666', }} >
							{
								// @ts-expect-error doesn't exist footer props
								data[langProp].unsubscribeText
							}{' '}
							<a  // @ts-expect-error doesn't exist footer props
								href={`${ data[langProp].unsubscribeLink }`}
								target="_blank" rel="noopener noreferrer" style={{ color: '#666666', fontWeight: 600, textDecoration: 'underline', }} >
									<span style={{ whiteSpace: 'nowrap' }}>
										{
											// @ts-expect-error doesn't exist footer props
											data[langProp].unsubscribeLinkText
										}
									</span>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</Box>
	)
}

export default UnsubscribeFooter;