import {REQUEST_INDEX} from '../../constants'
import {IHome} from '../actions'
const home = (state : object = {}, action : IHome) : object => {
    switch (action.type) {
        case REQUEST_INDEX:
            return {}
        default:
            return state
    }

}
export default home
