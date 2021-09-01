import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProposicao } from 'src/app/models/TipoProposicao';
import { TipoProposicaoService } from 'src/app/service/TipoProposicao.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  @Input()tipoProposicao = new TipoProposicao();

      constructor(private router: Router, private service: TipoProposicaoService) { 
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.router.navigate(['tipoProposicao'])
  }

}
