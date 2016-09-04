function controlsMenu(){
	this.stockControls = {
      Common : {
        SWITCH : 75, // K
        CAMERA : 67 //
      },
      //SHIP
      Ship : {
        ACCEL : 87, // W
        DECEL : 83, // S
        TURNRIGHT : 68, // D
        TURNLEFT : 65, //A
        SHOOT : 73, // I
        SPECIAL: 16 // Shift
      },
      //TURNRIGHT

      //BOT
      Bot: {
        ACCEL : 87,
        DECEL : 83,
        TURNLEFT : 65,
        TURNRIGHT : 68,
        STRAFELEFT : 74,
        STRAFERIGHT : 76,
        SHOOT : 73,
        SPECIAL : 16
      }
    };

  this.reverseControls = {
      Common : {
        SWITCH : 75,
        CAMERA : 67
      },
      //SHIP
      Ship : {
        ACCEL : 83,
        DECEL : 87,
        TURNRIGHT : 68,
        TURNLEFT : 65,
        SHOOT : 73,
        SPECIAL: 16
      },
      //TURNRIGHT

      //BOT
      Bot: {
        ACCEL : 87,
        DECEL : 83,
        TURNLEFT : 65,
        TURNRIGHT : 68,
        STRAFELEFT : 74,
        STRAFERIGHT : 76,
        SHOOT : 73,
        SPECIAL : 16
      }
    };

    this.controlsTimer = .5;
    this.currentControlsTimer = this.controlsTimer;
    this.controlsChoice = 0;
    this.controlTypes = ["REGULAR",
      "REVERSE",
      "CUSTOM1",
      "CUSTOM2",
      "CUSTOM3",
      "CUSTOM4",
      "CUSTOM5",
      "CUSTOM6"];
    this.controlConfigurations = new controlConfigurations();


    this.update = function(dt){
      this.currentControlsTimer-= dt;
      if(this.currentControlsTimer < 0){
        if(game.keys[39]){
          this.controlsChoice++;
          this.controlsChoice %= this.controlTypes.length;

          if(this.controlsChoice == 0){
            game.KeyBinds = this.stockControls;
          }
          else if(this.controlsChoice == 1){
            game.KeyBinds = this.reverseControls;
          }
          else if(this.controlsChoice == 2){
            game.KeyBinds = this.controlConfigurations["customControls1"];
          } 
          else if(this.controlsChoice == 3){
            game.KeyBinds = this.controlConfigurations["customControls2"];
          }
          else if(this.controlsChoice == 4){
            game.KeyBinds = this.controlConfigurations["customControls3"];
          }
          else if(this.controlsChoice == 5){
            game.KeyBinds = this.controlConfigurations["customControls4"];
          }
          else if(this.controlsChoice == 6){
            game.KeyBinds = this.controlConfigurations["customControls5"];
          }
          else if(this.controlsChoice == 7){
            game.KeyBinds = this.controlConfigurations["customControls6"];
          }
          else{
            game.KeyBinds = this.stockControls;
          }
          
          this.currentControlsTimer = this.controlsTimer;
        }  
      }
    }
    

     
    

    this.draw = function(dt){
      draw.drawControlsMenu();
    }
}