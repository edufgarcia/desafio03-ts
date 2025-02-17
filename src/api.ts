import { UserData } from "./pages/Conta"

const conta = {
    email: 'nath@dio.bank',
    password: '123456',
    name: 'Nathaly Souza',
    balance: 2000.00,
    id: '1'
} as UserData

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
