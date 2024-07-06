import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {AlertService} from "../../services/alert.service";
import {getAllData} from "../../helpers/db.helper";

@Component({
  selector: 'app-alert',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit{
    message!: string;
    show!: boolean;

    constructor(private _alertService: AlertService) { }

    ngOnInit(): void {
        this._alertService.alertState.subscribe(state => {
            this.message = state.message;
            this.show = state.show;
        })
    }

    onDenyClick(){
        this._alertService.hideAlert();
    }

    onAlertConfirm(){
        this._alertService.confirmAlert();
    }
}
