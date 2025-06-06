import { Component } from "@/app/context/MasterJSONContext"

const InformativeBoxSimple = ({data, langProp} : {data: Component, langProp: string}) => {
    return (
        <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{width:"100%", backgroundColor: "#fff"}}>
            <tbody>
                <tr>
                    <td style={{verticalAlign: 'top', paddingRight: '16px', width: '40px'}}>
                        <img style={{verticalAlign:'top'}} width="40" 
                        // @ts-expect-error doesn't exist button props
                        src={data[langProp].imgUrl} alt="comida" /> 
                    </td>
                    <td style={{verticalAlign: 'top'}}>
                        <p style={{color:'#333333', fontWeight:'600', lineHeight: '20px', fontSize: '14px', margin: 0}}>
                            {
                                // @ts-expect-error doesn't exist button props
                                data[langProp].title
                            }
                        </p>
                        <p style={{color:'#666666', fontWeight: '400', lineHeight: '20px', fontSize: '14px', margin: '0'}}>
                            {
                                // @ts-expect-error doesn't exist button props
                                data[langProp].description
                            }
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default InformativeBoxSimple