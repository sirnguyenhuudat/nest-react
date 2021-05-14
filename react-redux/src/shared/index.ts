import {combineReducers} from "@reduxjs/toolkit";
import memberData, {MemberState} from "../member/member.reducer";

export interface IRootState {
    readonly memberData: MemberState
}

const rootReducers = combineReducers<IRootState> ({
    memberData
})

export default rootReducers;