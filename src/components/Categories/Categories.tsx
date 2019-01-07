import QueueAnim from 'rc-queue-anim'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {CategoryTit, CategoryWrapper, LinkItem, LinkList, PostsContent} from './style'
class Categories extends React.Component {
    public render() {
        return (
            <CategoryWrapper>
                <CategoryTit>Categories</CategoryTit>
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    {[1, 2, 3].map(c => (
                        <PostsContent key={c}>
                            <h3>Flutter</h3>
                            <LinkList>
                                {[1, 2, 3, 4].map(x => (
                                    <LinkItem key={x}>
                                        <Link className="link" to="/login">20个Flutter实例视频教程 让你轻松上手工作</Link>
                                        <span className="date">2019-01-06</span>
                                    </LinkItem>
                                ))}
                            </LinkList>
                        </PostsContent>
                    ))}
                </QueueAnim>
            </CategoryWrapper>
        )
    }
}

export default Categories
