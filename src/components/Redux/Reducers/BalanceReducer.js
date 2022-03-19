
const initialState={
    balance:0,
    isLogged:false
}
export function BalanceReducer(state=initialState,{type,payload}){
switch (type) {
    case "DEPOSIT":

        return {
            ...state,
            balance: state.balance+payload,
           // balance:initialState.balance+payload
        }
        break;
        case "WITHDRAW":
            return{
                ...state,
                balance:state.balance-payload,
            }

    default: return state
        break;
}
}
