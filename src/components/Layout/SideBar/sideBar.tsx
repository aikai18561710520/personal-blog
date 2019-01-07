import {Input} from 'antd'
import * as React from 'react'
import {Link} from 'react-router-dom'
const {Search} = Input
import {SearchBox, SearchResult, SideBox} from './style'

// export interface IInfo{ }
export interface IProps {
    searchArticles : (content : string) => void,
    list : object[],
    searchContent : string
}
const SideBar = (props : IProps) => {
    return (
        <SideBox>
            <SearchBox>
                <div className="tit">Search</div>
                <Search placeholder="search" onSearch={props.searchArticles}/>
            </SearchBox>
            {props.searchContent.length > 0 && (
                <SearchResult>
                    {props
                        .list
                        .map((c, i) => (
                            <li key={i}>
                                <Link to="/articles">归档</Link>
                            </li>
                        ))}
                </SearchResult>
            )}
        </SideBox>
    )
}

export default SideBar
