import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TipoProposicaoComponent } from "../components/tipo-proposicao/tipo-proposicao.component";
import { AbstractService } from "../shared/service/abstract.service";


  
@Injectable({
  providedIn: 'root'
})
  export class TipoProposicaoService extends AbstractService{

constructor(private http: HttpClient){
super(http,'tipoproposicao');
}


  }