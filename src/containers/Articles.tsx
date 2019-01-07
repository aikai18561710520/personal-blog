import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import Articles from '../components/Articles/Articles'

const mapStateToProps = (data : object) => ({data})
const mapDispatchToProps = (dispatch : any) => ({
    fetchArticles() {
        console.log(123)
    }
})
const ArticlesMap : any = connect(mapStateToProps, mapDispatchToProps)(Articles)

export default withRouter(ArticlesMap)
