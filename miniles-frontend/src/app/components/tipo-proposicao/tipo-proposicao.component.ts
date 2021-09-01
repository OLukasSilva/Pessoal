import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProposicao } from 'src/app/models/TipoProposicao';
import { TipoProposicaoService } from 'src/app/service/TipoProposicao.service';

@Component({
  selector: 'app-tipo-proposicao',
  templateUrl: './tipo-proposicao.component.html',
  styleUrls: ['./tipo-proposicao.component.css']
})
export class TipoProposicaoComponent implements OnInit {

  tipoProposicao: TipoProposicao[] = [];
  tipoProposicaoData: TipoProposicao;
  
      colunas: any[];
  
      first = 0;
  
      rows = 2;
  
      constructor(private tipoproposicaoService: TipoProposicaoService) {
          
       }
  
      ngOnInit() {
          this.tipoproposicaoService.listar<TipoProposicao>().subscribe(tipoproposicao => this.tipoProposicao = tipoproposicao);
  
          this.colunas = [
              { field: 'nome', header: 'Nome' },
              { field: 'sigla', header: 'Sigla' },
           
          ];
      }
  
      next() {
          this.first = this.first + this.rows;
      }
  
      prev() {
          this.first = this.first - this.rows;
      }
  
      reset() {
          this.first = 0;
      }
  
      isLastPage(): boolean {
          return this.first === (this.tipoProposicao.length - this.rows);
      }
  
      isFirstPage(): boolean {
          return this.first === 0;
      }


      cadastroAberto: boolean = false;

      abrirCadastro() {
          this.cadastroAberto = true;

  }
        edicaoAberta = false

        abrirEdicao() {
         this.edicaoAberta = true   
        }


        listagemAberta = false

        abrirListagem() {
         this.listagemAberta = true   
        }

     
        deletarAberto = false

        abrirDeletar() {
            this.deletarAberto = true
        }
  
}