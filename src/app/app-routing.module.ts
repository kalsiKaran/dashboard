import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookmarks', pathMatch: 'full' },
  {path:'bookmarks', component:BookmarksComponent},
  {path:'todo', component:TodoComponent},
  {path:'notes', component:NotesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingPath=[BookmarksComponent,
                          TodoComponent,
                          NotesComponent
                        ]
