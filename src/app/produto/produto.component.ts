import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  listaCategorias: Categoria[]
  idCategoria: number
  categoria: Categoria = new Categoria()

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if(environment.tipo == ''){
      this.router.navigate(['/home'])
      environment.tipo = ''
    }

    this.getAllCategorias()
    this.getAllProdutos()
  }

  getAllCategorias() {
      this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=> {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

  
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
      this.getAllProdutos()
    }, erro =>{
      if(erro.status == 500){
        alert('Preencha os campos corretamente!')
      }
    }) 
  }
}
