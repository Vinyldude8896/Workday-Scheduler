var tasks = {
    time: [],
    tasktext: [],

};

$('#today-date').text(new Date());


var loadTasks = function() {
    savedTasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        time: [],
        tasktext: [],
      };
    }
  
    // loop over object properties
    $.each(tasks, function(time, tasktext) {
      console.log(time, tasktext);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(tasks.time, tasks.tasktext);
      });
    });
  };
  



    //save Tasks function
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // on input blur save text value
    $(".input").on("blur", function(){
        var text = $(this).val();
        //  console.log(text);

        });



  // on click of button next to checkbox
  $(".btn").on("click", function() {
    var buttonID = $(this).attr("id")
     console.log(buttonID);

    var InputTextBox = $(this).parent().prev().val();
     console.log(InputTextBox);

     tasks['time'].push(buttonID);
     tasks['tasktext'].push(InputTextBox);

     saveTasks();
  });

    // load tasks for the first time
  loadTasks();
