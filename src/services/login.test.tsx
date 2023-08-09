import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPwd = '123456'
    it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async() => {
        const response = await login(mockEmail, mockPwd)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', mockPwd)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja inválida', async() => {
        const response = await login(mockEmail, '0987765')
        expect(response).toBeFalsy()
    })
})