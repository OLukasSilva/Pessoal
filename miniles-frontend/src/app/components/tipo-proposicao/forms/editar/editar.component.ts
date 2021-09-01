import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProposicao } from 'src/app/models/TipoProposicao';
import { TipoProposicaoService } from 'src/app/service/TipoProposicao.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

   @Input()tipoProposicao = new TipoProposicao();
 
     constructor(private router: Router, private service: TipoProposicaoService) {

   }

  ngOnInit(): void {
  }

cancelar(): void {
  this.router.navigate(['tipoProposicao'])
}

editar() {
  this.service.atualizar<TipoProposicao>(this.tipoProposicao).subscribe();
}



}
