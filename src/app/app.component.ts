import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dummyApp';

  users: any[] = [];
  selectedUser: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.selectedUser$.subscribe((user) => (this.selectedUser = user));
  }

  openModal(user: any) {
    this.userService.updateSelectedUser(user);
  }

  UpdateUserName() {
    const index = this.users.findIndex((user) => user.id === this.selectedUser.id);
    if (index !== -1) {
      this.users[index].name = this.selectedUser.name;
    }
    
    this.selectedUser = {};

  }

}

