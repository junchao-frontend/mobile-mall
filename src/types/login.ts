export interface LoginFormInt {
    userName: string,
    password: string
}

export class InitData {
    loginForm: LoginFormInt = {
        userName: '',
        password: ''
    }
}