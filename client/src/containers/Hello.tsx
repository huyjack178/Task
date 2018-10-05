import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import Hello from "../components/Hello";
import { StoreState } from "../types/index";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    // tslint:disable-next-line:object-literal-sort-keys
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
