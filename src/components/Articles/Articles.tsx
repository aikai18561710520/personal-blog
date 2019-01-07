import {Pagination} from 'antd'
import QueueAnim from 'rc-queue-anim'
import * as React from 'react'
import ArticleItem from './ArticleItem'
import {ArticleWrapper} from './style'

class Articles extends React.Component {
    public state = {
        arr: [1, 2]
    }
    public render() {
        return (
            <ArticleWrapper>
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    {this
                        .state
                        .arr
                        .map((c) => (<ArticleItem key={c}/>))}
                </QueueAnim>

                <Pagination
                    className="pagination"
                    showQuickJumper={true}
                    defaultCurrent={1}
                    total={50}/>
            </ArticleWrapper>
        )
    }
}

export default Articles
