import { UserAuthBase } from "../shared/security/user-auth-base";


export class AppUserAuth extends UserAuthBase {
    CanAccessToDoList: boolean;
    CanEditToDoList: boolean;
    CanDeleteToDoList: boolean;
    CanAddToDoList: boolean;

    init(): void {
        super.init();
        this.CanAccessToDoList = false;
        this.CanEditToDoList = false;
        this.CanDeleteToDoList = false;
        this.CanAddToDoList = false;
    }

    getValueOfProperty(obj: any, key:string):boolean {
        let ret = obj[key];
        return ret;
    }
}