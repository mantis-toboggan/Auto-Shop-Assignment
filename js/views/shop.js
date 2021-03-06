

let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#shop-template').innerHTML,
    bindings: {
        'model.tires': '.tires',
        'model.paint': '.paint',
        'model.exhaust': '.exhaust',
        'model.horsepower': '.horsepower',
        'model.mpg': '.mpg',
        'model.totalcost': '.totalcost',
    }, // put this object in 

    events: {
        'click .mpgbutton': 'boostMPG',
        'click .tirebutton': 'repairTires',
        'click .redpaintbutton': 'changeColorRed',
        'click .greenpaintbutton': 'changeColorGreen',
        'click .orangepaintbutton': 'changeColorOrange',
        'click .blackpaintbutton': 'changeColorBlack',
        'click .exhaustbutton': 'fixExhaust',
        'click .HPbutton': 'improveHP',
    },

    boostMPG: function () {
        this.model.mpg = this.model.mpg + 5;
        this.model.horsepower = this.model.horsepower - 1;
        this.model.totalcost = this.model.totalcost + 100;
    },

    repairTires: function () {
        console.log('Tires are fixed!');
        // you can have up to four tires, 
        if (this.model.tires < 4) {
            this.model.totalcost = this.model.totalcost + 200;
            this.model.tires++;
        }
    },
    // write a changecolor function for each button/color
    changeColorRed: function () {
        // if (not if statement, just English) you hit (color) button change it to that color
        this.model.paint = 'Red';
        this.model.totalcost = this.model.totalcost + 300;
    },
    changeColorGreen: function () {
        // if (not if statement, just English) you hit (color) button change it to that color
        this.model.paint = 'Green';
        this.model.totalcost = this.model.totalcost + 300;
    },
    changeColorOrange: function () {
        // if (not if statement, just English) you hit (color) button change it to that color
        this.model.paint = 'Orange';
        this.model.totalcost = this.model.totalcost + 300;
    },
    changeColorBlack: function () {
        // if (not if statement, just English) you hit (color) button change it to that color
        this.model.paint = 'Black';
        this.model.totalcost = this.model.totalcost + 300;
    },
    fixExhaust: function () { // this is what happens when you 
        if (this.model.exhaust === false) {
            this.model.exhaust = true;
            this.model.totalcost = this.model.totalcost + 300;
        }; // In the interest of moving on I'm moving on, but I'd ideally like my
            // HTML to display 'Broken' and 'Fixed' rather than just 'true'. but I'm gonna move on, 
            // it works for the most part right now.
    },

    improveHP: function () {
        console.log('hp');
        this.model.totalcost = this.model.totalcost + 100;
        this.model.horsepower = this.model.horsepower + 10;
    },

    


    render: function () {
        console.log('rendering');
        this.renderWithTemplate();
    },

});