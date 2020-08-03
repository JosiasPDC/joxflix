import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const [categorias, SetCategorias] = useState(['Teste']);
  const valores = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [camposForm, setCamposForm] = useState(valores);

  function setaValor(chave, valor){
    setCamposForm({
      ...camposForm,
      [chave]: valor
    });
  }
  
  function onChangeValores(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setaValor(getAttribute('name'), value);
  }

  return(
    <PageDefault>
      <h1>Cadastro de categoria: {camposForm.nome}</h1>
      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        SetCategorias([
          ...categorias,
          valores.nome
        ]);

        setCamposForm(valores);
      }}>
      
      <FormField
        type="text" 
        name="nome" 
        placeholder="Nome da categoria" 
        value={camposForm.nome} 
        onChange={onChangeValores}
        label="Nome da Categoria: "
      />
      
      <FormField
        type="textarea" 
        name="descricao" 
        placeholder="Descrição" 
        value={camposForm.descricao} 
        onChange={onChangeValores}
        label="Descrição: "
      />

      <FormField
        type="color" 
        name="cor" 
        placeholder="Cor" 
        value={camposForm.cor} 
        onChange={onChangeValores} 
        label="Cor: "
      />

      <button>
        Cadastrar
      </button>
      </form>
      <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                  {categoria}
              </li>
            );
          })}
      </ul>

        <Link to="/">
            Ir pra home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;