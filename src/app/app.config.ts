import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "pruthvirajportfolio", appId: "1:564054597287:web:042c530f99262f860b8582", storageBucket: "pruthvirajportfolio.firebasestorage.app", apiKey: "AIzaSyA_qCg4IvG2vXXOFLaMHsVbWHNNEeH2QIM", authDomain: "pruthvirajportfolio.firebaseapp.com", messagingSenderId: "564054597287" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
