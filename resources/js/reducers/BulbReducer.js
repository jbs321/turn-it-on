import {GET__BUILB_STATE, POST__TOGGLE_BULB} from "../actions/BulbAction";
import _ from 'lodash';

export default function (state = {}, action) {

    if(_.isUndefined(action.payload)) {
        return state;
    }

    let isOn = (action.payload.data.is_on);

    switch (action.type) {
        case GET__BUILB_STATE:
            return isOn;
            break;

        case POST__TOGGLE_BULB:
            return isOn ? 1:0;
            break;
    }

    return state;
}