import Search from '../Components/Search'
import { connect } from 'react-redux'
import { setFilter } from '../Actions/filter-actions'
import { setItems, toggleLoading, toggleFavorite, incrementPage, decrementPage, setPage, setNumberOfPages } from '../Actions/search-actions'
import { getAllBeers, toggleFavoriteBeer } from '../Helpers/ApiHelpers'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'


const refreshItems = async (dispatch, page, beername, ibu, abv, year, order) =>{
    const cookie = AuthenticationHelpers.getAuthenticationCookie(); //Defined within the function to handle the case where the cookie's availability changes
    dispatch(toggleLoading());
    let result = await getAllBeers(page, beername, ibu, abv, year, order, cookie);
    dispatch(toggleLoading());
    dispatch(setItems(result.items));
    dispatch(setNumberOfPages(result.numberOfPages));
}

//Stating how props passed to the child component will be related to the state
const mapStateToProps = state => {
    console.log(state);
    return {
      page: state.search.page,
      numberOfPages: state.search.numberOfPages,
      beername: state.filter.name,
      abv: state.filter.abv,
      ibu: state.filter.ibu,
      year: state.filter.year,
      order: state.filter.order,
      items: state.search.items,
      loading: state.loading.isLoading
    }
}

//Declaring the function props which will (on getting called by the child component), dispatch actions that will modify the state
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
        setFilter: async (newFilter) => {
            newFilter.name = newFilter.name || '';
            newFilter.abv = newFilter.abv || '';
            newFilter.ibu = newFilter.ibu || '';
            newFilter.year = newFilter.year || '';
            newFilter.order = newFilter.order || ''; 
            newFilter.page = newFilter.page || 1; 
            dispatch(setFilter(newFilter));    
            dispatch(setPage(newFilter.page));
            await refreshItems(dispatch, newFilter.page, newFilter.name, newFilter.ibu, newFilter.abv, newFilter.year, newFilter.order);
        },
        toggleFav: async(id) => {
            const cookie = AuthenticationHelpers.getAuthenticationCookie();
            toggleFavoriteBeer(cookie, id);
            dispatch(toggleFavorite(id));
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
  
export default SearchContainer