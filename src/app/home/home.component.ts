import { Component } from "@angular/core";



@Component({
selector:'home',
template:`<h1>{{title}}</h1>
<div>
<ng-container *ngIf="display">
hello world
</ng-container>
<ng-container *ngFor="let x of name; let i=index">
<h2>{{i+1}}-{{x}}</h2>
</ng-container>
</div>
`,
styles:['h1{color:red}']
})

export class HomeComponent{
title: string ='home';
display:boolean=false;
name :string[]=['Rahul','Ranjan','rohit'];
}