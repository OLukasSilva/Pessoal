import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModule, SecurityModule, VersionTagModule } from '@nuvem/angular-base';
import { BreadcrumbModule, ErrorStackModule, MenuModule, PageNotificationModule } from '@nuvem/primeng-components';
import { BlockUIModule } from 'ng-block-ui';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/footer/app.footer.component';
import { AppTopbarComponent } from './components/topbar/app.topbar.component';
import { SharedModule } from './shared/shared.module';
import { ProposicaoComponent } from './components/proposicao/proposicao.component';
import { HomeComponent } from './components/home/home.component';
import { TipoProposicaoComponent } from './components/tipo-proposicao/tipo-proposicao.component';
import { FormsComponent } from './components/tipo-proposicao/forms/forms.component';
import { ConfirmationService } from 'primeng';
import { EditarComponent } from './components/tipo-proposicao/forms/editar/editar.component';
import { ListarComponent } from './components/tipo-proposicao/forms/editar/listar/listar.component';
import { DeletarComponent } from './components/tipo-proposicao/editar/listar/deletar/deletar.component';

@NgModule({
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        ProposicaoComponent,
        HomeComponent,
        TipoProposicaoComponent,
        FormsComponent,
        EditarComponent,
        ListarComponent,
        DeletarComponent
    ],
    imports: [
        BlockUIModule.forRoot({
            message: 'Carregando...'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        PageNotificationModule,
        BreadcrumbModule,
        ErrorStackModule,
        ErrorModule,
        VersionTagModule,
        SecurityModule.forRoot(environment.auth),
        MenuModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
         ConfirmationService
         
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
