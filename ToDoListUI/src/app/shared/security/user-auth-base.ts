export class UserAuthBase {
    UserName: string;
    IsAuth: boolean;
    Token: string;

    init(): void {
        this.UserName = "";
        this.Token = "";
        this.IsAuth = false;
    }
}