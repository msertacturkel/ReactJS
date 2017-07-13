/**
 * Created by sertac.turkel on 13/07/2017.
 */
export function setName(name){
    return {
        type:"SET_NAME",
        payload: name
    };
}
export function setAge(age){
    return {
        type:"SET_AGE",
        payload: age
    };
}