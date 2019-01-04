import {REQUEST_ARTICLE, REQUEST_INDEX} from '../../constants'

export interface IPayload {
    pageNum : number
    pageSize : number
}
export interface IHome {
    type : REQUEST_INDEX
    payload : IPayload
}

export interface IArticle {
    type : REQUEST_ARTICLE
}
