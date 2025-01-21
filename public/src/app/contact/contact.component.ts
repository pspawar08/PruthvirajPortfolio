import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';

// Firebase initialization and Firestore setup
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule]  // Import FormsModule here
})
export class ContactComponent {
  private db = getFirestore(initializeApp(environment.firebase));

  constructor() {}

  // Method to handle form submission
  submitForm(form: any): void {
    const formData = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    };

    // Send form data to Firestore
    const contactsCollection = collection(this.db, 'contacts');
    
    addDoc(contactsCollection, formData)
      .then(() => {
        console.log('Contact form data saved successfully!');
        // Optionally, show a success message or reset the form
        form.reset();
      })
      .catch((error) => {
        console.error('Error saving contact form data: ', error);
      });
  }
}
