export interface ICreateUserRepository {
    create(entity: any): Promise<Object>
}