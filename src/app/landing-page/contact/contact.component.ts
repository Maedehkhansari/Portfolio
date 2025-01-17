import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { RedBallComponent } from '../components/red-ball/red-ball.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    PrimaryButtonComponent,
    RedBallComponent,
    FormsModule,
    CommonModule,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: '',
  };

  mailTest = false;

  formIsSent = false;
  formHasError = false;

  post = {
    endPoint: 'https://maedehkhonsari.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formIsSent = true;
          },
          error: (error) => {
            this.formHasError = true;
          },
          complete: () => {
            setTimeout(() => {
              this.formIsSent = false;
              this.formHasError = false;
            }, 5000);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
