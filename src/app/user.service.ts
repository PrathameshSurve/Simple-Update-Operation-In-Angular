import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Jacob' },
    { id: 3, name: 'Lary' },
  ];

  private selectedUserSubject = new BehaviorSubject<any>({});
  selectedUser$ = this.selectedUserSubject.asObservable();

  getUsers() {
    return this.users;
  }

  updateSelectedUser(user: any) {
    this.selectedUserSubject.next(user);
  }
}
