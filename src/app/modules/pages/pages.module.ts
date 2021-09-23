import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DocumentsComponent } from './documents/documents.component';
import { NotesComponent } from './notes/notes.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DocumentsComponent,
    NotesComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class PagesModule { }
