import * as actionsType from './actiontypes';
export default (state = {covidstats:{}}, action)=>{
    switch (action.type){

        case actionsType.STORE_COVID_DATA:{
            return {...action.payload}
        }
     
        default:
            return state
    }
}