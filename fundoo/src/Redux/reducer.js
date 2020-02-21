import {
    TOGGLE_VIEW, DRAWER, LABEL_ID
} from "./ActionType";

export const initialState = {
    view: true,
    label_id: '',
    openDrawer: false

};

const reducer = (State = initialState, action) => {
    switch (action.type) {

        case DRAWER: {
            return {
                ...State,
                openDrawer: !State.openDrawer
            };
        }

        case LABEL_ID: {
            return {
                ...State,
                label_id: action.payload
            };
        }


        case TOGGLE_VIEW: {
            return {
                ...State,
                view: !State.view
            };
        }

        default:
            return State;
    }
};

export default reducer;
