import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthtokenService } from '../authtoken.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private authTokenService:AuthtokenService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.authTokenService.authToken = "" 
    this.router.navigateByUrl("/login")
    this.toastr.success("LogOut Successfully")
  }

}
