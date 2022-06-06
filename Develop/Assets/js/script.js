
// variable for tasks
var tasks = [];

var textinputTemp ="";


// get today's date and format it ad Day, Month, numeric day
$('#today-date').text($.datepicker.formatDate('DD, MM dd', new Date()));


    // loading tasks from storage
    var loadTasks = function() {
       
        storedTasks = JSON.parse(localStorage.getItem("tasks"));


        // declare variables for tem storing

        var tasksToDo = "";
        var TaskTime = "";
        var TimeLiElementset = "";

        // Loop over object properties
        $.each(storedTasks, function(list, arr) {
            console.log(list, arr);
            
            //loop over each item in array
             $.each(arr, function(key, value,) {
                 var keyofArray = key;
                 var valueOfKey = value;
                 console.log("key is" + keyofArray);
                 
                // if  key of array is toDo set to variable Tasks to do
                 if (keyofArray === "toDo") {
                    tasksToDo = valueOfKey;
                 }

                 // if key of array is time set variable to tasktime
                 if (keyofArray === "time"){
                    TaskTime = valueOfKey;
                 }

                });
                 
                //set variable to equal the id of the list element we are targetting
                 TimeLiElementset = ("#" + TaskTime + "Li");
               
                // set task saved to the correct time slot in workday
                $(TimeLiElementset).text(tasksToDo); 
            
            });
    }


           

    

        // when user clicks outside the li area a new Li is replaced with current text
        $(".list-group").on("blur", "textarea", function(){
            //get current value of textarea
            var userInputText = $(this)
            .val()
            .trim();


            //recreate >li> element
            var taskLi = $("<li>")
            .addClass("list-group-item")
            .addClass("col-lg-9")
            .addClass("bg-light")
            .text(userInputText);

            //replace textarea with new content

            $(this).replaceWith(taskLi);

        });

        
        //audit tasks

        var auditTask = function() {

          var now = new Date(Date.now());
          var hours = parseInt(now.getHours());
          var listDataHour9AM = parseInt($('#9AMLi').attr('data-hour'));
          var listDataHour10AM = parseInt($('#10AMLi').attr('data-hour'));
          var listDataHour11AM = parseInt($('#11AMLi').attr('data-hour'));
          var listDataHour12PM = parseInt($('#12MLi').attr('data-hour'));
          var listDataHour1PM = parseInt($('#1PMLi').attr('data-hour'));
          var listDataHour2PM = parseInt($('#2PMLi').attr('data-hour'));
          var listDataHour3PM = parseInt($('#3PMLi').attr('data-hour'));
          var listDataHour4PM = parseInt($('#4PMLi').attr('data-hour'));
          var listDataHour5PM = parseInt($('#5PMLi').attr('data-hour'));
          console.log("The time in Hours is " + hours); 
        //   console.log(" The data hour is " + listDataHour);
          
        //remove any old classes from element

        $("9AMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("10AMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("11AMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("12PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("1PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("2PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("3PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("4PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");
        $("5PMLi").removeClass("bg-secondary bg-danger bg-warning bg-succes");

         // var hoursWorkDay = ["9","10","11", "12", "13", "14", "15", "16", "17"]

            console.log("The text in 9AM is " + $('#9AMLi').text());

             // audit time for 9AM List element
             if ( $("#9AMLi").text()  != "" ) {
              console.log("The 9AM Text is null");
              $('#9AMLi').removeClass("bg-light");
              $('#9AMLi').addClass("bg-secondary");
            } 
            else if (moment(hours).isAfter(listDataHour9AM)) {
              console.log("time is past for 9AM");
              $('#9AMLi').removeClass("bg-light");
              $('#9AMLi').addClass("bg-danger");
           }  
            else if (Math.abs(moment(hours).diff(listDataHour9AM, "hours")) <= 1){
                console.log("time is close for 9AM");
                $('#9AMLi').removeClass("bg-light");
                $('#9AMLi').addClass("bg-warning");
          }  else if (moment(hours).isSameOrBefore(listDataHour9AM)){
              $('#9AMLi').removeClass("bg-light");
              $('#9AMLi').addClass("bg-success");
          };

            // audit time for 10AM List element
            if ( $("#10AMLi").text()  === "" ) {
              console.log("The 10AM Text is null");
              $('#10AMLi').removeClass("bg-light");
              $('#10AMLi').addClass("bg-secondary");
            } 
            else if (moment(hours).isAfter(listDataHour10AM)) {
              console.log("time is past for 10AM");
              $('#10AMLi').removeClass("bg-light");
              $('#10AMLi').addClass("bg-danger");
           }  
            else if (Math.abs(moment(hours).diff(listDataHour10AM, "hours")) <= 1){
                console.log("time is close for 10AM");
                $('#10AMLi').removeClass("bg-light");
                $('#10AMLi').addClass("bg-warning");
          }  else if (moment(hours).isSameOrBefore(listDataHour10AM)){
              $('#10AMLi').removeClass("bg-light");
              $('#10AMLi').addClass("bg-success");
          };

              //audit time for 10AM List element
              if ( $("#11AMLi").text()  === "" ) {
                console.log("The 11AM Text is null");
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-secondary");
              } 
              else if (moment(hours).isAfter(listDataHour11AM)) {
                console.log("time is past for 11AM");
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-danger");
             }  
              else if (Math.abs(moment(hours).diff(listDataHour11AM, "hours")) <= 1){
                  console.log("time is close for 11AM");
                  $('#11AMLi').removeClass("bg-light");
                  $('#11AMLi').addClass("bg-warning");
            }  else if (moment(hours).isSameOrBefore(listDataHour11AM)){
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-success");
            };
                
              //audit time for 12PM List element
              if ( $("#12PMLi").text()  === "" ) {
                console.log("The 12PM Text is null");
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-secondary");
              } 
              else if (moment(hours).isAfter(listDataHour12PM)) {
                console.log("time is past for 12PM");
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-danger");
             }  
              else if (Math.abs(moment(hours).diff(listDataHour12PM, "hours")) <= 1){
                  console.log("time is close for 12PM");
                  $('#12PMLi').removeClass("bg-light");
                  $('#12PMLi').addClass("bg-warning");
            }  else if (moment(hours).isSameOrBefore(listDataHour12PM)){
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-success");
            };

              // audit time for 1PM List element
           
              if ( $("#1PMLi").text()  === "" ) {
                console.log("The 1PM Text is null");
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-secondary");
              } 
              else if (moment(hours).isAfter(listDataHour1PM)) {
                console.log("time is past for 1PM");
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-danger");
             }  
              else if (Math.abs(moment(hours).diff(listDataHour1PM, "hours")) <= 1){
                  console.log("time is close for 1PM");
                  $('#1PMLi').removeClass("bg-light");
                  $('#1PMLi').addClass("bg-warning");
            }  else if (moment(hours).isSameOrBefore(listDataHour1PM)){
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-success");
            };

                 // audit time for 2PM List element
                 if ( $("#2PMLi").text()  === "" ) {
                  console.log("The 2PM Text is null");
                  $('#2PMLi').removeClass("bg-light");
                  $('#2PMLi').addClass("bg-secondary");
                } 
                else if (moment(hours).isAfter(listDataHour2PM)) {
                  console.log("time is past for 2PM");
                  $('#2PMLi').removeClass("bg-light");
                  $('#2PMLi').addClass("bg-danger");
               }  
                else if (Math.abs(moment(hours).diff(listDataHour2PM, "hours")) <= 1){
                    console.log("time is close for 2PM");
                    $('#2PMLi').removeClass("bg-light");
                    $('#2PMLi').addClass("bg-warning");
              }  else if (moment(hours).isSameOrBefore(listDataHour2PM)){
                  $('#2PMLi').removeClass("bg-light");
                  $('#2PMLi').addClass("bg-success");
              };

            // audit time for 3PM List element
        
                     if ( $("#3PMLi").text()  === "" ) {
                      console.log("The 3PM Text is null");
                      $('#3PMLi').removeClass("bg-light");
                      $('#3PMLi').addClass("bg-secondary");
                    } 
                    else if (moment(hours).isAfter(listDataHour3PM)) {
                      console.log("time is past for 3PM");
                      $('#3PMLi').removeClass("bg-light");
                      $('#3PMLi').addClass("bg-danger");
                   }  
                    else if (Math.abs(moment(hours).diff(listDataHour3PM, "hours")) <= 1){
                        console.log("time is close for 3PM");
                        $('#3PMLi').removeClass("bg-light");
                        $('#3PMLi').addClass("bg-warning");
                  }  else if (moment(hours).isSameOrBefore(listDataHour3PM)){
                      $('#3PMLi').removeClass("bg-light");
                      $('#3PMLi').addClass("bg-success");
                  };

                  // audit time for 4PM List element
                  if ( $("#4PMLi").text()  === "" ) {
                    console.log("The 4PM Text is null");
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-secondary");
                  } 
                  else if (moment(hours).isAfter(listDataHour4PM)) {
                    console.log("time is past for 4PM");
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-danger");
                 }  
                  else if (Math.abs(moment(hours).diff(listDataHour4PM, "hours")) <= 1){
                      console.log("time is close for 4PM");
                      $('#4PMLi').removeClass("bg-light");
                      $('#4PMLi').addClass("bg-warning");
                }  else if (moment(hours).isSameOrBefore(listDataHour4PM)){
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-success");
                };
              

                // audit time for 5PM List element
              
                if ( $("#5PMLi").text()  === "" ) {
                  console.log("The 5PM Text is null");
                  $('#5PMLi').removeClass("bg-light");
                  $('#5PMLi').addClass("bg-secondary");
                } 
                else if (moment(hours).isAfter(listDataHour5PM)) {
                  console.log("time is past for 5PM");
                  $('#5PMLi').removeClass("bg-light");
                  $('#5PMLi').addClass("bg-danger");
               }  
                else if (Math.abs(moment(hours).diff(listDataHour5PM, "hours")) <= 2){
                    console.log("time is close for 5PM");
                    $('#5PMLi').removeClass("bg-light");
                    $('#5PMLi').addClass("bg-warning");
              }  else if (moment(hours).isSameOrBefore(listDataHour5PM)){
                  $('#5PMLi').removeClass("bg-light");
                  $('#5PMLi').addClass("bg-success");
              };
        };

        // save Tasks function
    var saveTasks = function() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  };

      // task text was clicked
      $(".list-group").on("click", "li", function() {
      // get current text of li element
      var text = $(this)
      .text()
      .trim();

      //replace li with a new textarea

      var textInput = $("<textarea>").addClass("form-control").val(text);
      $(this).replaceWith(textInput);

        // audit tasks
      auditTask();

      // // auto focus new element
      textInput.trigger("focus")

      

      });

        // save tasks when button clicked

        $(".btn").on("click", function(){


          // get the ID of the button clicked
          var button_time =$(this)
          .attr("id")

          //find the text that was input in the <li> element
          var text_input = $(this)
          .parent()
          .find("li")
          .text()
          .trim();

          // declaring object with Time and task
          var tasksDataObj = {
              toDo: text_input,
              time: button_time,
          }

          // pushing objectinfo  into tasks
          tasks.push(tasksDataObj);

          // Audit Tasks
          //calling savetasks
          saveTasks();

      });

        setInterval(function() {
            $(".list-group-item").each(function(index, el){
                auditTask(el);
            });
        }, (1000*5));




    // load tasks for the first time
  loadTasks();
