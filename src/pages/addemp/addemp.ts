import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-addemp',
  templateUrl: 'addemp.html'
})
export class addemp implements OnInit{
	
		empDetails:any={emp_name:[],
						emp_mobileNo:[],
						empAccess:{admin:true,histry:true,camera:false},
						empStatus:"act"}; 
		
	
	
	
	
	
  constructor(public navCtrl: NavController,
			  public commonService:CommonService,
			  public toastCtrl: ToastController) {
			
  }
  
  ngOnInit() {

             
 }

 
		saveEmpDetails(){
			
			console.log(this.empDetails);	
			this.commonService.addEmp(this.empDetails);
			
			
			
		}

		
		 presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  
}
