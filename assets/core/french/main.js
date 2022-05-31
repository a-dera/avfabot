document.write("<script language='JavaScript' src='assets/core/french/chitchat.js'></script>");
document.write("<script language='JavaScript' src='assets/core/french/tag.js'></script>");
document.write("<script language='JavaScript' src='core/rivescript.js'></script>");
var mainFrench = function() {
  botui.action.button({
    delay: 500,
    action: [{
      text: 'En savoir plus sur l\'AGENCE DE LA VULGARISATION ET DE LA FORMATION AGRICOLES',
      _icon: 'info',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'avfa'
    }, {
      text: 'Services',
      _icon: 'rocket',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'service'
    },{
      text: 'Partenariats & Coopérations',
      _icon: 'rocket',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'coop'
    },{
      text: 'Je ne trouve pas ce que je cherche',
      _icon: 'search',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'search'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'avfa') {
        presentationFrench();
      } else if(res.value == 'service') {
        serviceFrench(); 
      } else if(res.value == 'coop') {
        cooperationFrench(); 
      } else if(res.value == 'search') {
        chitchatFrench(); 
      } else {
        start(); 
      }
  });


}


var presentationFrench = function() {

    botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: 'Fondée en 1990, l’Agence de la Vulgarisation et de la Formation Agricoles, connue sous l’acronyme AVFA,  est un établissement public à caractère administratif doté de la personnalité civile et de l’autonomie financière. Elle est placée sous la tutelle administrative et financière du Ministère de l’Agriculture, des Ressources Hydrauliques et de la Pêche. La tutelle pédagogique et technique de l’AVFA est assurée conjointement par le Ministère de la Formation Professionnelle et de l’Emploi et le Ministère de l’Agriculture, des Ressources Hydrauliques et de la Pêche.'
      }).then(function () {
    return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Nos missions',
      _icon: 'hat',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'missions'
    }, {
      text: 'Nos valeurs',
      _icon: 'pencil',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'valeurs'
    },{
      text: 'Notre vision',
      _icon: 'users',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'vision'
    },{
      text: 'Contacter l\'Agence',
      _icon: 'phone',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'contact'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'missions') {
        missionsFrench();
      } else if(res.value == 'valeurs') {
        valeursFrench(); 
      } else if(res.value == 'vision') {
        visionFrench(); 
      } else if(res.value == 'contact') {
        contactFrench(); 
      } else {
        mainFrench(); 
      }
  })
  });

}

var missionsFrench = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<span>L’AVFA veille à la réalisation des programmes de formation et de vulgarisation agricoles prévus dans les plans de développement économique et social à travers:<span>\
              <ul><li>la contribution à la conception et à la mise en œuvre de la politique nationale en matière de vulgarisation et de formation professionnelle dans les secteurs de l’agriculture et de la pêche,</li>\
                  <li>l’élaboration, le suivi et l’évaluation des programmes de vulgarisation et de formation professionnelle dans les secteurs de l’agriculture et de la pêche,</li>\
                  <li>la coordination et la complémentarité entre les établissements de formation professionnelle dans les secteurs de l’agriculture et de la pêche,</li>\
                  <li>la coordination du système de vulgarisation mis en œuvre par les commissariats régionaux au développement agricole (CRDA) et l’assistance de ces derniers dans la réalisation de leurs programmes de vulgarisation par l’appui pédagogique et logistique,</li>\
                  <li>la production et la diffusion des documents techniques écrits et audio-visuels de vulgarisation,</li>\
                  <li>l’élaboration des programmes de formation professionnelle pour les agriculteurs, les armateurs, les pêcheurs et pour la main d’œuvre agricole ainsi que le recyclage des vulgarisateurs, des techniciens et des personnels chargés de leur encadrement.</li>\
              </ul>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://www.avfa.agrinet.tn/avfa/" target="_blank"> Plus de détails sur les missions ici</a>'
      });
    }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var valeursFrench = function() {
   botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>Travail collectif</strong></li>\
                  <li><strong>Réseautage</strong></li>\
                  <li><strong>Engagement</strong></li>\
                  <li><strong>Intégrité</strong></li>\
                  <li><strong>Solidarité</strong></li>\
                  <li><strong>Ouverture</strong></li>\
                  <li><strong>Responsabilité</strong></li>\
                  <li><strong>Partage</strong></li>\
              </ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var visionFrench = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://www.avfa.agrinet.tn/avfa/" target="_blank"> Cliquer ici pour en savoir plus sur la vison de l\'agence. </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}

var contactFrench = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<div class="control">\
        <div class="tags has-addons">\
          <span class="tag is-primary is-light">Adresse: 30, rue Alain Savary, 1002 Tunis, Tunisie</span>\
          </div></div><br>\
          <span class="tag is-info is-rounded">Email : contact.avfa@iresa.agrinet.tn</span><br><br>\
          <span class="tag is-info is-rounded">Téléphone : (+216) 71.789.025 / 71.796.915 / 71.797.086</span>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/AVFA:Agence+de+la+vulgarisation+et+de+la+formation+agricoles/@36.828386,10.184197,14z/data=!4m5!3m4!1s0x0:0xca35afeec5e339b1!8m2!3d36.8283311!4d10.1842937?hl=fr" title="AVFA:Agence de la vulgarisation et de la formation agricoles" aria-label="AVFA:Agence de la vulgarisation et de la formation agricoles"></iframe>'
      });
    })/*.then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'embed',
        content: 'https://maps.google.com/maps?q=Group%20Famib%20-%20%C3%A0%20la%20hauteur%20de%20vos%20attentes&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" '
      });
    })*/.then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationFrench();
  } else{
    presentationFrench();
  }
  });
}



var serviceFrench = function() {
     botui.action.button({
    delay: 1000,
    action: [{
      text: 'Conseil agricol',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'conseil'
    }, {
      text: 'Formation',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'formation'
    },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'conseil') {
        conseilFrench();
      } else if(res.value == 'formation') {
        formationFrench(); 
      } else {
        mainFrench(); 
      }
  });

}

var conseilFrench = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li>L’adhésion au Cluster Digital Africa se fait à travers une demande préalable au moyen d’un formulaire de demande d’adhésion. Celle-ci est conditionnée par l\'acceptation du Bureau exécutif du cluster digital Africa. Et est valable pour l’année civile en cours. Après l’acceptation par la structure de validation des candidatures, le postulant est automatiquement considéré comme membre du cluster tout en acceptant les termes de la charte du Cluster Digital Africa. </li>\
                  <li><strong>L’adhésion au Cluster Digital Africa implique: </strong><br> L’engagement à respecter les Statuts de l’organisme. Si toutefois un membre ne souhaite pas/plus renouveler son adhésion au réseau, il devra en informer le Cluster (par courrier ou par email) dans un délai d’un mois (30jours). </li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    serviceFrench();
  } else{
    serviceFrench();
  }
  });
}

var formationFrench = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: '<ul><li><span class="icon"><i class="fas fa-minus"></i></span>Donnez une visibilité régionale, nationale et internationale à votre entreprise.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Bénéficiez de services sur-mesure et de formations spécialisées.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Accédez à des partenaires financiers.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Accompagnement et renforcement de la croissance dans votre entreprise.</li>\
                  <li><span class="icon"><i class="fas fa-minus"></i></span>Soyez plus proche de vos collaborateurs partout en Afrique.</li></ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les conditions d\'adhésion',
        value: 'conditions'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'conditions') {
    conditionsFrench();
  } else{
    serviceFrench();
  }
  });
}

var cooperationFrench = function() {
  botui.action.button({
 delay: 1000,
 action: [{
   text: 'Priorités de l\'AVFA',
   _icon: 'question',
   get icon() {
     return this._icon;
   },
   set icon(value) {
     this._icon = value;
   },
   value: 'priorite'
 }, {
   text: 'Conventions nationales et internationales',
   _icon: 'question',
   get icon() {
     return this._icon;
   },
   set icon(value) {
     this._icon = value;
   },
   value: 'convention'
 },{
  text: 'Projets de coopération',
  _icon: 'list',
  get icon() {
    return this._icon;
  },
  set icon(value) {
    this._icon = value;
  },
  value: 'projet'
},{
  text: 'Programmes d\'appui',
  _icon: 'list',
  get icon() {
    return this._icon;
  },
  set icon(value) {
    this._icon = value;
  },
  value: 'appui'
},{
     text: 'Retour',
     icon: 'angle-left',
     value: 'skip'
   }]
}).then(function (res) {
   if(res.value == 'priorite') {
     commentFrench();
   } else if(res.value == 'convention') {
     pourquoiFrench(); 
   } else if(res.value == 'projet') {
    conditionsFrench(); 
  } else if(res.value == 'appui') {
    conditionsFrench(); 
  } else {
     mainFrench(); 
   }
});

}
