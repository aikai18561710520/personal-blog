import {Input} from 'antd'
import * as React from 'react'
const {Search} = Input
import {SearchBox, SideBox} from './style'

// export interface IInfo{ }
export interface IProps {
    searchArticles : (content : string) => void
}
const SideBar = (props : IProps) => {
    return (
        <SideBox>
            <SearchBox>
                <div className="tit">Search</div>
                <Search placeholder="search" onSearch={props.searchArticles}/>
            </SearchBox>
        </SideBox>
    )
}

export default SideBar
