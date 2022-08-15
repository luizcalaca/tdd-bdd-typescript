import { ICreateUserRepository } from "../repository/interfaces/ICreateUserRepository";
import { IDeleteUserRepository } from "../repository/interfaces/IDeleteUserRepository";

export class FacadeUserCase {
    private static instance: FacadeUserCase;

    private constructor(
        private createUser: ICreateUserRepository,
        private deleteUser: IDeleteUserRepository
    ) { }

    static getInstance(serviceA: ICreateUserRepository, serviceB: IDeleteUserRepository) {
        if (!FacadeUserCase.instance) {
            FacadeUserCase.instance = new FacadeUserCase(serviceA, serviceB);
        }
        return FacadeUserCase.instance;
    }
}