var tasks = {};

$('#today-date').text(new Date());





// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
//      // loop over object properties
//   $.each(tasks, function(list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };

    //save Tasks function
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // on input blur save text value
    $(".input").on("blur", function(){
        var text = $(this).val();
        //  console.log(text);

        });


  $(".btn").on("click", function() {
    var buttonID = $(this).attr("id")
     console.log(buttonID);

    var InputTextBox = $(".input", buttonID).val();
     console.log(InputTextBox);
  });