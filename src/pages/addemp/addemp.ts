import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";

@Component({
  selector: 'page-addemp',
  templateUrl: 'addemp.html'
})
export class addemp implements OnInit{
	
		empDetails:any={emp_name:[],
						emp_mobileNo:[],
						emp_access:{admin:true,histry:true,camera:false},
						empStatus:"act"};
	
	
	
  constructor(public navCtrl: NavController,
			  private readonly commonService:CommonService) {
			
  }
  
  ngOnInit() {

             
 }

 
		saveEmpDetails(){
			
			console.log(this.empDetails);
			
		}

  
}
