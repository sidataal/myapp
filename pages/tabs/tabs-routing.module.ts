/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'films',
          children: [
            {
              path: '',
              loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
            }
          ]
        },
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            }
          ]
        },
        // {
        //   path: 'planets',
        //   children: [
        //     {
        //       path: '',
        //       loadChildren: () => import('../ssports/sports.module').then( m => m.SportsPageModule)
        //     }
        //   ]
        
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/films',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
