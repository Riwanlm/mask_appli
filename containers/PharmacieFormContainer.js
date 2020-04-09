import { connect } from 'react-redux';
import { addPharmacie } from "../actions/addPharmacie";
import PharmacieForm from "../components/PharmacieForm";




const mapStateToProps = state => {
    return{};
};

const mapDispatchToProps = dispatch => {
    return {
        addPharmacie: pharmacie => dispatch (addPharmacie(pharmacie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (PharmacieForm);