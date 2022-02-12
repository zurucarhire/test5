import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css']
})
export class ClientModalComponent implements OnInit {
  @Input() public modalData;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  constructor(
    public activeModal: NgbActiveModal,
    private notifyService: NotificationService,
  ) { }

  ngOnInit() {
    console.log(">>XX",this.modalData);
  }

  passBack() {
    console.log("wree", this.modalData)
    let clientName = this.modalData['clientName'];
    let clientDescription = this.modalData['clientDescription'];
    let active = this.modalData['active'];

    if (clientName == "" || clientDescription == "" || active == ""){
        console.log("hello world");
        this.notifyService.showError("Please enter all fields", "Warning");
        return;
    }

    this.passEntry.emit(this.modalData);
    this.activeModal.close(this.modalData);
  }
}