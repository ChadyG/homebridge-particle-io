const SensorAccessory = require('./SensorAccessory.js');

class GarageDoorAccessory extends SensorAccessory {

  constructor(log, url, accessToken, device, homebridge) {
    const Service = homebridge.hap.Service;
    const Characteristic = homebridge.hap.Characteristic;
    super(log,
        url,
        accessToken,
        device,
        homebridge,
        Service.GarageDoorOpener,
        Characteristic.CurrentDoorState);
  }

  setCurrentValue(value) {
    if (!(value in [0, 1])) {
      this.log('Unexpected value for garage door:', value);
    }
    super.setCurrentValue(value);
  }
}

module.exports = GarageDoorAccessory;