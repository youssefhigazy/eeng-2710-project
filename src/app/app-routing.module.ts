import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/pages/pages.module").then(m => m.PagesModule) },
  { path: "calculators", loadChildren: () => import("./modules/calculators/calculators.module").then(m => m.CalculatorsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
