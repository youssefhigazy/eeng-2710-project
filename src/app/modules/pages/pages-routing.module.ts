import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCalculatorsComponent } from '../calculators/all-calculators/all-calculators.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "documents", component: DocumentsComponent },
  { path: "notes", component: NotesComponent },
  { path: "contact-me", component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
