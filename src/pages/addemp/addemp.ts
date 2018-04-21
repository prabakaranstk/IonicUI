import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from "../providers/CommonService";

@Component({
  selector: 'page-addemp',
  templateUrl: 'addemp.html'
})
export class addemp implements OnInit{
	
  constructor(public navCtrl: NavController,
			  private readonly commonService:CommonService) {
		
  }
  
  ngOnInit() {

             
 }


  
}
