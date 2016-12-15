import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
      case FETCH_WEATHER:
        // ES6 syntax that concats and flattens arg before and after comma
        return [ action.payload.data, ...state ];
    }

    return state;
}