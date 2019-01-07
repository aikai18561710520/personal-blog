import styled from 'styled-components'

export const ArticleWrapper = styled.div `
    box-sizing:border-box;
    padding: 20px 12px;
    .pagination{
        margin-top:30px;
    }
`

export const Item = styled.article `
    border-bottom:1px solid #ccc;
    position:relative;
    padding: 18px 0;
    word-wrap: break-word;
`

export const ItemPic = styled
    .img
    .attrs(props => ({ src: props.imgUrl }))
`
    max-width:100%;
    border:0;
    margin:10px 0 5px 0;
    border-radius: 8px;
    display: block;
`

export const Tit = styled.div `
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .tit_content{
        color:#333;
        font-size: 20px;
        font-weight :600;
        line-height:1.5;
    }
    .tit_date{
        color:#666;
        font-size:14px;
        line-height:2;
        text-align:right;
        white-space:nowrap;
    }
`

export const EntryContent = styled.div `
    font-size: 16px;
    color:#666;
    line-height:1.8;
    word-break:break-all;
`

export const CategoryTag = styled.span `
    max-width: 100px;
    box-sizing:border-box;
    padding:5px 0;
    transition: all .2s;
    cursor: pointer;
    line-height:1.5;
    color:#666;
    span {
        margin-left:4px;
    }
    :hover {
        color:#000;
        text-decoration:underline;
    }
`