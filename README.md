
# Project Overview

## Project Name

AutoVision 

## Project Description

Searches cars with a reactive search bar that would display an assortment of cars that fit that criteria. 

## API and Data Sample

https://vpic.nhtsa.dot.gov/api/

``` <Response xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<Count>9652</Count>
<Message>Response returned successfully</Message>
<Results>
<AllVehicleMakes>
<Make_ID>440</Make_ID>
<Make_Name>ASTON MARTIN</Make_Name>
</AllVehicleMakes>
<AllVehicleMakes>
<Make_ID>441</Make_ID>
<Make_Name>TESLA</Make_Name>
</AllVehicleMakes>
<AllVehicleMakes>
<Make_ID>442</Make_ID>
<Make_Name>JAGUAR</Make_Name>
</AllVehicleMakes>
<AllVehicleMakes>
<Make_ID>443</Make_ID>
<Make_Name>MASERATI</Make_Name>
</AllVehicleMakes>
<AllVehicleMakes>
<Make_ID>444</Make_ID>
<Make_Name>LAND ROVER</Make_Name>
</AllVehicleMakes>
```

## Wireframes

https://i.imgur.com/tHR46BX.png

### MVP/PostMVP

#### MVP 
- Find and use external car API
- Render data on page with interactive DOM
- Allow user to see car model as well as car year
- Have main HTML, CSS, and Javscript formatting.

#### PostMVP  
- Allow user to go through only 10 results per change and be able to change through it with a button.
- Allow user to see more info about the car such as top speed, acceleration time, possibly interior pictures (might involve second API)
- Allow user to see best cars either from the search given or from an option picking best cars. (might involve second API).
- Have reactive CSS design with retractive search bar, hovering animations, and zoom in effects on click.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Complete

## Priority Matrix

https://i.imgur.com/PuwUhlW.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Added basic HTML, CSS, and Javascript | H | 3hrs| 3.5hrs | 3.5hrs |
| Adding API part 1 | H | 3hrs| 2.5hrs | 2.5hrs |
| Adding API part 2 | H | 3hrs| 3hrs | 3.5hrs |
| Getting API to collect data info | H | 3hrs| 3.5hrs | 3hrs |
| Create button/click event | H | 1hrs| 1.5hrs | 1hrs |
| Render results of API vehicle on page | H | 2hrs| 2.5hrs | 2hrs |
| Create remove past results | H | 1hrs| 1.5hrs | 1hrs |
| Format photos to fit right on page | H | 3hrs| 3hrs | 3hrs |
| Format text to fit by each result | H | 3hrs| 2.5hrs | 2.5hrs |
| Flexbox search and index | H | 3hrs| 3hrs | 3hrs |
| Add icons on website (top bar, button, etc) | H | 3hrs| 3.5hrs | 3hrs |
| Add actual links to icons | H | 3hrs| 3.5hrs | 3hrs |
| Add media queries | H | 3hrs| 3.5hrs | 3hrs | 
| Adding pretty CSS part 1  | H | 3hrs| 3.5hrs | 3hrs |
| Adding pretty CSS part 2 | H | 3hrs| 3.5hrs | 3hrs |
| Total | H | 40hrs| 44hrs | 40hrs |

## Code Snippet


``` function countSplice(array, begin, end, page, putin, direction) {
  console.log(count)

  function helper(array, begin, end, putin){
    let newArr = array.slice(begin, end)
    console.log(newArr)
    
    
if (direction === "up") {
    helper(array, begin, end, putin)
    count += 10;
    page += 1;
  } else if (direction === "down") {
    helper(array, begin - 20, end - 20, putin)
    count -= 10;
    page -= 1;
  }
}
```
## Change Log