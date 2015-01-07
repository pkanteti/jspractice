var tasks, addTask, taskListForm, taskListEl;

tasks = [
	        {
	          text: "Pay phone bill",
	          complete: false,
	          priority: 1
	        },
	        {
	          text: "Write best-selling novel",
	          complete: false,
	          priority: 3
	        },
	        {
	          text: "Walk the dog",
	          complete: false,
	          priority: 2
	        }
		];

addTask = function(task) {
	tasks.push({
		text: task,
		complete: false,
		priority: 1
	});
};

function countComplete(tasks) {
	return tasks.filter(function(index) {
		return task.complete;
	}).length;
}

function clearList() {
	while(taskListEl.hasChildNodes()) {
		taskListEl.removeChild(taskListEl.lastChild);
	}
}

var sortByLowHigh = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task2.priority - task1.priority;
  });
};

var sortByHighLow = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.priority - task2.priority;
  });
};

var sortByName = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.text > task2.text;
  });
};


taskListForm = document.getElementById("tasks");
taskListEl = taskListForm.getElementByTagName("ul")[0];

