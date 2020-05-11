export class Account {

    public readonly type: string;
    public readonly name: string;

    constructor(account: {name: string, type: string}) {
        this.name = account.name;
        this.type = account.type;
    }

}