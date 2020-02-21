
import { TOGGLE_VIEW, DRAWER, LABEL_ID } from './ActionType'

export const toggleView = () => {
    return {
        type: TOGGLE_VIEW
    }
}

export const openDrawer = () => {
    return {
        type: DRAWER
    }
}

export const label_id = (labelid) => {
    console.log(labelid);
    return {
        type: LABEL_ID,
        payload: labelid
    }

}

