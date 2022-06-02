var tasks = {};

$('#today-date').text(new Date());


// var loadTasks = function() {
//    var savedtimes = JSON.parse(localStorage.getItem(tasks.time));
//    console.log("These are the saved times " + savedtimes);

  
    $(function() {
        $("#sortable").sortable();
    });


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
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");

  });




    // load tasks for the first time
//   loadTasks();
