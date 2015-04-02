'use strict';

//
// app.js is the entry point for the entire client-side
// application. Any necessary top level libraries should be
// required here (e.g. pym.js), and it should also be
// responsible for instantiating correct viewcontrollers.
//

require('./lib/okvideo');

$(function() {
        $.okvideo({ source: 'https://vimeo.com/123904052', volume: 0 }) 
});
