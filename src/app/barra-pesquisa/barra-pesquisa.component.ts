import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  descricao = "";

  constructor(private route: Router) {}
  pesquisar() {
    if (this.descricao) {
      this.route.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return;
    }
      this.route.navigate(['produtos']);
  }
}
