import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	userDetails:any=[];
	page: number = 1;
	result:any = {content:[]};
	
  constructor(public navCtrl: NavController,
			  private readonly commonService:CommonService) {
		
  }
  
  ngOnInit() {

               this.getUser(0);
 }

   getUser(page){
	  
    this.commonService.getUser(page).subscribe(data => this.result = data);
  
   
			this.result.content.forEach( item => {
					this.userDetails.push(item);
				});
	  
  }
  
  
  infiniteScroll(infiniteScrollEvent)
  {
	setTimeout(() => {
			this.page++;
      
				
			this.getUser(this.page++);
	 
			infiniteScrollEvent.complete();
    },500);
	
  }
  
}
