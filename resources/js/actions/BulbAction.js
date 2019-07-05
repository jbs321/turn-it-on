export const GET__BUILB_STATE = 'get__bulb_state';
export const POST__TOGGLE_BULB = 'post__toggle_bulb';

export function getBulbState() {
    return {
        type: GET__BUILB_STATE,
        payload: 1
    }
}

export function changeBulbState(state = 1) {
    if (!_.includes([0, 1], state)) {
        throw new Error("state doesn't exists");
    }

    return {
        type: POST__TOGGLE_BULB,
        payload: state
    }
}