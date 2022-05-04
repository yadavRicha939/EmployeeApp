import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//import { EmployeeFormComponent } from './employee-form/employee-form.component';
//import { ModalModule } from './_modal';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireModule } from  '@angular/fire';
// import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    //EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
