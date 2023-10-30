import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreheaderComponent } from './components/preheader/preheader.component';
import { SearchPipe } from './pipes/search.pipe';

let appRoutes:Routes =[
  {path:'', component: NewsComponent},
  {path:'personajes', component: PersonajesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    NewsComponent,
    PreheaderComponent,
    PersonajesComponent,
    SearchPipe    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
