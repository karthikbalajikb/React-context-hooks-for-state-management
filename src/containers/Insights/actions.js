export const actions = (dispatch) => {
    function testAction(){
        dispatch({
            type: 'TEST_ACTION_TYPE',
            payload: {},
        })
    }

    return {
        testAction,
    }
}