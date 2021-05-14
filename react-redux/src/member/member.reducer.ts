import {REQUEST, FAILURE, SUCCESS} from "../shared/action-type";

export const ACTION_TYPE = {
    MEMBER_LIST: 'MEMBER_LIST'
}

export enum MEMBER_ACTION {
    None,
    Request,
    Error,
    Success
}

const initialState = {
    action: MEMBER_ACTION.None,
}

export type MemberState = Readonly<typeof initialState>;

const MemberReducer = (state: MemberState = initialState, action: any): MemberState => {
    switch (action.type) {
        case ACTION_TYPE.MEMBER_LIST:
            return {
                ...state,
                action: MEMBER_ACTION.None
            }
        case REQUEST(ACTION_TYPE.MEMBER_LIST):
            return {
                ...state,
                action: MEMBER_ACTION.Request
            }
        case FAILURE(ACTION_TYPE.MEMBER_LIST):
            return {
                ...state,
                action: MEMBER_ACTION.Error
            }
        case SUCCESS(ACTION_TYPE.MEMBER_LIST):
            return {
                ...state,
                action: MEMBER_ACTION.Success
            }
        default:
            return state;
    }
}

export default MemberReducer;