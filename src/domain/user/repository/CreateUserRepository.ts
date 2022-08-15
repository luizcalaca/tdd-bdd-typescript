import { IUser } from "../model/interfaces/IUser";
import { ICreateUserRepository } from "./interfaces/ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository {
    constructor(private repository: ICreateUserRepository) { }

    async create(entity: IUser): Promise<Object> {
        await this.repository.create(entity)
        return entity
    }
}