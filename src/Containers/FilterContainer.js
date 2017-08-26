import Filter from '../Components/Filter'
import { connect } from 'react-redux'
import { getAllBeers } from '../Helpers/ApiHelpers'
import { setName, setAbv, setIbu, setYear, setOrder, setItems, setNumberOfPages, clearFilter, toggleLoading } from '../Actions/actions'

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
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onNameChange: value => dispatch(setName(value)),
      onAbvChange: value => dispatch(setAbv(value)),
      onIbuChange: value => dispatch(setIbu(value)),
      onYearChange: value => dispatch(setYear(value)),
      onOrderChange: value => dispatch(setOrder(value)),
      reset: () => dispatch(clearFilter()),
      getItems: async (page, beername, ibu, abv, year, order) =>{
           dispatch(toggleLoading());
           let result = await getAllBeers(page, beername, ibu, abv, year, order);
           dispatch(toggleLoading());
           dispatch(setItems(result.items));
           dispatch(setNumberOfPages(result.numberOfPages));
      }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
  
export default FilterContainer