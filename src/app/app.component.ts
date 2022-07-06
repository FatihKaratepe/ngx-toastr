import { Component } from '@angular/core';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toastr-test';

  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Success", "Success Title")
  }
  
  showToasterError(){
      this.notifyService.showError("Error", "Error Title")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("Info", "Info Title")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("Warning", "Warning Title")
  }
}
