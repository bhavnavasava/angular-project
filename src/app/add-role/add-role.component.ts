import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private userService:UserService,private toaster:ToastrService,private router:Router) { }
roleName=""
  ngOnInit(): void {
  }

  addRole(){
    let role={"roleName":this.roleName}
    this.userService.addRole(role).subscribe(res=>{
      this.toaster.success("role added");
      this.router.navigateByUrl("/home")
    })
  }

}
