import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Categories from '../components/Categories/Categories'

const mapStateToProps = (data : object) => ({data})
const mapDispatchToProps = (dispatch : any) => ({})

const CategoriesMap : any = connect(mapStateToProps, mapDispatchToProps)(Categories)
export default withRouter(CategoriesMap)
