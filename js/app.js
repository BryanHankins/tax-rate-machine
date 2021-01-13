

  "use strict";

  var input1 = ".input1", // STATE BUTTON
   input2 = "", // SECOND INPUT PUT SALLARARY
    viewer = "#viewer", // displays your bal after taxs
   calculate = ("#caluclate"); /// suppose to calculate input


    input1 = parseFloat(input1);
    input2 = parseFloat(input2);

    

  console.log(".input1");
     
  
  var setNum = function() {
    if (resultNum) {
      input1 = this.getAttribute("data-ops");
      resultNum = ""
  } else {
    theNum += this.getAttribute("data-ops");
    viewer.innerHTML = input1;
  };
  var moveNum = function() {
    oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
      calculate.setAttribute("data-result", "");
  } 
}
    viewer.innerHTML = "#caluclate";
    calculate.onclick = viewer;

  console.log(viewer);

    switch (operator) {
      case "Alabama":
        input1 = 4
          break;
          case "Alaska":
            input1 = 0
          break;
          case "Arizona":
            input1 = 5.6
          break;
          case "Arkansas":
          input1 = 6.5
          break;
          case "California":
          input1 = 7.25
          break;
          case "Colorado":
          input1 = 2.9
          break;
          case "Connecticut":
          input1 = 6.35
          break;
          case "D.C.":
          input1 = 6
          break;
          case "Delaware":
          input1 = 0
          break;
          case "Florida":
         input1 = 6
          break;
          case "Georgia":
          input1 = 2.9
          break;
          case "Hawaii":
          input1 = 4
          break;
          case "Idaho":
          input1 = 4
          break;
          case "Illinosis":
          input1 = 6.25
          break;
          case "Indiana":
          input1 = 7
          break;
          case "Iowa":
          input1 = 6
          break;
          case "Kansas":
          input1 = 6.5
          break;
          case "Kentucky":
          input1 = 6
          break;
          case "Louisiana":
          input1 = 4.45
          break;
          case "Maine":
          input1 = 5.5
          break;
          case "Massachusett":
          input1 = 6.25
          break;
          case "Maryland":
          input1 = 6
          break;
          case "Michigan":
          input1 = 6
          break;
          case "Minnesota":
          input1 = 6.88
          break;
          case "Mississippi":
            input1 = 7
          break;
          case "Missouri":
            input1 = 4.23
          break;
          case "Montana":
            input1 = 0
          break;
          case "North Carolina":
            input1 = 4.75
          break;
          case "North Dakota":
            input1 = 5
          break;
          case "New Hampshire":
            input1 = 0
          break;
          case "New Jersey":
            input1 = 6.63
          break;
          case "New Mexico":
            input1 = 5.13
          break;
          case "New York":
            input = 4
          break;
          case "Nebraska":
            input = 5.5
          break;
          case "Nevada":
            input = 6.85
          break;
          case "Ohio":
            input1 = 5.75
          break;
          case "Oklahoma":
          input1 = 4.5
          break;
          case "Oregon":
            input1 = 0
          break;
          case "Pennsylvania":
            input1 = 6
          break;
          case "Rhode Island":
           input1 = 7
          break;
          case "South Carolina":
            input1 = 6
          break;
          case "South Dakota":
            input1 = 4.5
          break;
          case "Tennessee":
            input1 = 7
          break;
          case "Texas":
            input1 = 6.25
          break;
          case "Utah":
           input1 = 6.1
          break;
          case "Virginia":
             input1 = 5.3
          break;
          case "Vermont":
            input1 = 6
          break;
          case "West Virginia":
            input1 = 6
          break;
          case "Washington":
            input1 = 6.5
          break
          case "Wisconsin":
            input1 = 5
          break;
          case "Wyoming":
            input1 = 4
          break;

          default:
            input1 = 2
    };
    console.log("Wyoming")
    viewer.onclick  = function(){
       viewer.innerHTML = input1 * input2;
    };
    input1.onclick = function () {
      console.log(".input");
    }
    
    caluclate.setAttribute("data-result", input1);
    
  