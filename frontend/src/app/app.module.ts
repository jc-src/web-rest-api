import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualMachineModule } from './modules/virtual-machine/virtual-machine.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModuleModule,
    VirtualMachineModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
