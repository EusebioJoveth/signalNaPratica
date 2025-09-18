import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product.data';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css'],
  imports: [FormsModule]
})
export class ProductSelectionComponent implements OnInit {
  pageTitle = 'Seleção de Produto';

  produtoSelecionado = signal<Product | undefined>(undefined);

  quantidade = signal(1);

  produtos = signal(ProductData.products);

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
