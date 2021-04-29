import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import {AuthInterceptor} from './AuthInterceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { StoriesComponent } from './stories/stories.component';
import { DesignComponent } from './about/design/design.component';
import { MadeComponent } from './about/made/made.component';
import { WoodComponent } from './about/wood/wood.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    AboutComponent,
    NotFoundComponent,
    CartComponent,
    ProductsComponent,
    ProductsDetailComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent,
    StoriesComponent,
    DesignComponent,
    MadeComponent,
    WoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
