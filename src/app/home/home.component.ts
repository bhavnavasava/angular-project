import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles: Array<any> = []
  roleName: string = ""
  display = false
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.getAllRoles()
  }

  getAllRoles() {
    this.userService.getAllRoles().subscribe(res => {
      console.log("get all roles==>");
      console.log(res.roles);
      this.roles = res;
    })
  }

  deleteRole(roleId: any) {
    console.log("delete role called..." + roleId);
    this.userService.deleteRole(roleId).subscribe(resp => {
      this.toastr.success("Role Deleted...")
      this.roles = this.roles.filter(r => r.roleId != roleId)
      this.router.navigateByUrl("/home")


    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
  }

  viewRole(roleId: any) {
    this.userService.getRoleByIdApi(roleId).subscribe(resp => {

      console.log("response", resp.roleName)
      console.log("rolename", resp.roleName)
      // this.roleName = resp.roleName
      // this.display = true
      alert(resp.roleId + "." + resp.roleName);
    }, err => {
      this.toastr.error(err)
    })
  }
}