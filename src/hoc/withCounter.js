import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    counterIncrementAction: () => {
        dispatch(counterIncrement());
    },

    counterDecrementAction: (dispatch) => {
        dispatch(counterDecrement());
    }
})

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)