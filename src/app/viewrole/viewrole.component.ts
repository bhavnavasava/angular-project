import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';


@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {


  constructor(private userService: UserService, private toster: ToastrService,private aRoute:ActivatedRoute) { }
  roleId = -1
  roleName:string=""
  ngOnInit(): void {
    this.roleId = this.aRoute.snapshot.params["roleId"];
    console.log(this.roleId);
    this.getRoleById(this.roleId)
    
  }
 
  getRoleById(id: any) {
    this.userService.getRoleByIdApi(id).subscribe(res => {
      this.roleName = res.roleName
    }, err => {
      this.toster.error("Invalid RoleId")
    })
  }
}
