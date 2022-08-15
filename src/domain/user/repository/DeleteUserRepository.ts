import { IDeleteUserRepository } from "./interfaces/IDeleteUserRepository";

export class DeleteUserRepository {
    constructor(private repository: IDeleteUserRepository) {
        this.repository = repository
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }
}