export interface IUser {
    username: string;
    password: string;
}

export interface UserProps extends IUser {
    id: number
}