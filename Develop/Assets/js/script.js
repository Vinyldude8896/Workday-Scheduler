
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

            var counterAM = 10;
            var counterPM = 1;
        }

        setInterval(function() {
            $(".list-group-item").each(function(index, el){
                auditTask(el);
            });
        }, (1000*5));




    // load tasks for the first time
  loadTasks();
