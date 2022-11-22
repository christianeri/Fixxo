export interface User {
     id: number
     firstName: string
     lastName: string
     email: string
}

export interface UserSignup  {
     firstName: string
     lastName: string
     email: string
     password: string
}

export interface UserSignin  {
     email: string
     password: string
}