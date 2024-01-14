import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },

  {
    path: 'users',
    loadComponent: () =>
      import('./users/components/users-table/users-table.component').then(
        (m) => m.UsersTableComponent
      ),
  },
  {
    path: 'documents',
    loadComponent: () =>
      import(
        './documents/components/documents-table/documents-table.component'
      ).then((m) => m.DocumentsTableComponent),
  },
];
