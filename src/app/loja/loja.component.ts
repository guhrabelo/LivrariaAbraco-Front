import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto()
  tituloProduto: string
  generoCategoria: Categoria[]
  listaGenero: string
  

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  key = 'genero'
  reverse = false

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getAllProdutos()
    this.findAllCategoria()

    this.listaGenero = this.route.snapshot.params['genero']
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findByTituloProduto(){
    if(this.tituloProduto == ''){
      this.getAllProdutos()
    }else{
      this.produtoService.getByTituloProduto(this.tituloProduto).subscribe((resp: Produto[])=>{
        this.listaProdutos = resp
      })
    }
  }


  findByGeneroCategoria(){
    if(this.listaGenero == ''){
      this.findAllCategoria()
    }else{
      this.categoriaService.getByGeneroCategoria(this.listaGenero).subscribe((resp: Categoria[])=>{
        this.generoCategoria = resp
      })
    }
  }

}