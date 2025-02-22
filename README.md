# Thermostat Challenge

## Specifications

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is
low-usage, <= 25 is medium-usage, anything else is high-usage.

## User Stories

Thermostat starts at 20 degrees:

> As a user
>
> So that I won't freeze my balls
>
> Thermostat should start out at 20 degrees

You can increase the temperature with an up function

>As a User
>
>So that I can get warmer
>
>I want to be able to increase the temperature

You can decrease the temperature with a down function

>As a User
>
>So that i can cool my balls off
>
>I want to be able to decrease the temperature

The minimum temperature is 10 degrees

>As a User
>
>So that the house doesn't actually freeze
>
>Thermostat cannot go below 10 degrees

Power saving mode is on by default but it can also be turned off

> As a User
>
> So I don't use too much energy
>
> Power saving should be on by default

> As a User
>
> So I can annoy Greta Thunberg
>
> I want to be able to turn power saving off

If power saving mode is on, the maximum temperature is 25 degrees

> As a User
>
> So I don't use too much energy
>
> Max temp if Power saving is on should be 25

If power saving mode is off, the maximum temperature is 32 degrees

> As a User
>
> So that my house doesn't melt
>
> Max temp if Power saving is off should be 32

You can reset the temperature to 20 with a reset function

> As a User
>
> So I dont have to press a button a million times
>
> I can reset the temperature to 20

You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

> As a User
>
> So I can make sure I'm wasting enough energy
>
> I want to check my current energy usage

## JQuery

To install JQuery, go to [JQuery downloads](https://jquery.com/download/) and get the uncompressed download into a jquery.js file (which should be put into a js folder along with an interface.js file).

Once that is done, you can add the following scripts to you index.html file.

```
// index.html

<!DOCTYPE html>
<html>
  <head>
    <script src="src/thermostat.js"></script>
  </head>
  <body>
    <script src="js/jquery.js"></script>
    <script src="js/interface.js"></script>
    <section>
    </section>
  </body>
</html>
```
Once that is done, you can start your JQuery queries into the iterface.js file as such:

```
$(document).ready(function() {

  });
```
