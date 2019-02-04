import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { GitHubDetailsComponent } from './git-hub-details/git-hub-details.component';
import { GithubComponent } from './github/github.component';
import { GihHubDetailsComponent } from './gih-hub-details/gih-hub-details.component';
import { GithubDetailsComponent } from './github-details/github-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    GitHubDetailsComponent,
    GithubComponent,
    GihHubDetailsComponent,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
