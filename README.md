# [Pokémon Inc MERN Backend](https://pokemon-inc-mern-frontend.netlify.app) | [<img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" height="20px"/>](https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA) | [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" height="20px"/>](https://github.com/ElliotXLeo) | [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="Linkedin" height="20px"/>](https://www.linkedin.com/in/elliotgaramendi/) | [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" height="20px"/>](https://www.instagram.com/elliotgaramendi/) | [<img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" height="20px"/>](https://www.facebook.com/elliotgaramendi) | [<img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Portafolio Web" height="20px"/>](https://elliotxleo.github.io/portafolio-web-elgs/)


## 📜 Resumen 📜
Administrador de Pokémon’s.

## 🔗 Endpoints 🔗

## **pokemons**

> ### **POST** /pokemons *Crea un nuevo registro*

#### **Nota:** Se puede crear de dos formas

#### **Body JSON**
```
{
  "name": "String",
  "type": "String",
  "hp": Number,
  "attack": "String",
  "special": "String",
  "image": {
    "publicId": "String",
    "url": "0"
  }
}
```

||

#### **Body Form**
#### Fields
```
  "name": "String",
  "type": "String",
  "hp": Number,
  "attack": "String",
  "special": "String",
```

#### Files
```
  "image": image
```

> ### **GET** /pokemons *Lee los registro* 

> ### **GET** /pokemons/{id} *Lee un registro por su id* 

> ### **PUT** /pokemons/{id} *Actualiza un registro por su id* 

#### **Nota:** Se puede actualizar de dos formas

#### **Body JSON**
```
{
  "name": "String",
  "type": "String",
  "hp": Number,
  "attack": "String",
  "special": "String",
  "image": {
    "publicId": "String",
    "url": "0"
  }
}
```

||

#### **Body Form**
#### Fields
```
  "name": "String",
  "type": "String",
  "hp": Number,
  "attack": "String",
  "special": "String",
```

#### Files
```
  "image": image
```
> ### **DELETE** /pokemons/{id} *Borra un registro por su id* 

## 💻 Instalación 💻
- Ubicarse en la carpeta que contendrá el proyecto
- Abrir terminal de comandos
  - git clone https://github.com/ElliotXLeo/pokemon-inc-mern-backend.git
  - cd pokemon-inc-mern-backend
  - npm install
  - npm run dev
    - Levanta un servidor con la aplicación

## 👨‍💻 Tecnologías Usadas 👨‍💻
<table>
    <thead>
      <tr>
        <th>JavaScript</th>
        <th>Node.js</th>
        <th>Express</th>
        <th>dotenv</th>
        <th>MongoDB</th>
        <th>mongoose</th>
        <th>cloudinary</th>
        <th>Nodemon</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="100%" />
        </td>
        <td>
          <img src="https://nodejs.org/static/images/logo.svg" width="100%" />
        </td>
        <td>
          <img src="https://dev.diegochavez-dc.com/assets/express.acff8a3b.svg" width="100%" />
        </td>
        <td>
          <img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" width="100%" />
        </td>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" width="100%" />
        </td>
        <td>
          <img
            src="https://tsed.io/mongoose.png" width="100%" />
        </td>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cloudinary_logo.svg/2560px-Cloudinary_logo.svg.png" width="100%" />
        </td>
        <td>
          <img
            src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" width="100%" />
        </td>
      </tr>
    </tbody>
  </table>

## 🤗 Redes sociales 🤗
- 🐭 YouTube: https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA 🐭
- 🐭 GitHub: https://github.com/ElliotXLeo 🐭
- 🐭 Linkedin: https://www.linkedin.com/in/elliotgaramendi/ 🐭
- 🐭 Instagram: https://www.instagram.com/elliotgaramendi/ 🐭
- 🐭 Facebook: https://www.facebook.com/elliotgaramendi 🐭
- 🐭 Portafolio Web: https://elliotxleo.github.io/portafolio-web-elgs/ 🐭