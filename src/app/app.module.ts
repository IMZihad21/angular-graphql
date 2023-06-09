import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MomentModule } from "ngx-moment";
import { AppComponent } from "./app.component";
import { ChatsComponent } from "./components/chats/chats.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ApolloClientModule } from "./core/apollo-client.module";
import { AppRoutingModule } from "./core/app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { StoreModule } from "./store/store.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatsComponent,
    MessagesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloClientModule,
    ReactiveFormsModule,
    StoreModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
