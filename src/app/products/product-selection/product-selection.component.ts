import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product.data';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css'],
  imports: [FormsModule, CurrencyPipe]
})
export class ProductSelectionComponent implements OnInit {
  pageTitle = 'Seleção de Produto';

  produtoSelecionado = signal<Product | undefined>(undefined);

  quantidade = signal(1);

  produtos = signal(ProductData.products);

  total = computed(() => (this.produtoSelecionado()?.price ?? 0) * this.quantidade());
  color = computed(() => this.total() > 200 ? 'green' : 'blue');

  constructor() { }

  ngOnInit() {
  }

  onDecrease() {
    this.quantidade.update(quantidade => quantidade <= 0 ? 0 : quantidade - 1);
  }

  onIncrease() {
    this.quantidade.update(quantidade => quantidade + 1);
  }

}
