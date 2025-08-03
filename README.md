# 🎧 Spotify Profile App

Este é um aplicativo desenvolvido com **Angular** que se conecta à **API do Spotify** para exibir estatísticas do usuário, como artistas mais ouvidos, faixas, playlists e dados de perfil. A proposta é oferecer uma interface visual moderna, responsiva e fácil de usar, com foco em usabilidade e performance.

## 🛠️ Tecnologias Utilizadas

- [Angular 17+](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [Font Awesome](https://fontawesome.com/)
- SCSS (SASS)
- NgRx (futuramente)
- API do Spotify (OAuth2.0 PKCE Flow)
- Ngrok (ambiente de testes local com túnel HTTPS)

## 📂 Estrutura de Pastas

```bash
src/
├── app/
│   ├── auth/               # Módulo e componentes de autenticação (login, callback)
│   ├── components/         # Páginas principais (Profile, Top Artists, Top Tracks, etc)
│   ├── core/               # Guards, interceptors e serviços principais
│   ├── shared/             # Componentes reutilizáveis (como botões, cards, etc)
│   │   └── components/
│   ├── styles/             # SCSS global e variáveis
│   ├── app.component.ts    # Componente principal
│   └── app-routing.module.ts
├── assets/                 # Imagens e logos
└── environments/           # Variáveis de ambiente
```

# 🔐 Autenticação com Spotify

Este projeto utiliza o Authorization Code Flow com PKCE para autenticar o usuário no Spotify. Após o login, o app recebe um token que permite fazer chamadas autenticadas para a API do Spotify.

# 📈 Funcionalidades

- ✅ Login com Spotify (PKCE)
- ✅ Visualização do perfil do usuário
- ✅ Lista dos artistas mais ouvidos
- ✅ Lista de músicas mais ouvidas
- ✅ Playlists do usuário
- ✅ Faixas ouvidas recentemente
- ✅ Design responsivo com SCSS
- ✅ Navegação por sidebar com ícones
- ✅ Componentização moderna com Angular

# 🙋‍♂️ Autor

Desenvolvido com 💚 por **João Victor Lopes Martins**

<p align="left">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joaovlopesmartins@gmail.com" title="Gmail">
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-GMAIL" alt="Gmail"/></a>
  <a href="https://www.linkedin.com/in/joaovlopesmartins/" title="LinkedIn">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" alt="LinkedIn"/></a>
</p>

