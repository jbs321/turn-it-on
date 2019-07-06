export const GET__BUILB_STATE = 'get__bulb_state';
export const POST__TOGGLE_BULB = 'post__toggle_bulb';

export function getBulbState() {
    const request = axios.get("/api/bulb/1");

    return {
        type: GET__BUILB_STATE,
        payload: request
    }
}

export function changeBulbState(state = 1) {
    if (!_.includes([0, 1], state)) {
        throw new Error("state doesn't exists");
    }

    const request = axios.post("/api/bulb/1");

    return {
        type: POST__TOGGLE_BULB,
        payload: request
    }
}