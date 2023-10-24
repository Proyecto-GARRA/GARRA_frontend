import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
