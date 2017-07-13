/**
 * Created by sertac.turkel on 13/07/2017.
 */
export function setName(name){
    //return dispatch => {
    //    setTimeout(() => {
    //        dispatch({
    //            type: "SET_NAME",
    //            payload: name
    //        });
    //    }, 2000);
    //}
    return{
        type: "SET_NAME",
        paylaod: new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve(name);
            },2000);
        })
    };
}
export function setAge(age){
    return {
        type:"SET_AGE",
        payload: age
    };
}