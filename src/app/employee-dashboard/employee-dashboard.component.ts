import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';
//import { ModalService } from './modal.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  isAddMode: boolean;
  //empDetail :FormGroup;

  modalRef: NgbModalRef;

  @ViewChild('openFormModal')
  openFormModal: NgbModal;
  formBuilder: any;

  constructor(

    private modalService: NgbModal,
    // private FormBuilder :FormBuilder,
    // private empDetail:empDetail
  ) { }

  empDetail = [
    {
      firstName: 'Richa',
      //lastName :'Yadav',
      email: 'richa@gmail.com',
      employeeId: 1234,
      mobile: 9876543219,
      gender: 'Female',
      age: 23,
      altMobile: 8900000006,
    },
    {
      firstName: 'Rishabh',
      // lastName :'dev',
      email: 'rishabh@gmail.com',
      employeeId: 1234,
      mobile: 9876543219,
      gender: 'male',
      age: 23,
      altMobile: 8900000006,
    },
    {
      firstName: 'Shreya',
      // lastName :'Yadav',
      email: 'shreya@gmail.com',
      employeeId: 1234,
      mobile: 9876543219,
      gender: 'Female',
      age: 23,
      altMobile: 8900000006,
    },
  ]


  ngOnInit(): void {
    console.log("empDetail", this.empDetail)
  }

  addEmployee() {
    //console.log(formObj)

  }

  openaddEmployeeModal() {
    console.log("openEmployeeModal")
  }

  closeModal() {
    this.modalRef.close();
  }

  onDelete(i: any) {
    this.empDetail.splice(i, 1)

  }

  onAddEmployee(firstName: any, employeeId: any, mobile: any, gender: any, age: any, altMobile: any) {
    this.empDetail.push({
      firstName: firstName.value,
      //lastName : lastName.value,
      email: firstName.value,
      employeeId: employeeId.value,
      mobile: mobile.value,
      gender: gender.value,
      age: age.value,
      altMobile: altMobile.value,
    })


  }

}

