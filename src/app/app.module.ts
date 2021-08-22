import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesServices } from './courses.services';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostService } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    SummaryPipe,
    BootstrapPanelComponent,
    LikeComponent,
    CustomDirectiveDirective,
    ZippyComponent,
    ContactFormComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContactFormComponent
      }, {
        path: 'followers',
        component: GithubFollowersComponent
      }, {
        path: 'followers/:id',
        component: GithubProfileComponent
      }
      ,{
        path: 'posts',
        component: PostsComponent
      }
      ,{
        path: '**',
        component: NotFoundComponent
      },{
        path: 'contact',
        component: ContactFormComponent
      }
    ])
  ],
  providers: [
    CoursesServices,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
