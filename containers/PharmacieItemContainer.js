import { connect } from 'react-redux';
import {fetchPharmacies} from "../actions/pharmacie";
import PharmacieItem from '../components/PharmacieItem';



const mapStateToProps = state => {
    return {
        loading: state.pharmacie.pharmacies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacieItem);