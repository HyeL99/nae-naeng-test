let initialState={
    email: "",
};

const reducer = (state=initialState, action)=>{
    let {type, payload} = action
    console.log("reducer", state)

    switch (type){
        case "GET_STATUS":
            return {...state, email:payload.userEmail}
        default:
            return {...state};
    }
    return {...state};
}

export default reducer