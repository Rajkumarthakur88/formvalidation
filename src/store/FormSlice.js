const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    form1: [],
    form2: [],
    form3: []
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addStepfirst(state, action) {
            state.form1.push(action.payload)
        },
        addStepsecond(state, action) {
            state.form2.push(action.payload)
        },
        addStepthird(state, action) {
            console.log("object");
            state.form3.push(action.payload)
        }
    }
})


export const { addStepfirst ,addStepsecond,addStepthird} = formSlice.actions
export default formSlice.reducer