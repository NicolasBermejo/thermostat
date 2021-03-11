$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temp-up').on('click', function() {
    thermostat.up();
      updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
      updateTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermostat.reset();
      updateTemperature();
  });

  $('#togglePowerSave').on('click', function() {
    thermostat.togglePowerSave();
    thermostat.powerSave === true ? $('#powerSave').text('On') : $('#powerSave').text('Off')
      updateTemperature();
  });

  function updateTemperature() {
  $('#temp').text(thermostat.temp);
}
});
