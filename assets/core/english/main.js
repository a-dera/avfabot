document.write("<script language='JavaScript' src='assets/core/English/chitchat.js'></script>");
document.write("<script language='JavaScript' src='assets/core/English/tag.js'></script>");

var mainEnglish = function() {
  botui.action.button({
    delay: 500,
    action: [{
      text: 'Find out more about the AVFA Agency',
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
      text: 'Partnerships & Cooperations',
      _icon: 'refresh',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'coop'
    },{
      text: 'News',
      _icon: 'file',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'actu'
    },{
      text: 'I can\'t find what I\'m looking for',
      _icon: 'search',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'search'
    },{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'avfa') {
        presentationEnglish();
      } else if(res.value == 'service') {
        serviceEnglish(); 
      } else if(res.value == 'coop') {
        cooperationEnglish(); 
      } else if(res.value == 'actu') {
        actualiteEnglish(); 
      } else if(res.value == 'search') {
        chitchatEnglish(); 
      } else {
        start(); 
      }
  });


}


var presentationEnglish = function() {

    botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: 'Founded in 1990, <strong>the Agricultural Extension and Training Agency</strong>, known by the acronym <u>AVFA</u>,\
              is a public administrative institution with legal personality and financial autonomy.\
              It is placed under the administrative and financial supervision of the Ministry of Agriculture, Hydraulic Resources\
              and Fishing. The pedagogical and technical supervision of the AVFA is provided jointly by the Ministry of Training\
              Vocational and Employment and the Ministry of Agriculture, Water Resources and Fisheries.'
      }).then(function () {
    return botui.action.button({
    delay: 2000,
    action: [{
      text: 'Our missions',
      _icon: 'rocket',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'missions'
    }, {
      text: 'Our values',
      _icon: 'pencil',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'valeurs'
    },{
      text: 'Our vision',
      _icon: 'users',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'vision'
    },{
      text: 'Contact the Agency',
      _icon: 'phone',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'contact'
    },{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'missions') {
        missionsEnglish();
      } else if(res.value == 'valeurs') {
        valeursEnglish(); 
      } else if(res.value == 'vision') {
        visionEnglish(); 
      } else if(res.value == 'contact') {
        contactEnglish(); 
      } else {
        mainEnglish(); 
      }
  })
  });

}

var missionsEnglish = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<span>AVFA ensures the implementation of agricultural training and extension programs provided for in economic and social development plans through:</span>\
              <ul><li>contributing to the design and implementation of national policy on extension and vocational training in the agriculture and fisheries sectors,</li>\
                  <li>the development, monitoring and evaluation of extension and vocational training programs in the agriculture and fisheries sectors,</li>\
                  <li>coordination and complementarity between vocational training establishments in the agriculture and fisheries sectors,</li>\
                  <li>the coordination of the extension system implemented by the regional commissions for agricultural development (CRDA) and the assistance of the latter in the realization of their extension programs through educational and logistical support,</li>\
                  <li>the production and dissemination of written and audio-visual technical popularization documents,</li>\
                  <li>the development of vocational training programs for farmers, shipowners, fishermen and agricultural labor as well as the retraining of extension workers, technicians and staff responsible for their supervision.</li>\
              </ul>'
      }).then(function () {
      return botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://www.avfa.agrinet.tn/avfa/" target="_blank"> More details on the missions here</a>'
      });
    }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationEnglish();
  } else{
    presentationEnglish();
  }
  });
}

var valeursEnglish = function() {
   botui.message.bot({
    delay: 500,
    type:'html',
    content: '<ul><li><strong>Collective work</strong></li>\
                  <li><strong>Networking</strong></li>\
                  <li><strong>Commitment</strong></li>\
                  <li><strong>Integrity</strong></li>\
                  <li><strong>Solidarity</strong></li>\
                  <li><strong>Open</strong></li>\
                  <li><strong>Liability</strong></li>\
                  <li><strong>Sharing</strong></li>\
              </ul>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationEnglish();
  } else{
    presentationEnglish();
  }
  });
}

var visionEnglish = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<a href="https://www.avfa.agrinet.tn/avfa/" target="_blank"> Click here to learn more about the agency\'s vision. </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationEnglish();
  } else{
    presentationEnglish();
  }
  });
}

var contactEnglish = function() {
  botui.message.bot({
        delay: 1000,
        loading: true,
        type:'html',
        content: '<div class="control">\
        <div class="tags has-addons">\
          <span class="tag is-primary is-light">Address: 30, rue Alain Savary,</span>\
          <span class="tag is-primary is-light">1002 Tunis, Tunisia</span>\
          </div></div><br>\
          <span class="tag is-info is-rounded">Email: contact.avfa@iresa.agrinet.tn</span><br><br>\
          <span class="tag is-warning is-rounded">Telephone: (+216) 71.789.025 /</span>\
          <span class="tag is-warning is-rounded">71.796.915 / 71.797.086</span>'
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
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    presentationEnglish();
  } else{
    presentationEnglish();
  }
  });
}



var serviceEnglish = function() {
     botui.action.button({
    delay: 1000,
    action: [{
      text: ' Agricultural advice',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'conseil'
    }, {
      text: 'Training',
      _icon: 'question',
      get icon() {
        return this._icon;
      },
      set icon(value) {
        this._icon = value;
      },
      value: 'formation'
    },{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }]
  }).then(function (res) {
      if(res.value == 'conseil') {
        conseilEnglish();
      } else if(res.value == 'formation') {
        formationEnglish(); 
      } else {
        mainEnglish(); 
      }
  });

}

var conseilEnglish = function() {
  botui.message.bot({
    delay: 500,
    type:'html',
    content: '<a href="https://www.avfa.agrinet.tn/conseil-agricole/" target="_blank"> Click here to find out more. </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    serviceEnglish();
  } else{
    serviceEnglish();
  }
  });
}

var formationEnglish = function() {

  botui.message.bot({ // TODO #2 #1 Correction des icones
    delay: 500,
    type:'html',
    content: '<a href="https://www.avfa.agrinet.tn/formation/" target="_blank"> Click here to find out more. </a>'
      }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Agricultural advice',
        value: 'conseil'
      },{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'conseil') {
    conseilEnglish();
  } else{
    serviceEnglish();
  }
  });
}

var cooperationEnglish = function() {
  botui.action.button({
 delay: 1000,
 action: [{
   text: 'AVFA Priorities',
   _icon: 'star',
   get icon() {
     return this._icon;
   },
   set icon(value) {
     this._icon = value;
   },
   value: 'priorite'
 }, {
   text: 'National and international conventions',
   _icon: 'list',
   get icon() {
     return this._icon;
   },
   set icon(value) {
     this._icon = value;
   },
   value: 'convention'
 },{
  text: 'Cooperation projects',
  _icon: 'list',
  get icon() {
    return this._icon;
  },
  set icon(value) {
    this._icon = value;
  },
  value: 'projet'
},{
  text: 'Support programs',
  _icon: 'list',
  get icon() {
    return this._icon;
  },
  set icon(value) {
    this._icon = value;
  },
  value: 'appui'
},{
     text: 'Return',
     icon: 'angle-left',
     value: 'skip'
   }]
}).then(function (res) {
   if(res.value == 'priorite') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> See the priorities in detail</a>'
        }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Return',
          icon: 'angle-left',
          value: 'skip'
        }
      ]
      })
    }).then(function (res) {
    if(res.value == 'skip') {
      cooperationEnglish();
    } else{
      cooperationEnglish();
    }
    });
   } else if(res.value == 'convention') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> See the conventions in detail </a>'
        }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Return',
          icon: 'angle-left',
          value: 'skip'
        }
      ]
      })
    }).then(function (res) {
    if(res.value == 'skip') {
      cooperationEnglish();
    } else{
      cooperationEnglish();
    }
    });
   } else if(res.value == 'projet') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank"> Find out more about cooperation projects </a>'
        }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Return',
          icon: 'angle-left',
          value: 'skip'
        }
      ]
      })
    }).then(function (res) {
    if(res.value == 'skip') {
      cooperationEnglish();
    } else{
      cooperationEnglish();
    }
    });
  } else if(res.value == 'appui') {
    botui.message.bot({
      delay: 500,
      type:'html',
      content: '<a href="https://www.avfa.agrinet.tn/partenariats-cooperations/" target="_blank">See the support programs in detail </a>'
        }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Return',
          icon: 'angle-left',
          value: 'skip'
        }
      ]
      })
    }).then(function (res) {
    if(res.value == 'skip') {
      cooperationEnglish();
    } else{
      cooperationEnglish();
    }
    });
  } else {
     mainEnglish(); 
   }
});

}

var actualiteEnglish = function() {
  botui.message.bot({
    delay: 50,
    content: '📜 The latest news are loading... ⚡️'
  });
  botui.message.bot({
    delay: 5000,
    loading: true,
    type:'html',
    content: '<ul><li><strong>Consultation for the development of a market analysis of native species with high nutruceutical and health values</strong>\
                  <br>\
                  <br>\
                  <span>The Agricultural Extension and Training Agency, within the framework of the project “Valorization of native Sicilian and Tunisian plant species with nutritional interest and good for health” ESPAS, calls for a consultation 02/2021 for the selection of a consulting firm for the elaboration of a market analysis of indigenous species at high […]</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-pour-lelaboration-dune-analyse-du-marché-des-autochthones-species-à-hautes-valeurs-nutrauceutrique-et-de-sante /" target="_blank">Read More</a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
                  \
                  <li><strong>Consultation for the selection of an event agency or company specializing in events</strong>\
                  <br>\
                  <br>\
                  <span>The Agricultural Extension and Training Agency, within the framework of the project “Valorization of native Sicilian and Tunisian plant species with nutritional interest and good for health” ESPAS, calls for a consultation 04/2021 for selecting an event agency or company specializing in events (download pdf)</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-pour-la-selection-une-agence-evenementielle-ou-societe-specialisee-en-evenementielle/" target="_blank"> Read the next </a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
                  \
                  <li><strong>Consultation for the selection of a service provider for assistance in the coordination of the “ESPAS” project</strong>\
                  <br>\
                  <br>\
                  <span>The Agricultural Extension and Training Agency, within the framework of the project “Valorization of native Sicilian and Tunisian plant species with nutritional interest and good for health” ESPAS, calls for a consultation 02/2021 for selection of a service provider for project coordination assistance (download pdf)</span>\
                  <br>\
                  <br>\
                  <a href="https://www.avfa.agrinet.tn/consultation-02-2021-pour-la-selection-dun-provider-de-service-pour-lassistance-a-la-coordination-du-project -espas/" target="_blank">Read More</a>\
                  </li>\
                  <br>\
                  <hr>\
                  <br>\
              </ul>'
      }).then(function () {
    return  botui.action.button({
      delay: 1000,
      action: [{
        text: 'Return',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'skip') {
    mainEnglish();
  } else{
    mainEnglish();
  }
  });

}
