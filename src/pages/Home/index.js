import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-person-masculino/05/D22-3253-405/D22-3253-405_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
