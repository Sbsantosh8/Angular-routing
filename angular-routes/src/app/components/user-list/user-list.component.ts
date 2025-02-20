import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1 234 567 890",
      "role": "Admin"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "+1 987 654 321",
      "role": "Editor"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mike.johnson@example.com",
      "phone": "+1 456 789 123",
      "role": "User"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "phone": "+1 321 654 987",
      "role": "Moderator"
    }
  ]
  

 

}
