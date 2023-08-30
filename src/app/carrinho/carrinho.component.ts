import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = []
  totalCarrinho = 0;
  constructor(public carrinhoService:CarrinhoService,
    private router: Router) {}
  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }
  calculaTotal() {
    this.totalCarrinho = this.itensCarrinho.reduce((prev, curr) =>
      prev + (curr.preco * curr.quantidade),0)
  }

  removeProdutoCarrinho(productId:number) {
    console.log(productId);
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== productId);
    this.carrinhoService.removerProdutoCarrinho(productId);
    this.calculaTotal();
  }

  comprar() {
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate([''])
  }
}
