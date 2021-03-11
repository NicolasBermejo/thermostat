class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSave = true;
    this.maxtemp = 25;
    this.mintemp = 10
  }

  up() {
    if (this.temp < this.maxtemp) {
      this.temp ++;
    }
    else {
      throw new Error("This is the maximum temperature");
    }
  }

  down() {
    if (this.temp > this.mintemp) {
      this.temp --;
    }
    else {
      throw new Error("Cannot go below 10 Degrees");
    }
  }

  togglePowerSave() {
    this.powerSave === true ? this.powerSave = false : this.powerSave = true;
    this.powerSave === true ? this.maxtemp = 25 : this.maxtemp = 32;
  }

  reset() {
    this.temp = 20;
  }

  usage() {
    switch (true) {
      case (this.temp < 18):
        return "Low Usage";
      case (this.temp <= 25):
        return "Medium Usage";
      default:
        return "High Usage";
    };
  }
}



// Instead of the Switch statement in the usage method:
// if (this.temp < 18) {
//   return "Low Usage";
// }
// else if (this.temp <=25) {
//   return "Medium Usage";
// }
// else {
//   return "AMERICA FUCK YEAH";
// }
