import styled from 'styled-components'
import * as GStyle from '../../../common/globalStyle'
export const SideBox = styled.div `
    .tit{
        font-size:${GStyle.fontTit};
        color:${GStyle.titColor};
        font-weight:bold;
        margin-bottom:5px;
    }
`
export const SearchBox = styled.div `
    font-size:16px;
`

export const SearchResult = styled.ul `
    font-size:14px;
    padding-top:10px;
    padding-left:10px;
`