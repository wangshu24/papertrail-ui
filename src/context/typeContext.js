export interface User {
    firstName: string;
    lastName: string;
}

export interface UserState {
    user: User;
    state: string
}

export type UserAction = 
| {type : "LOGIN" , payload: User}
| {type : "LOGOUT"};