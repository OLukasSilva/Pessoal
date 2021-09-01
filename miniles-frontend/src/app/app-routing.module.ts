import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProposicaoComponent } from './components/proposicao/proposicao.component';
import { TipoProposicaoComponent } from './components/tipo-proposicao/tipo-proposicao.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'proposicao',
        component: ProposicaoComponent
    },
    {
        path:'tipoProposicao',
        component: TipoProposicaoComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
