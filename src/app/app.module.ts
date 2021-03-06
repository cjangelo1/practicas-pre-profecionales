import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { NewPostModule } from './components/post/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent} from './shared/components/toolbar/toolbar.component';

//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import{ AngularFireModule } from '@angular/fire';
import{ AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:BUCKET, useValue: 'gs://brand-3fcf4.appspot.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
