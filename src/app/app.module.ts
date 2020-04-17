import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MatTableComponent,
    DropdownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatButtonModule,
    SidebarModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
