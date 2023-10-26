import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
userEmail: string ='monEmail@gmail.com';
name : string ='mon nom'
constructor(private router: Router) { }

onContinue():void{
  this.router.navigateByUrl('facesnaps')
}
  ngOnInit(): void {
  }

onSubmitForm(form : NgForm):void{
  console.log(form.value);
  
}
}
