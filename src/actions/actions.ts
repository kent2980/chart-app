export const UPDATE_SHARED_STATE = 'UPDATE_SHARED_STATE';

export const updateSharedState = (newValue: string) => ({
    type: UPDATE_SHARED_STATE,
    payload: newValue,
});