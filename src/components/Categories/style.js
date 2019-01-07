import styled from 'styled-components'

export const CategoryWrapper = styled.div `
    padding: 20px 12px;
`

export const CategoryTit = styled.h3 `
    font-size: 1.5em;
    font-weight: bold;
`

export const PostsContent = styled.section `
    padding: 20px 10px;
    h3 {
        font-size: 20px;
        color: #666;
    }
`

export const LinkList = styled.ul `
    margin-left:25px;
    margin-top:20px;
    list-style: disc;
`
export const LinkItem = styled.li `
    box-sizing:border-box;
    font-size:16px;
    line-height: 2;
    margin-bottom: 6px;
    .link {
        color:#333;
        :hover{
            text-decoration:underline;
        }
    }
    .date{
        font-size: 13px;
        color: #666;
        line-height: 32px;
        margin-left: 10px;
        font-style: italic;
    }
`