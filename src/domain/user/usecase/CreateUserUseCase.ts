import { IUser } from "../model/interfaces/IUser";
import { ICreateUserRepository } from "../repository/interfaces/ICreateUserRepository";

export class CreateUserUseCase {
    constructor(private repository: ICreateUserRepository) { }

    async execute(entity: IUser): Promise<Object> {
        // if (entity.password.length > 6)
        //     throw new Error('Password must have more than 6 caracteres')
        await this.repository.create(entity)
        return entity
    }
}