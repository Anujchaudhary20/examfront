import { Component, OnInit ,} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor( private userService: UserService){}

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''    
  }
    
  ngOnInit():void{}

  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      alert("User is required !!!!")
      return ;
    }

    //addUser: UserService
    this.userService.addUser(this.user).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
