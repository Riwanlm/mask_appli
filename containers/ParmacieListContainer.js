import { connect } from 'react-redux';
import { fetchPharmacies } from "../actions/pharmacie";
import PharmaciesList from "../components/PharmacieList";


const mapStateToProps = state => {
    return {
        pharmacies: state.pharmacie.pharmacies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadPharmacies: () => dispatch(fetchPharmacies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmaciesList);