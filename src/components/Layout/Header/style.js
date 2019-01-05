import styled from 'styled-components'

export const HeaderBox = styled.div `
    width:100%;
    .ant_header{
        height:auto;
    }
`

export const Title = styled.h3 `
    color: #fff;
    font-size:24px;
    line-height:48px;
`

export const NavBar = styled.div `
    display:flex;
    font-size:14px;
    align-items:center;
    .nav_item{
        display:inline-block;
        color:#aaa;
        transition: all .2s;
        :hover{
            color:#fff;
        }
    }
`

export const PersonInfo = styled.div `
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    .item{
        display:flex;
        align-items:center;
        font-size:16px;
        font-weight:200;
        margin-right:16px;
        .label{
            color:#fff;
            margin-left:6px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
    }
`

export const Signature = styled.p `
    font-size:16px;
    color:#aaa;
    max-width:100%;
    word-break:break-all;
    line-height: 1;
`