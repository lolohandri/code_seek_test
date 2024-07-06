import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

type AlertProps = {message: string, show: boolean, confirmed: boolean};

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private alertSubject = new BehaviorSubject<AlertProps>({message: '', show: false, confirmed: false});
    alertState = this.alertSubject.asObservable();

    showAlert(message: string){
        this.alertSubject.next({message, show: true, confirmed: false});
    }

    hideAlert(){
        this.alertSubject.next({message: '', show: false, confirmed: false});
    }

    confirmAlert(){
        this.alertSubject.next({message: '', show: false, confirmed: true})
    }
}
