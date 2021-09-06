import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: Boolean = false
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);
  }
}
