import Search from '../Components/Search'
import { connect } from 'react-redux'
import { incrementPage, decrementPage, setItems, setNumberOfPages, toggleLoading } from '../Actions/actions'
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
      loading: state.loading.isLoading
    }
}

const refreshItems = async (dispatch, page, beername, ibu, abv, year, order) =>{
    dispatch(toggleLoading(true));
    let result = await getAllBeers(page, beername, ibu, abv, year, order);
    dispatch(toggleLoading(false));
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