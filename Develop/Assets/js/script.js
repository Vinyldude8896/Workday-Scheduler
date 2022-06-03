
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

$('#today-date').text(new Date());


    var loadTasks = function() {
         var tasksSaved = JSON.parse(localStorage.getItem("toDo"));
         console.log("The Saved Task is " + tasksSaved);
        $("#10AM").text(tasksSaved);
    };


  
    // $(function() {
    //     $("#sortable").sortable();
    // });


    // save Tasks function
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks.toDo));
    };

        // task text was clicked
        $(".list-group").on("click", "li", function() {
        // get current text of li element
        var text = $(this)
        .text()
        .trim();

        //replace p with a new textarea

        var textInput = $("<textarea>").addClass("form-control").val(text);
        $(this).replaceWith(textInput);

        // // auto focus new element
        textInput.trigger("focus")

        });

        // when user clicks outside the li area
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
        


            console.log("the position of this is " + Position);

            console.log("The id of the input text is " + timeSpotInput);

            console.log("The new text is " + userInputText)

            tasks.toDo = userInputText;

            localStorage.setItem("toDo", JSON.stringify(tasks.toDo));


            // // save in tasks array
            // tasks.push({
            //     time: "",
            //     toDo: userInputText
            // });
        
            // saveTasks();

            // // get the parent ul's id atrribute
            // var ListIdTime = $(this)
            // .closest(".list-group-item")
            // .attr("id")

            // console.log("The attribute Time ID is " + ListId);

            // localStorage.setItem("ListIdTime", JSON.stringify(tasks.time));

            // // var index = $(this).parent()
            // // .closest("li")
            // .index();

            // console.log("This is at index " + index);

            // tasks[ListId][index].text = textInput;
            // saveTasks();

            //recreate li element

            // var taskLi =$("<li>")
            //     .addClass("list-group-item")
            //     .val(textInput);

            // // replace textarea with li element
            // $(this).replaceWith(taskLi);

        });

        

        




    // load tasks for the first time
  loadTasks();
