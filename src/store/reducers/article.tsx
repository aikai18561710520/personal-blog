import {REQUEST_ARTICLE} from '../../constants'
import {IArticle} from '../actions'
const article = (state : object = {}, action : IArticle) => {
    switch (action.type) {
        case REQUEST_ARTICLE:

            return {}

        default:
            return state
    }
}
export default article
