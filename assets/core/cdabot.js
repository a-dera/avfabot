var botui = new BotUI('avfabot'); // initialistion de BotUI

//importation
document.write("<script language='JavaScript' src='assets/core/french/main.js'></script>");
document.write("<script language='JavaScript' src='assets/core/english/main.js'></script>");
document.write("<script language='JavaScript' src='assets/core/pular/main.js'></script>");

  botui.message.bot({
    content: 'Bonjour 👋! Je suis agrobot🌱'
  }).then(function () {
        Vue.use(Toasted)
        Vue.toasted.show('<div class="control"><div class="tags has-addons"><span class="tag is-primary is-light">AgroBot</span><span class="tag is-info is-light">V0.4.9-beta.3</span></div></div><span class="tag is-info is-rounded">Proposé par Amédée DERA<span>',{
            theme: "outline", 
            position: "top-center", 
            duration : 5000
        });
    }).then(function () {
      return botui.message.bot({
        delay: 5000,
        content: 'Je peux vous aider à trouver plus rapidement et précisement l\'information que vous rechercher. 😀'
      });
    }).then(function () {
      return start(); // fonction de démarrage: sélection de la langue
    });


/*------------------------- Section start--------------------------------*/
var start = function(){
  botui.message.bot({
    loading:true,
    delay: 1000,
    content: 'Sélectionner une langue pour commencer',
  })
    .then(function () {
      return botui.action.button({
        action: [{
          text: 'English',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'english'
        }, 
        {
          text: 'Arabe',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'arabe'
        },
        {
          text: 'Wolof',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'wolof'
        },
        {
          text: 'Swahili',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'swahili'
        },
        {
          text: 'Tamqsheq',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'tamasheq'
        },
        {
          text: 'Bambara',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'bambara'
        },
        {
          text: 'Dioula',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'dioula'
        },
        {
          text: 'Mooré',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'moore'
        },
        {
          text: 'Pular',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'pular'
        },
        {
          text: 'Continuer en Français',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'french'
        }]
      })
  }).then(function (res) {
    if(res.value == 'english') {
      mainEnglish();
    } else if(res.value == 'pular') {
      mainPular(); 
    } else if(res.value == 'french') {
      mainFrench(); 
    } else {
      mainFrench(); 
    }
  });
}
/*-------------------------------- fin section start------------------------------------*/

