import {REQUEST_INDEX, SEARCH_INFO} from '../../constants'
import {IHome} from '../actions'
const home = (state : object = {}, action : IHome) : object => {
    switch (action.type) {
        case REQUEST_INDEX:
            return {}
        case SEARCH_INFO:
            return {}
        default:
            return state
    }

}
export default home
