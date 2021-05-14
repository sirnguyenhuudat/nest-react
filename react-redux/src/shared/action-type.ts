export const REQUEST = (actionType: string) => `${actionType}_PENDING`;
export const FAILURE = (actionType: string) => `${actionType}_REJECT`;
export const SUCCESS = (actionType: string) => `${actionType}_FULFILLED`;