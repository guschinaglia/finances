import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
        {
          projectId: "finances-52999",
          appId: "1:924774493234:web:795c1c6c24d1732546e02b",
          storageBucket: "finances-52999.firebasestorage.app",
          apiKey: "AIzaSyAn9BphNsV50qXoa0X7OOJzz3erci_uKYo",
          authDomain: "finances-52999.firebaseapp.com",
          messagingSenderId: "924774493234",
          measurementId: "G-HDSPFKYFFN"
        })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
