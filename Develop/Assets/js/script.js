
// variable for tasks
var tasks = {};

var textinputTemp ="";

//variable for datepicker
// $('.datepicker').datepicker({
//     format: 'DD/mm/dd'
// });

$('#today-date').text(new Date());


    var loadTasks = function() {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    };


  
    // $(function() {
    //     $("#sortable").sortable();
    // });


    //save Tasks function
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
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

        console.log("The input text is " + text);

        });

        // when user clicks outside the li area
        $(".list-group").on("blur", "textarea", function(){
            //get current value of textarea
            var textInput = $(this)
            .val()
            .trim();

            console.log("The new text is " + textInput)

            // get the parent ul's id atrribute
            var ListId = $(this)
            .closest(".list-group")
            .attr("id")
            .replace("list-", "");

            console.log("The attribute ID is " + ListId);

            var index = $(this).parent()
            .closest("li")
            .index();

            // console.log("This is at index " + index);

            tasks[ListId][index].text = textInput;
            saveTasks();

            //recreate li element

            var taskLi =$("<li>")
                .addClass("list-group-item")
                .val(textInput);

            // replace textarea with li element
            $(this).replaceWith(taskLi);

        });

        

        




    // load tasks for the first time
  loadTasks();
