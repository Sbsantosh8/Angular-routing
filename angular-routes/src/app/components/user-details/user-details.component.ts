import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userId: number | null = null;
  userData:any;
  users = new UserListComponent().users;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.userData = this.users.find(user => user.id === this.userId);
      
    });
  }


  logKeyValue(key: { key: any, value: any }): void {
    console.log(key);
  }

}
