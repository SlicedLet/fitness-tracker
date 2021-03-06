import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { AuthData } from './../auth-data.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  loadingSubscription = new Subscription();

  constructor(private authService: AuthService, private uiService: UIService) {}

  ngOnInit() {
    this.uiService.loadingStateChanged.subscribe(
      isLoading => (this.isLoading = isLoading)
    );
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
