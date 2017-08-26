import Filter from '../Components/Filter'
import { connect } from 'react-redux'
import { getAllBeers } from '../Helpers/ApiHelpers'
import { setName, setAbv, setIbu, setYear, setOrder, clearFilter, toggleFilter } from '../Actions/filter-actions'
import { setNumberOfPages,  resetPage } from '../Actions/page-actions'
import { setItems, toggleLoading } from '../Actions/item-actions'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

const getYears = () => {
    let result = [];
    for(let i = 2017; i >= 1900; i--) {
        result.push({value: i, label: i})
    }
    return result;
}

const getOrderingCriteria = (state) => {
    return [{value: "name", label:"Name"}, 
    {value: "abv", label:"ABV"}, 
    {value: "ibu", label:"IBU"}, 
    {value: "createDate", label:"Creation Date"}, 
    {value: "glasswareId", label:"Glassware"}, 
    {value: "availableId", label:"Availability"}, 
    {value: "isOrganic", label:"Organic"}];
}

const refreshItems = async (dispatch, page, beername, ibu, abv, year, order) =>{
    dispatch(toggleLoading());
    let cookie = AuthenticationHelpers.getAuthenticationCookie();
    let result = await getAllBeers(page, beername, ibu, abv, year, order, cookie);
    dispatch(toggleLoading());
    dispatch(setItems(result.items));
    dispatch(setNumberOfPages(result.numberOfPages));
}

const mapStateToProps = state => {
    return {
      beername: state.filter.name,
      abv: state.filter.abv,
      ibu: state.filter.ibu,
      year: state.filter.year,
      order: state.filter.order,
      items: state.filter.items,
      page: state.page,
      yearOptions: getYears(),
      orderOptions: getOrderingCriteria(),
      filterCollapsed: state.filter.collapsed
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onNameChange: value => dispatch(setName(value)),
      onAbvChange: value => dispatch(setAbv(value)),
      onIbuChange: value => dispatch(setIbu(value)),
      onYearChange: value => dispatch(setYear(value)),
      onOrderChange: value => dispatch(setOrder(value)),
      reset: async () => {
          dispatch(resetPage());
          dispatch(clearFilter());
          await refreshItems(dispatch, 1, '', '', '', '', '');
      },
      getItems: async (beername, page, ibu, abv, year, order, resetPageNumber) => {
          if(resetPageNumber) {
              dispatch(resetPage());
              page = 1;
          }
          await refreshItems(dispatch, page, beername, ibu, abv, year, order);
      },
      toggleFilter: () => dispatch(toggleFilter())
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
  
export default FilterContainer