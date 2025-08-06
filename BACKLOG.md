# Backlog

This document contains the user stories for the cars-trip project. A good title fits on a 'sticky note' and examples are the key to understanding a story!

## 🔖 Labels

- 📋 : todo story
- ✅ : done story
- 🏆 : milestone
- ✅ 🏆 : reached milestone

## User stories

| Status | As a | I want                                                                                             | so that                                                 | Acceptance Criteria                                                                                                                                                                                               |
|--------|------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 📋     | user | to be able to charge an electric vehicle by adding energy in kWh                                   | the EV can store energy for travel                      | - EVs must exposes a method to charge<br>-Charging increases the currentCharge up to the maximum batteryCapacity limit<br>-Charging does not affect gasoline vehicles                                             |
| 📋     | user | to retrieve the current battery charge level of an EV                                              | I can monitor energy availability                       | - EV exposes a method currentCharge(): number returning current charge in kWh<br>- Gasoline cars retain their currentFuel method or equivalent showing fuel                                                       |
| ✅      | user | electric vehicles to have properties like battery capacity, energy consumption, and current charge | the system can correctly represent the state of EVs     | - EVs must have batteryCapacity (kWh) property<br>- EVs must have energyConsumption (kWh/100km) property<br>- EVs must start with currentCharge = 0 kWh                                                           |
| 📋     | user | the travel behavior of EVs to use energy consumption calculations                                  | the driving simulation reflects actual battery drainage | - EV travel reduces currentCharge based on distance and energyConsumption (kWh/100km)<br>- Gasoline cars travel reduces fuel as before<br>- Attempting to travel without sufficient charge/fuel prevents the trip |
| 📋     | user | the data representation of EVs to include the current battery charge                               | I can observe vehicle status accurately                 | - data() method for EV shows currentCharge instead of currentFuel<br>- Gasoline cars' data() output remains unchanged showing fuel level                                                                          |