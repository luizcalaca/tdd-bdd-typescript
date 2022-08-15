import { Value } from "../../abstractClass";
import { UserProps } from "./interfaces/IUser";

export class User extends Value<UserProps> {

    get id(): number {
        return this.props.id
    }

    get username(): string {
        return this.props.username
    }

    get password(): string {
        return this.props.password
    }

    equals<T>(other?: Value<T>): boolean {
        if (!other) {
            return false;
        }
        return JSON.stringify(this) === JSON.stringify(other);
    }

    protected isValid?(props: UserProps): void {
        // Check if address if valid
    }
}