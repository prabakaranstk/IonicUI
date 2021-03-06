import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	userDetails:any=[];
	page: number = 0;
	result:any = {content:[]};
	
  constructor(public navCtrl: NavController,
			  private readonly commonService:CommonService,
			  public toastCtrl: ToastController) {
		
  }
  
  ngOnInit() {

              
  
			this.getUser(this.page)
 }

   getUser(page){
	  
		this.commonService.getUser(this.page).subscribe(data => {
			  
					this.result.content = data['content'];
			  
			  
					this.result.content.forEach( item => {
						this.userDetails.push(item);
					});
				
			  },err => {
				  
				  
				  this.presentToast(err);
				  
			  });
	  
  }
  
  
  infiniteScroll(infiniteScrollEvent)
  {
	setTimeout(() => {
			
			this.page=this.page+1;
				
			this.getUser(this.page);
	 
			infiniteScrollEvent.complete();
    },500);
	
  }
  
  
  	 presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  
}
