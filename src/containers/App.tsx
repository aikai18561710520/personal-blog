import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import App from '../components/App/App'
import {REQUEST_INDEX} from '../constants'
import {IPayload} from '../store/actions'
interface IDataInterface {
    data : object
}
const mapStateToProps = ({data} : IDataInterface) => ({data})
const mapDispatchToProps = (dispatch : any) => ({
    fetchData(payload : IPayload) {
        dispatch({type: REQUEST_INDEX, payload})
    }
})
const AppMap : any = connect(mapStateToProps, mapDispatchToProps)(App)
export default withRouter(AppMap)
