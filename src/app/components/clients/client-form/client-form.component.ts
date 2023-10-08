import { Component } from '@angular/core';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

  visible: boolean = false;

    showDialog() {
        this.visible = true;
  }

}
