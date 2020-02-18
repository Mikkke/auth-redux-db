import { connect } from "react-redux";
import Home from "../components/home";
import { signUpAction } from "../actions";

const mapStateToProps = (state, props) => {
    return state.login;
};

const mapDispatchToProps = dispatch => ({
    signUpAction: (values) => dispatch(signUpAction(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
