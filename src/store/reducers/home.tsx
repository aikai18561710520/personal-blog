import {REQUEST_INDEX, SEARCH_INFO} from '../../constants'
import {IHome} from '../actions'
const defaultState : object = {
    searchContent: '',
    list: [
        {
            label: '1'
        }, {
            label: '1'
        }, {
            label: '1'
        }, {
            label: '1'
        }
    ]
}
const home = (state : object = defaultState, action : IHome) : object => {
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
