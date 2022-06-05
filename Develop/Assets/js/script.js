
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
         // localStorage.setItem("time", JSON.stringify(tasks.time));
        // localStorage.setItem("toDo", JSON.stringify(tasks.toDo));
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

            var timeSpotInput = $(this)
            .closest(".list-group-item")
            .attr("id")
            // .replace("list-", "");

            var Position = $(this)
            .closest(".list-group-item")
            .position();

            //recreate p element
            var taskLi = $("<li>")
            .addClass("list-group-item")
            .addClass("col-lg-9")
            .addClass("bg-light")
            .text(userInputText);

            //replace textarea with new content

            $(this).replaceWith(taskLi);

            // console.log("the position of this is " + Position);

            // console.log("The id of the input text is " + timeSpotInput);

            // console.log("The new text is " + userInputText)

            

        });


        // save tasks when button clicked

        $(".btn").on("click", function(){

            var button_time =$(this)
            .attr("id")

            var text_input = $(this)
            .parent()
            .find("li")
            .text()
            .trim();

            var tasksDataObj = {
                toDo: text_input,
                time: button_time,
            }

            console.log("The button was clicked next to " + button_time);
            console.log("the text in that time is " + text_input);
            // console.log("this is the data hour " + text_input_hour);
     
    

            tasks.push(tasksDataObj);

            saveTasks();

        });
        
        //audit tasks

        var auditTask = function() {

            var counterAM = 10;
            var counterPM = 1;

            for (counterAM; counterAM >12; counter++ ) {
                
                var targetLi =( "#" + counterAM +  "Li");
                console.log("TargetLI text is" + targetLi).text();
                if ((targetLi).text === "") {
                    console.log("TargetLI text is" + targetLi).text();
                    (targetLi).addClass("bg-secondary");
                }
                
            }

            // console.log("This list group item text is " + $("li").text().trim());
            // // get time from li element
            // if ($("li").text().trim() != "") {
            //     console.log("text is not null");
            //     $("li").addClass("bg-info");
                
            }
            // var time = $("list-group-item").find("h2").text().trim();
            // console.log("This is the time of task" + time);

            // // convert to moment object 
            // var time = moment(time, "L").set("hour", 17);

            // if (moment().isAfter(time)) {
            //     $(taskEl).addClass("bg-danger");
            // }
            // else if (Math.abs(moment().diff(time, "hours")) <=2) {
            //     $(taskEl).addClass("bg-warning")
            // }
        // }
        

        setInterval(function() {
            $(".list-group-item").each(function(index, el){
                auditTask(el);
            });
        }, (1000*5));




    // load tasks for the first time
  loadTasks();
