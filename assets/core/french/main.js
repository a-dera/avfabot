document.write("<script language='JavaScript' src='assets/core/french/chitchat.js'></script>");
document.write("<script language='JavaScript' src='assets/core/french/tag.js'></script>");
document.write("<script language='JavaScript' src='core/rivescript.js'></script>");

var mainFrench = function() {
  botui.action.button({
    delay: 500,
    action: [{
      text: 'En savoir plus sur l\'Agence AVFA',
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
      _icon: 'refresh',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'coop'
    },{
      text: 'Actualités',
      _icon: 'file',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'actu'
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
      } else if(res.value == 'actu') {
        actualiteFrench(); 
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
    content: 'Fondée en 1990, <strong>l’Agence de la Vulgarisation et de la Formation Agricoles</strong>, connue sous l’acronyme <u>AVFA</u>,\
      est un établissement public à caractère administratif doté de la personnalité civile et de l’autonomie financière.\
       Elle est placée sous la tutelle administrative et financière du Ministère de l’Agriculture, des Ressources Hydrauliques\
        et de la Pêche. La tutelle pédagogique et technique de l’AVFA est assurée conjointement par le Ministère de la Formation\
         Professionnelle et de l’Emploi et le Ministère de l’Agriculture, des Ressources Hydrauliques et de la Pêche.'
      }).then(function () {
    return botui.action.button({
    delay: 2000,
    action: [{
      text: 'Nos missions',
      _icon: 'rocket',
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
    content: '<span>L’AVFA veille à la réalisation des programmes de formation et de vulgarisation agricoles prévus dans les plans de développement économique et social à travers:</span>\
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
          <span class="tag is-primary is-light">Adresse: 30, rue Alain Savary,</span>\
          <span class="tag is-primary is-light"> 1002 Tunis, Tunisie</span>\
          </div></div><br>\
          <span class="tag is-info is-rounded">Email : contact.avfa@iresa.agrinet.tn</span><br><br>\
          <span class="tag is-warning is-rounded">Téléphone : (+216) 71.789.025 /</span>\
          <span class="tag is-warning is-rounded"> 71.796.915 / 71.797.086</span>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5882197253327!2d10.1841974!3d36.828386200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca35afeec5e339b1!2sAVFA%3AAgence%20de%20la%20vulgarisation%20et%20de%20la%20formation%20agricoles!5e0!3m2!1sfr!2sbf!4v1654612264463!5m2!1sfr!2sbf" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        // content: '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"\
        //  src="https://www.google.com/maps/place/AVFA:Agence+de+la+vulgarisation+et+de+la+formation+agricoles/@36.828386,10.184197,14z/data=!4m5!3m4!1s0x0:0xca35afeec5e339b1!8m2!3d36.8283311!4d10.1842937?hl=fr;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"\
        //   title="AVFA:Agence de la vulgarisation et de la formation agricoles" aria-label="AVFA:Agence de la vulgarisation et de la formation agricoles"></iframe>'
      });
    })/*.then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
                 src="https://www.google.com/maps/place/AVFA:Agence+de+la+vulgarisation+et+de+la+formation+agricoles/@36.828386,10.184197,14z/data=!4m5!3m4!1s0x0:0xca35afeec5e339b1!8m2!3d36.8283311!4d10.1842937?hl=fr"\

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
    content: '<a href="https://www.avfa.agrinet.tn/conseil-agricole/" target="_blank"> Cliquer ici pour en savoir plus. </a>'
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
    content: '<a href="https://www.avfa.agrinet.tn/formation/" target="_blank"> Cliquer ici pour en savoir plus. </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Conseil agricol',
        value: 'conseil'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'conseil') {
    conseilFrench();
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
   _icon: 'star',
   get icon() {
     return this._icon;
   },
   set icon(value) {
     this._icon = value;
   },
   value: 'priorite'
 }, {
   text: 'Conventions nationales et internationales',
   _icon: 'list',
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
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> Voir les priorités en détails </a>'
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
      cooperationFrench();
    } else{
      cooperationFrench();
    }
    });
   } else if(res.value == 'convention') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> Voir les conventions en détails </a>'
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
      cooperationFrench();
    } else{
      cooperationFrench();
    }
    });
   } else if(res.value == 'projet') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> En savoir plus sur les projets de coopérations </a>'
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
      cooperationFrench();
    } else{
      cooperationFrench();
    }
    });
  } else if(res.value == 'appui') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> Voir les programmes d\'appui en détails </a>'
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
      cooperationFrench();
    } else{
      cooperationFrench();
    }
    });
  } else {
     mainFrench(); 
   }
});

}

var actualiteFrench = function() {
  botui.message.bot({
    delay: 50,
    content: '📜 Patientez pendant que je vous charge les dernières actualités ⚡️'
  });
  botui.message.bot({
    delay: 5000,
    loading: true,
    type:'html',
    content: '<ul><li><strong>Consultation pour l’élaboration d’une analyse du marché des espèces autochtones à hautes valeurs nutrauceutrique et de santé</strong>\
                  <br>\
                  <br>\
                  <span>L’Agence de la Vulgarisation et de la Formation Agricoles, dans le cadre du projet “Valorisation des espèces végétales autochtones siciliennes et tunisiennes avec un intérêt nutritif et bon pour la santé” ESPAS, fait appel à une consultation 02/2021 pour la sélection d’un bureau d’étude pour l’élaboration d’une analyse du marché des espèces autochtones à hautes […]</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-pour-lelaboration-dune-analyse-du-marche-des-especes-autochtones-a-hautes-valeurs-nutrauceutrique-et-de-sante/" target="_blank"> Lire la suite </a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
                  \
                  <li><strong>Consultation pour la sélection une agence événementielle ou société spécialisée en événementielle</strong>\
                  <br>\
                  <br>\
                  <span>L’Agence de la Vulgarisation et de la Formation Agricoles, dans le cadre du projet “Valorisation des espèces végétales autochtones siciliennes et tunisiennes avec un intérêt nutritif et bon pour la santé” ESPAS, fait appel à une consultation 04/2021 pour la sélection une agence événementielle ou société spécialisée en événementielle (télécharger pdf)</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-pour-la-selection-une-agence-evenementielle-ou-societe-specialisee-en-evenementielle/" target="_blank"> Lire la suite </a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
                  \
                  <li><strong>Consultation pour la sélection d’un prestataire de service pour l’assistance à la coordination du projet “ESPAS”</strong>\
                  <br>\
                  <br>\
                  <span>L’Agence de la Vulgarisation et de la Formation Agricoles, dans le cadre du projet “Valorisation des espèces végétales autochtones siciliennes et tunisiennes avec un intérêt nutritif et bon pour la santé” ESPAS, fait appel à une consultation 02/2021 pour la sélection d’un prestataire de service pour l’assistance à la coordination du projet (télécharger pdf)</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-02-2021-pour-la-selection-dun-prestataire-de-service-pour-lassistance-a-la-coordination-du-projet-espas/" target="_blank"> Lire la suite </a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
              </ul>'
      }).then(function () {
    return  botui.action.button({
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
    mainFrench();
  } else{
    mainFrench();
  }
  });

}
