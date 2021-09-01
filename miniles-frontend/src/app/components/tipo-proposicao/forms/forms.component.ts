import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProposicao } from 'src/app/models/TipoProposicao';
import { TipoProposicaoService } from 'src/app/service/TipoProposicao.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  tipoProposicao: TipoProposicao = {

    id: null,
    nome: '',
    sigla: ''

  }

  constructor(private router: Router, private service: TipoProposicaoService) { }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.router.navigate(['tipoProposicao'])
  }

  criar() {
     this.service.criar<TipoProposicao> (this.tipoProposicao).subscribe();   
  }

}