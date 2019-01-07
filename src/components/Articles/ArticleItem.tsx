import {Icon} from 'antd'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {CategoryTag, EntryContent, Item, ItemPic, Tit} from './style'
const ArticleItem = () => {
    return (
        <Item>
            <ItemPic
                imgUrl='http://jspang.com/static/upload/20190102/9SpnvSzav06JfPUrVtc1hNu9.jpg'/>
            <Tit>
                <h4 className="tit_content">
                    <Link to="/login">20个Flutter实例视频教程 让你轻松上手工作</Link>
                </h4>
                <div className="tit_date">
                    <span>Irving</span>
                    <span>发布于</span>
                    <span>2019-01-06</span>
                </div>
            </Tit>
            <EntryContent>
                <p>这篇文章是Flutter基础的一个进阶教程，主要讲解的是在工作中一些常用的功能。学完这篇文章和视频，你可以轻松制作出80%以上工作中常用的Flutter复杂效果，对Flutter有更深刻的了解。</p>
            </EntryContent>
            <CategoryTag>
                <Icon
                    style={{
                    color: '#666',
                    fontSize: '16px'
                }}
                    type="tags"/>
                <span>Flutter</span>
            </CategoryTag>
        </Item>
    )
}

export default ArticleItem
