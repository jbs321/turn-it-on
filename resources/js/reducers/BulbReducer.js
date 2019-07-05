import {GET__BUILB_STATE, POST__TOGGLE_BULB} from "../actions/BulbAction";

export default function (state = {}, action) {

    switch (action.type) {
        case GET__BUILB_STATE:
            return action.payload;
            break;

        case POST__TOGGLE_BULB:
            return (state == 1) ? 0 : 1;
            break;
    }

    return state;
}