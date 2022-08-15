import { describe } from "mocha";
import * as chai from 'chai'
import { CreateUserUseCase } from "../../src/domain/user/usecase/CreateUserUseCase";
import { ICreateUserRepository } from "../../src/domain/user/repository/interfaces/ICreateUserRepository";
import { IUser } from "../../src/domain/user/model/interfaces/IUser";
import { CreateUserRepository } from "../../src/domain/user/repository/CreateUserRepository"
import sinon from 'sinon'
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - create UseCase', async () => {
    it('BDD - create UseCase - should save', async () => {
        const userMock: IUser = {
            username: 'luizcalaca@test.com',
            password: '#$TRF&*654'
        }

        const interfaceUser = stubInterface<ICreateUserRepository>()
        const userRepository = new CreateUserRepository(interfaceUser)
        userRepository.create = sinon.stub().returns(userMock)

        const user: CreateUserUseCase = new CreateUserUseCase(userRepository)
        const result = await user.execute(userMock)

        expect(result).to.be.equal(userMock)
    })
})
