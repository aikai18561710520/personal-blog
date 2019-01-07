import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import App from '../components/App/App'
import {REQUEST_INDEX, SEARCH_INFO} from '../constants'
import {IPayload} from '../store/actions'
interface IDataInterface {
    searchContent : string
    list : object[]
}
const mapStateToProps = (data : IDataInterface) => (data)
const mapDispatchToProps = (dispatch : any) => ({
    fetchData(payload : IPayload) {
        dispatch({type: REQUEST_INDEX, payload})
    },
    searchArticles(content : string) {
        dispatch({type: SEARCH_INFO, content})
    }
})
const AppMap : any = connect(mapStateToProps, mapDispatchToProps)(App)
export default withRouter(AppMap)
