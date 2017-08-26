import Search from '../Components/Search'
import { connect } from 'react-redux'
import { incrementPage, decrementPage, setItems, setNumberOfPages, setLoading } from '../Actions/actions'
import { getAllBeers } from '../Helpers/ApiHelpers'

const mapStateToProps = state => {
    return {
      page: state.page,
      numberOfPages: state.numberOfPages,
      beername: state.filter.name,
      abv: state.filter.abv,
      ibu: state.filter.ibu,
      year: state.filter.year,
      order: state.filter.order,
      items: state.items,
      loading: state.loading
    }
}

const refreshItems = async (dispatch, page, beername, ibu, abv, year, order) =>{
    dispatch(setLoading(true));
    let result = await getAllBeers(page, beername, ibu, abv, year, order);
    dispatch(setLoading(false));
    dispatch(setItems(result.items));
    dispatch(setNumberOfPages(result.numberOfPages));
}

const mapDispatchToProps = dispatch => {
    return {
        nextPage: async (page, beername, ibu, abv, year, order) =>{
            dispatch(incrementPage());
            await refreshItems(dispatch, page, beername, ibu, abv, year, order);
        },
        previousPage: async (page, beername, ibu, abv, year, order) =>{
            dispatch(decrementPage());
            await refreshItems(dispatch, page, beername, ibu, abv, year, order);
        },
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
  
export default SearchContainer