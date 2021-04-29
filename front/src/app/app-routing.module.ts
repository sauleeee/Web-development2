import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';
import {ProductsDetailComponent} from './products-detail/products-detail.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ReviewComponent} from './review/review.component';
import {StoriesComponent} from './stories/stories.component';
import {MadeComponent} from './about/made/made.component';
import {WoodComponent} from './about/wood/wood.component';
import {DesignComponent} from './about/design/design.component';

const routes: Routes = [
  {path: 'posts' , component: PostsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'about/made', component: MadeComponent},
  {path: 'about/wood', component: WoodComponent},
  {path: 'about/design', component: DesignComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'products/:id/furniture', component: ProductsDetailComponent},
  {path: 'products/:id/review', component: ReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'cart', component: CartComponent },
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
