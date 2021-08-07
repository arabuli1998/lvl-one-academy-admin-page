

export default (state, action) => {
    switch (action.type) {
        case "washale":
            return {
                users:state.users.filter(user=>{
                    return user.id !== action.payload
                })
            }
        
        case "adduser":
            return {
                users: [action.payload,... state.users]
            }
       
        default:
            return state
    }
}