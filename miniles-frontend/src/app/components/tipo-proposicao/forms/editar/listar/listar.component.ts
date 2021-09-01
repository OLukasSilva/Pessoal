import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProposicao } from 'src/app/models/TipoProposicao';
import { TipoProposicaoService } from 'src/app/service/TipoProposicao.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  @Input() tipoProposicao = new TipoProposicao

  constructor(private router: Router, private service: TipoProposicaoService) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.router.navigate(['tipoProposicao'])
  }

}
