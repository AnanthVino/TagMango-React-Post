/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

const setReducer = (state = { data: {} }, action) => {
    console.log('state', state);
    switch (action.type) {
        case "CREATEPOSTDETAILS":
            state["data"]["createPost"] = action.data;
            return state; 
        default:
            return state;
    }
};
  
export default setReducer;
