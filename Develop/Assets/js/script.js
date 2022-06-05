
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

        // // auto focus new element
        textInput.trigger("focus")

        });

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

            //calling savetasks
            saveTasks();

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
          

         // var hoursWorkDay = ["9","10","11", "12", "13", "14", "15", "16", "17"]

            console.log("The text in 9AM is " + $('#9AMLi').text());

             // audit time for 9AM List element
              if ( $("#9AMLi").text() === "") {
                console.log("The 9AM Text is null");
                $('#9AMLi').removeClass("bg-light");
                $('#9AMLi').addClass("bg-secondary");
              } else if((hours - listDataHour9AM) >0){
                console.log("time is past for 9AM");
                $('#9AMLi').removeClass("bg-light");
                $('#9AMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour9AM) <=2 ) {
                  console.log("time is close for 3PM");
                  $('#9amLi').removeClass("bg-light");
                  $('#9amLi').addClass("bg-warning");
            }  else if((hours - listDataHour9AM) >3 ){
                $('#9amLi').removeClass("bg-light");
                $('#9amLi').addClass("bg-success");
            } 

            // audit time for 10AM List element
            if ( $("#10AMLi").text()  === "" ) {
                console.log("The 10AM Text is null");
                $('#10AMLi').removeClass("bg-light");
                $('#10AMLi').addClass("bg-secondary");
              } else if((hours - listDataHour10AM) >0){
                console.log("time is past for 9AM");
                $('#10AMLi').removeClass("bg-light");
                $('#10AMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour10AM) <=2 ) {
                  console.log("time is close for 3PM");
                  $('#10AMLi').removeClass("bg-light");
                  $('#10AMLi').addClass("bg-warning");
            }  else if((hours - listDataHour10AM) >3 ){
                $('#10AMLi').removeClass("bg-light");
                $('#10AMLi').addClass("bg-success");
            } 

              // audit time for 10AM List element
              if ( $("#11AMLi").text()  === "" ) {
                console.log("The 11AM Text is null");
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-secondary");
              } else if((hours - listDataHour11AM) >0){
                console.log("time is past for 11AM");
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour11AM) <=2 ) {
                  console.log("time is close for 11AM");
                  $('#11AMLi').removeClass("bg-light");
                  $('#11AMLi').addClass("bg-warning");
            }  else if((hours - listDataHour11AM) >3 ){
                $('#11AMLi').removeClass("bg-light");
                $('#11AMLi').addClass("bg-success");
            } 
                
              // audit time for 12PM List element
              if ( $("#12PMLi").text()  === "" ) {
                console.log("The 12PM Text is null");
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-secondary");
              }else  if((hours - listDataHour12PM) >0){
                console.log("time is past for 12PM");
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour12PM) <=2 ) {
                  console.log("time is close for 12PM");
                  $('#12PMLi').removeClass("bg-light");
                  $('#12PMLi').addClass("bg-warning");
            }   else if((hours - listDataHour12PM) >3 ){
                $('#12PMLi').removeClass("bg-light");
                $('#12PMLi').addClass("bg-success");
            } 

              // audit time for 1PM List element
              if ( $("#1PMLi").text()  === "" ) {
                console.log("The 1PM Text is null");
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-secondary");
              } else if((hours - listDataHour1PM) >=0){
                console.log("time is past for 1PM");
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour1PM) <2 ) {
                  console.log("time is close for 3PM");
                  $('#1PMLi').removeClass("bg-light");
                  $('#1PMLi').addClass("bg-warning");
            }  else if((hours - listDataHour1PM) >3 ){
                $('#1PMLi').removeClass("bg-light");
                $('#1PMLi').addClass("bg-success");
            } 

                  // audit time for 2PM List element
                  if ( $("#2PMLi").text()  === "" ) {
                    console.log("The 2PM Text is null");
                    $('#2PMLi').removeClass("bg-light");
                    $('#2PMLi').addClass("bg-secondary");
                  } else if((hours - listDataHour2PM) >0){
                    console.log("time is past for 2PM");
                    $('#2PMLi').removeClass("bg-light");
                    $('#2PMLi').addClass("bg-danger");
                 }  else if ((hours - listDataHour2PM) <=2 ) {
                      console.log("time is close for 2PM");
                      $('#2PMLi').removeClass("bg-light");
                      $('#2PMLi').addClass("bg-warning");
                }  else if((hours - listDataHour2PM) >3 ){
                    $('#2PMLi').removeClass("bg-light");
                    $('#2PMLi').addClass("bg-success");
                } 

            // audit time for 3PM List element
              if ( $("#3PMLi").text()  === "" ) {
                console.log("The 3PM Text is null");
                $('#3PMLi').removeClass("bg-light");
                $('#3PMLi').addClass("bg-secondary");
              } else if((hours - listDataHour3PM) >=0){
                console.log("time is past for 3PM");
                $('#3PMLi').removeClass("bg-light");
                $('#3PMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour3PM) <=2 ) {
                  console.log("time is close for 3PM");
                  $('#3PMLi').removeClass("bg-light");
                  $('#3PMLi').addClass("bg-warning");
            }  else if((hours - listDataHour3PM) >3 ){
                $('#3PMLi').removeClass("bg-light");
                $('#3PMLi').addClass("bg-success");
            } 

                  // audit time for 4PM List element
                  if ( $("#4PMLi").text()  === "" ) {
                    console.log("The 4PM Text is null");
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-secondary");
                  } else if((hours - listDataHour4PM) >0){
                    console.log("time is past for 4PM");
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-danger");
                 }  else if ((hours - listDataHour4PM) <=2 ) {
                      console.log("time is close for 4PM");
                      $('#4PMLi').removeClass("bg-light");
                      $('#4PMLi').addClass("bg-warning");
                }  else if((hours - listDataHour4PM) >3 ){
                    $('#4PMLi').removeClass("bg-light");
                    $('#4PMLi').addClass("bg-success");
                } 

                // audit time for 5PM List element
              if ( $("#5PMLi").text()  === "" ) {
                console.log("The 5PM Text is null");
                $('#5PMLi').removeClass("bg-light");
                $('#5PMLi').addClass("bg-secondary");
              } else if((hours - listDataHour5PM) >0){
                console.log("time is past for 5PM");
                $('#5PMLi').removeClass("bg-light");
                $('#5PMLi').addClass("bg-danger");
             }  else if ((hours - listDataHour5PM) <=2 ) {
                  console.log("time is close for 3PM");
                  $('#5PMLi').removeClass("bg-light");
                  $('#5PMLi').addClass("bg-warning");
            }  else if((hours - listDataHour5PM) >3 ){
                $('#5PMLi').removeClass("bg-light");
                $('#5PMLi').addClass("bg-success");
            } 
        };

        setInterval(function() {
            $(".list-group-item").each(function(index, el){
                auditTask(el);
            });
        }, (1000*5));




    // load tasks for the first time
  loadTasks();
