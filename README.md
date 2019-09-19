# Naveteam Gatsby Storyblock Boilerplate

## Storyblok Tokens (Em construção):

- Preview: Cada conta já inicia com um preview token, que serve como parâmetro inicial para o script que faz a ponte entre o Storyblok e seu website.
  Para obter seu token clique no espaço criado pelo editor do Storyblok, depois em Settings e por fim em API-Keys, haverá apenas o seu preview token.

- Public:

## Variáveis de ambite (Em construção):

Utilizamos o dotevn para guardar os tokens de sua aplicação, bem como urls que serão futuramente adicionados deverão ser guardados em no arquivo `.env.development` e/ou`.env.production`.

## Gatsby Plugins (Em construção):

Dentro de `gatsby-config.js` estarão todos os plugins utilizados nesse boilerplate, como:

- gatsby-source-storyblok: faz a comunicação com o script que faz a ponte entre o website e o Storyblok.
- gatsby-source-filesystem: necessário para utilizar dados locais, no caso de criar páginas estáticas.
- gatsby-plugin-react-helmet: utiliza o React Helmet (é possível alterar o document head a partir de componentes React), com suporte para server rendering. Importante também para o SEO de seu website.

Obs: se você deseja adicionar plugins, adicione no arquivo citado acima.
