import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule], // Import FormsModule
})
export class ContactComponent {
  private db = getFirestore(initializeApp(environment.firebase));

  constructor() {}

  // Method to handle form submission
  async submitForm(form: any): Promise<void> {
    if (form.valid) {
      const formData = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        timestamp: new Date(),
      };

      try {
        console.log('Submitting form data:', formData);
        await addDoc(collection(this.db, 'contacts'), formData);
        console.log('Contact form data saved successfully!');
        alert('Message submitted successfully!');
        form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit the message. Please try again.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
