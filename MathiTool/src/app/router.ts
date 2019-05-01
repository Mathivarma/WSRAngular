import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/Home.component';
import { NextPageComponent } from '../NextPage/NextPage.component';

export const routes: Routes = [{
    path: 'Home',
    component: HomeComponent
 
  },{
    path: 'GOT',
    component: NextPageComponent
 
  }
//   },
//   {
//     path: 'NewsApi',
//     children: [
//       {
//         path: "topNEWS",
//         component: TopNEWSComponent,
//         canActivate: [AuthGuard]
//       },
//       {
//         path: "categoryWiseNEWS/:category",
//         component: NEWSCategoryComponent,
//         canActivate: [AuthGuard]
//       },
//       {
//         path: "search/:searchName",
//         component: SearchComponent,
//         canActivate: [AuthGuard]
//       },
//       {
//         path: "myFavorite",
//         component: FavouriteComponent,
//         canActivate: [AuthGuard]
//       }
//     ]
//   }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class NEWSRoutingModule { }