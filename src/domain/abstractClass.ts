export abstract class Value<T> {
    constructor(protected props: T) {
        this.props = props;
    }
}