import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  a :boolean=false;
  c :boolean=false;
  u :boolean=false;
  l :boolean=false;
 
new()
{
  this.a=true;
  this.c=false;
  this.u=false;
  this.l=false;
  
}
con()
{
  this.c=true;
  this.a=false;
  this.u=false;
  this.l=false;
}
user()
{
  this.u=true;
  this.c=false;
  this.a=false;
  this.l=false;
}
login()
{
  this.l=true;
  this.u=false;
  this.c=false;
  this.a=false;
}
}

