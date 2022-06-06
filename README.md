
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />
<p align="center">
 <!-- TODO: #2 Rediger correctment le readme -->
  <h3 align="center">👽 AVFA BOT 🤖</h3>

  <p align="center">
    Chat Bot devéloppé et implémenté dans le cadre du ITAUN-Challenge 2021
    <br />
    <a href="avfabot.herokuapp.com"><strong>Voir la démonstration »</strong></a>
    <br />
    <br />
    <a href="https://github.com/a-dera/avfabot/issues">Signaler un bug</a>
    ·
    <a href="https://github.com/a-dera/avfabot/issues">Demander une fonctionnalité</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du projet</a>
      <ul>
        <li><a href="#outils-de-conception">Outils de conception</a></li>
        <li><a href="#ffonctionnalités">Fonctionnalités</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#preréquis">Preréquis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributeurs">Contributeurs</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## Outils de conception

Ce bot a été conçu avec un lot d'outils funs et performants
* [BotUi](https:/botui.org)
* [Bulma](https:/bulma.io)
* [Vue](https://vuejs.org)
* [Vue-Toasted](https://shakee93.github.io/vue-toasted/)
* [NodeJs](https://vuejs.org)
* [ExpressJs](https://expressjs.com)
* [Rivescript](https://rivescript.com/)
* [Docker](https://docker.com/)

## Fonctionnalités

Principales fonctionnalités du bot 

* Deux niveaux de navigations : 
* * Navigation guidée : Le bot guide l'utilisateur de façon intuitive
* * Navigation libre : le bot répond aux questions de l'utilisateur à travers une interaction directe
* Interraction multimédia
* * Textes
* * Images
* * Embed : Vidéo intégrée, balise HTML native (iframe, div,...), ...
* * Hypertextes
* Interface utilisateur ergonomique
* Expérience utilisateur fluide et agréable
* Informations sur la date et l'heure en temps réel 
* Intégration de RiveScript _Toujours en cours de devéloppement_

Divers
* Loading :  chargement des réponses pour donner l'impresion d'une réflexion du bot
* Delay: possibilté de mettre des délais pour les réponses
* bot_image : Possibilté de donner un logo ou une icone au bot. Cette image va se placer à gauche des interventions du bot
* Intégration d'emojis via https://getemoji.com
* Intégration d'icones : FontAwesome, FlatIcons,... 
  
A venir 🚀
* API de nouvelles (intrégration du flux RSS du site web directement)  _En cours d'implémentation_
* Inclurer plus de langues africaines
* Page d'administration et de paramétrage pour la visualisation des statistiques et des différentes données récoltées
  
Ultime Goal 
* Commande vocale (en intégrant DialogFlow ou MicroSoft BotFramework) 🤞🏾





<!-- GETTING STARTED -->
## Getting Started

### Preréquis


* NPM
  ```sh
  npm install -g npm@latest
  ```
* Vue
  ```sh
  npm install -g @vue/cli
  ```
* Express
  ```sh
  npm install express --save
  ```
_Refferez-vous aux documentations officielles de chaque outils pour plus de détails_

### Installation

1. Cloner le projet
   ```sh
   git clone https://github.com/a-dera/avfabot.git
   ```
2. Installer les packages
   ```sh
   npm install
   ```
3. Configurer le fichier `index.js` selon vos besoins et lancer le projet
   ```sh
   npm run start
   ```


## Usage

Selon vos besoins, modifiez les fichiers dans le dossier [core](https://github.com/a-dera/avfabot/assets/core)


<!-- CONTRIBUTING -->
## Contributions

Pour contribuer au projet suivez ces procédures:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Toute contribution est la bienvenue**.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information. 🔓



<!-- CONTACT -->
## Contributeurs

* **[Amédée DERA](https://github.com/a-dera)** - [@P_A_DERA](https://twitter.com/P_A_DERA) 🔍 💻 ⚙️ 📝 





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/a-dera/avfabot.svg?style=for-the-badge
[contributors-url]: https://github.com/a-dera/avfabot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/a-dera/avfabot.svg?style=for-the-badge
[forks-url]: https://github.com/a-dera/avfabot/network/members
[stars-shield]: https://img.shields.io/github/stars/a-dera/avfabot.svg?style=for-the-badge
[stars-url]: https://github.com/a-dera/avfabot/stargazers
[issues-shield]: https://img.shields.io/github/issues/a-dera/avfabot.svg?style=for-the-badge
[issues-url]: https://github.com/a-dera/avfabot/issues
[license-shield]: https://img.shields.io/github/license/a-dera/avfabot.svg?style=for-the-badge
[license-url]: https://github.com/a-dera/avfabot/blob/master/LICENSE
[product-screenshot]: images/screenshot.png

