import {REQUEST_ARTICLE, REQUEST_INDEX, SEARCH_INFO} from '../../constants'

export interface IPayload {
    pageNum : number
    pageSize : number
}
export interface IRequestInfo {
    type : REQUEST_INDEX
    payload : IPayload
}

export interface IArticle {
    type : REQUEST_ARTICLE
}
export interface ISearchInfo {
    type : SEARCH_INFO
}

export type IHome = IRequestInfo | ISearchInfo
