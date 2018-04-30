import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profile implements OnInit{
	
		empDetails:any={emp_name:[],
						emp_mobileNo:[],
						empAccess:{admin:true,histry:true,camera:false},
						empStatus:"act",
						expRep:"inc"}; 
		
	
	
	
	
	
  constructor(public navCtrl: NavController,
			  public commonService:CommonService,
			  public toastCtrl: ToastController) {
			
  }
  
	ngOnInit() {

             
	}

 


		
	presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  
}
