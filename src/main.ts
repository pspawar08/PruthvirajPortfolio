import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "pruthvirajportfolio", appId: "1:564054597287:web:042c530f99262f860b8582", storageBucket: "pruthvirajportfolio.firebasestorage.app", apiKey: "AIzaSyA_qCg4IvG2vXXOFLaMHsVbWHNNEeH2QIM", authDomain: "pruthvirajportfolio.firebaseapp.com", messagingSenderId: "564054597287" })), provideFirestore(() => getFirestore())
  ]
}).catch((err) => console.error(err));
