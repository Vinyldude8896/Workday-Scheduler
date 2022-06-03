
// variable for tasks
var tasks = [
    {
        time: "",
        toDo: ""
    }
];

var textinputTemp ="";

//variable for datepicker
// $('.datepicker').datepicker({
//     format: 'DD/mm/dd'
// });

$('#today-date').text($.datepicker.formatDate('DD, MM dd', new Date()));


    var loadTasks = function() {
         var timesaved = JSON.parse(localStorage.getItem("time"))
         var tasksSaved = JSON.parse(localStorage.getItem("toDo"));
         console.log("The Saved Task is " + tasksSaved);

        var targetLi =( "#" + timesaved +  "Li");
        console.log("the target li is " + targetLi);
        $(targetLi).text(tasksSaved);
    };


  
    // $(function() {
    //     $("#sortable").sortable();
    // });


    // save Tasks function
    var saveTasks = function() {
        localStorage.setItem("time", JSON.stringify(tasks.time));
        localStorage.setItem("toDo", JSON.stringify(tasks.toDo));
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

        $(".btn").on("click", function(tasksDataObj){

            var button_time =$(this)
            .attr("id")

            var text_input = $(this)
            .parent()
            .find("li")
            .text()
            .trim();

            // var tasksDataObj = {
            //     toDo: text_input,
            //     time: button_time,
            // }

            console.log("The button was clicked next to " + button_time);
            console.log("the text in that time is " + text_input);
     
            // tasks.toDo = text_input;
            // tasks.time = button_time;

            tasks.toDo = text_input;
            tasks.time = button_time;

            // tasks.push(tasksDataObj);

            saveTasks();

        });
        
        //audit tasks

        var auditTask = function(taskEl) {

            $(this)
            .children

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
