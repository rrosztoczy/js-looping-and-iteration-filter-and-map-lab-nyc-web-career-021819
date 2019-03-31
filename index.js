// Code your solution here:
// index.js
function driversWithRevenueOver(drivers, revenue) {
return drivers.filter(function (driver) { return driver['revenue'] > revenue })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let driverNames = []
  
  function driverName(driver) {
   if (driver['revenue'] > revenue) {
     driverNames.push(driver['name'])
   }
  }

  drivers.filter(driverName)
  return driverNames
}

function exactMatch(drivers, object) {
  // This function takes an array of driver objects as the first argument and a JavaScript object 
  // that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) 
  // will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will 
  // return all drivers whose name attribute equals Bob.
  let driverObjects = []
  function driverObject(driver) {
   if (driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]) {
     driverObjects.push(driver)
   }
  }

  drivers.filter(driverObject)
  return driverObjects
}

function exactMatchToList(drivers, object) {
  let driverObjects = []
  function driverObject(driver) {
   if (driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]) {
     driverObjects.push(driver['name'])
   }
  }

  drivers.filter(driverObject)
  return driverObjects
  
}
// returns an array of names for all matching drivers ‣
// ReferenceError: exactMatchToList is not defined
//     at Context.<anonymous> (test/indexTest.js:75:7)
// returns an empty array if there is no match
