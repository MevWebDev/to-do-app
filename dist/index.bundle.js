/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/activitylog.js":
      /*!****************************!*\
  !*** ./src/activitylog.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateActivityLog: () =>
            /* binding */ generateActivityLog,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/index.js");
        /* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");

        function generateActivityLog() {
          const popupBackground = document.createElement("div");
          popupBackground.classList = "popup-background";
          const popup = document.createElement("div");
          popup.classList = "popup";
          popup.style.justifyContent = "flex-start";
          popup.style.padding = "2rem";
          popupBackground.appendChild(popup);
          const title = document.createElement("h3");
          popup.appendChild(title);
          title.textContent = "Activity Log";
          const quit = document.createElement("button");
          quit.classList = "popup-button";
          popup.appendChild(quit);
          quit.textContent = "x";
          quit.addEventListener("click", () => {
            popupBackground.remove();
          });
          const log = document.createElement("div");
          log.classList = "activity-log";
          popup.appendChild(log);
          const button = document.createElement("button");
          button.classList = "submit-button";
          popup.appendChild(button);
          button.textContent = "Clear";
          button.style.marginTop = "auto";
          button.addEventListener("click", () => {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.activityLog = [];
            popupBackground.remove();
            (0, _webstorage__WEBPACK_IMPORTED_MODULE_1__.saveData)();
          });
          document.body.appendChild(popupBackground);
          generateActivities();
        }
        function generateActivities() {
          let borderColor;
          const log = document.querySelector(".activity-log");
          log.innerHTML = "";
          _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.activityLog
            .reverse()
            .forEach((activity) => {
              switch (activity[0].priority) {
                case "low":
                  borderColor = "green";
                  break;
                case "medium":
                  borderColor = "orange";
                  break;
                case "high":
                  borderColor = "red";
                  break;
                default:
                  borderColor = "black";
              }
              const activityDiv = document.createElement("div");
              activityDiv.style.border = `3px solid ${borderColor}`;
              activityDiv.classList = "activity";
              if (activity[2] == "finished") {
                activityDiv.innerHTML = `<h3>Finished todo:</h3> ${activity[0].title}`;
              } else if (activity[2] == "expired") {
                activityDiv.innerHTML = `<h3>Expired todo:</h3> ${activity[0].title}`;
              }
              const dateDiv = document.createElement("div");
              dateDiv.innerHTML = `<h4>on</h4> ${activity[1]}`;
              activityDiv.appendChild(dateDiv);
              log.appendChild(activityDiv);
            });
        }

        /***/
      },

    /***/ "./src/addTodo.js":
      /*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addToDo: () => /* binding */ addToDo,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/index.js");
        /* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");

        function addToDo(title, description, dueDate, priority) {
          const project =
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.find(
              (project) =>
                project.name ==
                _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject.name
            );
          project.addToDo(title, description, dueDate, priority);
          (0, _webstorage__WEBPACK_IMPORTED_MODULE_1__.saveData)();
        }

        /***/
      },

    /***/ "./src/checkDates.js":
      /*!***************************!*\
  !*** ./src/checkDates.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkDates: () => /* binding */ checkDates,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/index.js");

        function checkDates() {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach(
            (project) => {
              const expiredTodos = project.todos.filter((todo) => {
                return today > new Date(todo.dueDate);
              });
              project.todos = project.todos.filter((todo) => {
                return today < new Date(todo.dueDate);
              });
              expiredTodos.forEach((todo) => {
                _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.addActivityLog(
                  todo,
                  todo.dueDate.toLocaleString(),
                  `expired`
                );
              });
            }
          );
        }

        /***/
      },

    /***/ "./src/deletePopup.js":
      /*!****************************!*\
  !*** ./src/deletePopup.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deletePopup: () => /* binding */ deletePopup,
          /* harmony export */
        });
        /* harmony import */ var _todoManagement__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./todoManagement */ "./src/todoManagement.js"
          );

        function deletePopup(deletedTodo) {
          const popupBackground = document.createElement("div");
          const popup = document.createElement("div");
          const title = document.createElement("h3");
          title.textContent = "Are you sure?";
          const subtitle = document.createElement("p");
          subtitle.textContent = "Deleting todo is irreversable";
          const quit = document.createElement("button");
          quit.textContent = "x";
          quit.addEventListener("click", () => {
            popupBackground.remove();
          });
          const button = document.createElement("button");
          button.textContent = "Yes";
          button.classList = "submit-button";
          button.addEventListener("click", () => {
            (0, _todoManagement__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(
              deletedTodo
            );
            popupBackground.remove();
          });
          popup.appendChild(title);
          popup.appendChild(subtitle);
          popup.appendChild(button);
          popup.appendChild(quit);
          popupBackground.appendChild(popup);
          document.body.appendChild(popupBackground);
          popupBackground.classList = "popup-background";
          popup.classList = "popup delete-popup";
          quit.classList = "popup-button";
        }

        /***/
      },

    /***/ "./src/editTodo.js":
      /*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ updateTodo: () => /* binding */ updateTodo,
          /* harmony export */ updateTodoPopup: () =>
            /* binding */ updateTodoPopup,
          /* harmony export */
        });
        /* harmony import */ var _toDoClass__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./toDoClass */ "./src/toDoClass.js");
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./index.js */ "./src/index.js");
        /* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./generateTodos.js */ "./src/generateTodos.js"
          );

        function updateTodo(todo, title, description, dueDate, priority) {
          todo.title = title;
          todo.description = description;
          todo.dueDate = dueDate;
          todo.priority = priority;
          (0, _generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
        }
        function updateTodoPopup(todo) {
          const popupBackground = document.createElement("div");
          const popup = document.createElement("div");
          const popupTitle = document.createElement("h2");
          const popupSubtitle = document.createElement("h3");
          const form = document.createElement("form");
          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.name = "title";
          titleInput.value = `${todo.title}`;
          form.appendChild(titleInput);

          // Create input for description
          const descriptionInput = document.createElement("input");
          descriptionInput.type = "text";
          descriptionInput.name = "description";
          descriptionInput.value = `${todo.description}`;
          descriptionInput.placeholder =
            "Description (optional & max 24 characters)";
          form.appendChild(descriptionInput);

          // Create input for due date
          const dueDateInput = document.createElement("input");
          dueDateInput.type = "date";
          dueDateInput.name = "dueDate";
          dueDateInput.value = `${todo.dueDate}`;
          form.appendChild(dueDateInput);

          // Create select for priority
          const prioritySelect = document.createElement("select");
          prioritySelect.name = "priority";
          const priorities = ["low", "medium", "high"];
          priorities.forEach((priority) => {
            const option = document.createElement("option");
            option.value = priority;
            option.text = priority;
            prioritySelect.appendChild(option);
          });
          prioritySelect.value = `${todo.priority}`;
          form.appendChild(prioritySelect);

          // Create submit button
          const submitButton = document.createElement("input");
          submitButton.type = "submit";
          submitButton.value = "Edit To-Do";
          submitButton.addEventListener("click", () => {
            event.preventDefault();
            let dueDate = new Date(dueDateInput.value);
            dueDate.setHours(0, 0, 0, 0);
            let currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            if (dueDate < currentDate) {
              alert("Don't go back to the future!");
            } else if (titleInput.value.length > 30) {
              alert("Title must be 30 characters or less!");
            } else if (descriptionInput.value.length > 24) {
              alert("Description must be 24 characters or less!");
            } else {
              updateTodo(
                todo,
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                prioritySelect.value
              );
              popupBackground.remove();
              (0,
              _generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
            }
            (0, _generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
          });
          form.appendChild(submitButton);
          const popupButton = document.createElement("button");
          popupBackground.classList = "popup-background";
          popup.classList = "popup";
          popupTitle.textContent = "Edit To-Do";
          popupSubtitle.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.name}`;
          popupButton.textContent = "x";
          popupButton.classList = "popup-button";
          popupButton.addEventListener("click", () => {
            popupBackground.remove();
          });
          popup.appendChild(popupTitle);
          popup.appendChild(popupSubtitle);
          popup.appendChild(form);
          popup.appendChild(popupButton);
          popupBackground.appendChild(popup);
          document.body.appendChild(popupBackground);
        }

        /***/
      },

    /***/ "./src/generateInput.js":
      /*!******************************!*\
  !*** ./src/generateInput.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateInput: () => /* binding */ generateInput,
          /* harmony export */
        });
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index.js */ "./src/index.js");
        /* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./generateNavbar.js */ "./src/generateNavbar.js"
          );
        /* harmony import */ var _webstorage_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./webstorage.js */ "./src/webstorage.js");
        /* harmony import */ var _generateProjects_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./generateProjects.js */ "./src/generateProjects.js"
          );

        function generateInput(list) {
          const addProjectButton = document.querySelector("#add-button");
          const input = document.createElement("div");
          input.id = "input-field";
          const inputField = document.createElement("input");
          inputField.placeholder = "Project name";
          const buttonWrapper = document.createElement("div");
          buttonWrapper.id = "button-wrapper";
          const inputConfirmButton = document.createElement("button");
          inputConfirmButton.textContent = "Confirm";
          inputConfirmButton.addEventListener("click", () => {
            const projectName = inputField.value;
            if (projectName) {
              list.addProject(projectName);
              (0, _webstorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)();
            }
            (0, _generateNavbar_js__WEBPACK_IMPORTED_MODULE_1__.generateNavbar)(
              list
            );
            (0,
            _generateProjects_js__WEBPACK_IMPORTED_MODULE_3__.generateProjects)();
          });
          const inputCancelButton = document.createElement("button");
          inputCancelButton.textContent = "Cancel";
          inputCancelButton.addEventListener("click", () => {
            input.replaceWith(addProjectButton);
          });
          input.appendChild(inputField);
          buttonWrapper.appendChild(inputConfirmButton);
          buttonWrapper.appendChild(inputCancelButton);
          input.appendChild(buttonWrapper);
          addProjectButton.replaceWith(input);
        }

        /***/
      },

    /***/ "./src/generateNavbar.js":
      /*!*******************************!*\
  !*** ./src/generateNavbar.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateNavbar: () =>
            /* binding */ generateNavbar,
          /* harmony export */
        });
        /* harmony import */ var _generateInput__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./generateInput */ "./src/generateInput.js");
        /* harmony import */ var _generateProjects__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./generateProjects */ "./src/generateProjects.js"
          );
        /* harmony import */ var _today_week__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./today-week */ "./src/today-week.js");

        function generateNavbar(toDoList) {
          const projectsDiv = document.querySelector("#projects");
          projectsDiv.innerHTML = "";
          const addProjectButton = document.createElement("button");
          addProjectButton.id = "add-button";
          addProjectButton.classList = "project";
          addProjectButton.textContent = "+ Add Project";
          addProjectButton.addEventListener("click", () =>
            (0, _generateInput__WEBPACK_IMPORTED_MODULE_0__.generateInput)(
              toDoList
            )
          );
          projectsDiv.appendChild(addProjectButton);
          const todayButton = document.createElement("button");
          todayButton.id = "today-button";
          todayButton.classList = "project";
          todayButton.innerHTML = `<div><i class="fas fa-calendar-day"></i>Today</div>`;
          todayButton.addEventListener("click", () => {
            (0, _today_week__WEBPACK_IMPORTED_MODULE_2__.generateToday)();
            projectsDiv.childNodes.forEach((node) => {
              node.classList.remove("active");
            });
            todayButton.classList.add("active");
          });
          projectsDiv.appendChild(todayButton);
          const weekButton = document.createElement("button");
          weekButton.id = "week-button";
          weekButton.classList = "project";
          weekButton.innerHTML = `<div><i class="fas fa-calendar-week"></i>Week</div>`;
          weekButton.addEventListener("click", () => {
            projectsDiv.childNodes.forEach((node) => {
              node.classList.remove("active");
            });
            weekButton.classList.add("active");
            (0, _today_week__WEBPACK_IMPORTED_MODULE_2__.generateWeek)();
          });
          projectsDiv.appendChild(weekButton);
        }

        /***/
      },

    /***/ "./src/generatePopup.js":
      /*!******************************!*\
  !*** ./src/generatePopup.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generatePopup: () => /* binding */ generatePopup,
          /* harmony export */
        });
        /* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
        /* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./index */ "./src/index.js");

        function generatePopup() {
          const popupBackground = document.createElement("div");
          const popup = document.createElement("div");
          const popupTitle = document.createElement("h2");
          const popupSubtitle = document.createElement("h3");
          const form = document.createElement("form");
          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.name = "title";
          titleInput.placeholder = "Title (max 30 characters)";
          form.appendChild(titleInput);

          // Create input for description
          const descriptionInput = document.createElement("input");
          descriptionInput.type = "text";
          descriptionInput.name = "description";
          descriptionInput.placeholder =
            "Description (optional & max 24 characters)";
          form.appendChild(descriptionInput);

          // Create input for due date
          const dueDateInput = document.createElement("input");
          dueDateInput.type = "date";
          dueDateInput.name = "dueDate";
          dueDateInput.placeholder = "dd.mm.rrrr";
          form.appendChild(dueDateInput);

          // Create select for priority
          const prioritySelect = document.createElement("select");
          prioritySelect.name = "priority";
          const priorities = ["low", "medium", "high"];
          priorities.forEach((priority) => {
            const option = document.createElement("option");
            option.value = priority;
            option.text = priority;
            prioritySelect.appendChild(option);
          });
          form.appendChild(prioritySelect);

          // Create submit button
          const submitButton = document.createElement("input");
          submitButton.type = "submit";
          submitButton.value = "Add To-Do";
          submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            let currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            let dueDate = new Date(dueDateInput.value);
            dueDate.setHours(0, 0, 0, 0);
            if (dueDate < currentDate) {
              alert("Don't go back to the future!");
            } else if (titleInput.value.length > 30) {
              alert("Title must be 30 characters or less!");
            } else if (descriptionInput.value.length > 24) {
              alert("Description must be 24 characters or less!");
            } else if (titleInput.value == "" || dueDateInput.value == "") {
              alert("Title and due date are required!");
            } else {
              (0, _addTodo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                prioritySelect.value
              );
              popupBackground.remove();
              (0, _generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
            }
            (0, _generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
          });
          form.appendChild(submitButton);
          const popupButton = document.createElement("button");
          popupBackground.classList = "popup-background";
          popup.classList = "popup";
          popupTitle.textContent = "Add To-Do";
          popupSubtitle.textContent = `${_index__WEBPACK_IMPORTED_MODULE_2__.state.currentProject.name}`;
          popupButton.textContent = "x";
          popupButton.classList = "popup-button";
          popupButton.addEventListener("click", () => {
            popupBackground.remove();
          });
          popup.appendChild(popupTitle);
          popup.appendChild(popupSubtitle);
          popup.appendChild(form);
          popup.appendChild(popupButton);
          popupBackground.appendChild(popup);
          document.body.appendChild(popupBackground);
        }

        /***/
      },

    /***/ "./src/generateProjects.js":
      /*!*********************************!*\
  !*** ./src/generateProjects.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateProjects: () =>
            /* binding */ generateProjects,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/index.js");
        /* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
        /* harmony import */ var _projectManagement__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./projectManagement */ "./src/projectManagement.js"
          );
        /* harmony import */ var _generateNavbar__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./generateNavbar */ "./src/generateNavbar.js"
          );

        const addTodoButton = document.querySelector(".add-todo");
        function generateProjects() {
          const projectsDiv = document.querySelector("#projects");
          projectsDiv.innerHTML = "";
          (0, _generateNavbar__WEBPACK_IMPORTED_MODULE_3__.generateNavbar)(
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoList
          );
          _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach(
            (project, index) => {
              const projectDiv = document.createElement("div");
              projectDiv.textContent = project.name; // Set textContent here
              const projectsDelete = document.createElement("button");
              projectsDelete.style.opacity = "0%";
              projectsDelete.classList = "project-delete-button";
              projectsDelete.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.25rem;"></i>`;
              projectDiv.appendChild(projectsDelete);
              if (index > 0) {
                // Append the delete button after setting textContent

                projectDiv.addEventListener("mouseover", () => {
                  projectsDelete.style.opacity = "100%";
                });
                projectDiv.addEventListener("mouseout", () => {
                  projectsDelete.style.opacity = "0%";
                });
                projectsDelete.addEventListener("click", (event) => {
                  event.stopPropagation();
                  (0,
                  _projectManagement__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(
                    project
                  );
                });
              }
              if (index == 0) {
                projectDiv.classList = "project active";
              } else projectDiv.classList = "project";
              projectsDiv.appendChild(projectDiv);
              projectDiv.addEventListener("click", () => {
                addTodoButton.style.display = "block";
                projectsDiv.childNodes.forEach((node) => {
                  node.classList.remove("active");
                });
                projectDiv.classList.add("active");
                _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject =
                  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.find(
                    (projectName) => project.name === projectName.name
                  );
                (0,
                _generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
              });
            }
          );
        }

        /***/
      },

    /***/ "./src/generateTodos.js":
      /*!******************************!*\
  !*** ./src/generateTodos.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateTodos: () => /* binding */ generateTodos,
          /* harmony export */
        });
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index.js */ "./src/index.js");
        /* harmony import */ var _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./todoManagement.js */ "./src/todoManagement.js"
          );
        /* harmony import */ var _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./deletePopup.js */ "./src/deletePopup.js");
        /* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");

        function generateTodos() {
          const todoList = document.querySelector("#todo-list");
          todoList.innerHTML = "";
          _index_js__WEBPACK_IMPORTED_MODULE_0__.state.currentProject.todos.forEach(
            (todo) => {
              let borderColor;
              switch (todo.priority) {
                case "low":
                  borderColor = "green";
                  break;
                case "medium":
                  borderColor = "orange";
                  break;
                case "high":
                  borderColor = "red";
                  break;
                default:
                  borderColor = "black";
              }
              const todoDiv = document.createElement("div");
              const todoTitle = document.createElement("h3");
              todoTitle.textContent = todo.title;
              todoDiv.appendChild(todoTitle);

              // if (todo.description) {
              const todoDesc = document.createElement("p");
              todoDesc.textContent = todo.description;
              todoDiv.appendChild(todoDesc);
              // }

              const todoDate = document.createElement("p");
              todoDate.textContent = todo.dueDate;
              todoDiv.style.border = `3px solid ${borderColor}`;
              todoDiv.appendChild(todoDate);
              const editButton = document.createElement("button");
              editButton.classList = "todo-button edit-button";
              editButton.innerHTML =
                '<i class="fa fa-edit" style="font-size:1.5rem;"></i>';
              editButton.addEventListener("click", () =>
                (0, _editTodo_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoPopup)(
                  todo
                )
              );
              todoDiv.appendChild(editButton);
              const deleteButton = document.createElement("button");
              deleteButton.classList = "todo-button delete-button";
              deleteButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.5rem;"></i>`;
              deleteButton.addEventListener("click", () => {
                (0, _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__.deletePopup)(
                  todo
                );
              });
              todoDiv.appendChild(deleteButton);
              const finishedButton = document.createElement("button");
              finishedButton.classList = "todo-button finished-button";
              finishedButton.innerHTML = '<i class="gg-check"></i>';
              finishedButton.addEventListener("click", () => {
                (0, _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__.finishTodo)(
                  todo
                );
              });
              todoDiv.appendChild(finishedButton);
              todoList.appendChild(todoDiv);
            }
          );
        }

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ state: () => /* binding */ state,
          /* harmony export */ toDoList: () => /* binding */ toDoList,
          /* harmony export */
        });
        /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.scss */ "./src/style.scss");
        /* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./toDoList.js */ "./src/toDoList.js");
        /* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");
        /* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");
        /* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./generateNavbar.js */ "./src/generateNavbar.js"
          );
        /* harmony import */ var _generatePopup_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./generatePopup.js */ "./src/generatePopup.js"
          );
        /* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./generateTodos.js */ "./src/generateTodos.js"
          );
        /* harmony import */ var _webstorage_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./webstorage.js */ "./src/webstorage.js");
        /* harmony import */ var _generateProjects_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./generateProjects.js */ "./src/generateProjects.js"
          );
        /* harmony import */ var _activitylog_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ./activitylog.js */ "./src/activitylog.js");
        /* harmony import */ var _checkDates_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./checkDates.js */ "./src/checkDates.js");

        const toDoList =
          new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.ToDoList();
        (0, _webstorage_js__WEBPACK_IMPORTED_MODULE_7__.loadStorage)();
        (0, _checkDates_js__WEBPACK_IMPORTED_MODULE_10__.checkDates)();
        (0, _generateNavbar_js__WEBPACK_IMPORTED_MODULE_4__.generateNavbar)(
          toDoList
        );
        (0, _generateProjects_js__WEBPACK_IMPORTED_MODULE_8__.generateProjects)(
          toDoList
        );
        const state = {
          currentProject: toDoList.projects[0],
        };
        (0, _generateTodos_js__WEBPACK_IMPORTED_MODULE_6__.generateTodos)();
        const addToDoButton = document.querySelector(".add-todo");
        addToDoButton.addEventListener(
          "click",
          _generatePopup_js__WEBPACK_IMPORTED_MODULE_5__.generatePopup
        );
        const activityLog = document.querySelector(".activity-log-button");
        activityLog.addEventListener("click", () => {
          (0,
          _activitylog_js__WEBPACK_IMPORTED_MODULE_9__.generateActivityLog)();
        });
        (0, _webstorage_js__WEBPACK_IMPORTED_MODULE_7__.saveData)();

        /***/
      },

    /***/ "./src/projectManagement.js":
      /*!**********************************!*\
  !*** ./src/projectManagement.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deleteProject: () => /* binding */ deleteProject,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/index.js");
        /* harmony import */ var _generateProjects__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./generateProjects */ "./src/generateProjects.js"
          );
        /* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
        /* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");

        function deleteProject(project) {
          if (project.name !== "general ") {
            _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects =
              _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.filter(
                (projectName) => project !== projectName
              );
            _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject =
              _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects[0];
            (0,
            _generateProjects__WEBPACK_IMPORTED_MODULE_1__.generateProjects)();
            (0, _generateTodos__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
            (0, _webstorage__WEBPACK_IMPORTED_MODULE_3__.saveData)();
          }
        }

        /***/
      },

    /***/ "./src/toDoClass.js":
      /*!**************************!*\
  !*** ./src/toDoClass.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ToDo: () => /* binding */ ToDo,
          /* harmony export */
        });
        class ToDo {
          constructor(title, description, dueDate, priority) {
            (this.title = title),
              (this.description = description || ""),
              (this.dueDate = dueDate),
              (this.priority = priority),
              (this.finished = false);
          }
          updateTitle(title) {
            this.title = title;
          }
          updateDescription(description) {
            this.description = description;
          }
          updateDueDate(dueDate) {
            this.dueDate = dueDate;
          }
          updatePriority(priority) {
            this.priority = priority;
          }
          updateNotes(notes) {
            this.notes = notes;
          }
          toggleFinished() {
            this.finished = !this.finished;
          }
        }

        /***/
      },

    /***/ "./src/toDoList.js":
      /*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ToDoList: () => /* binding */ ToDoList,
          /* harmony export */
        });
        /* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");

        class ToDoList {
          constructor() {
            this.projects = [
              new _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__.Project(
                "General"
              ),
            ];
            this.activityLog = [];
          }
          addProject(name) {
            this.projects.push(
              new _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__.Project(name)
            );
          }
          addActivityLog(message, time, state) {
            this.activityLog.push([message, time, state]);
          }
        }

        /***/
      },

    /***/ "./src/toDoProject.js":
      /*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Project: () => /* binding */ Project,
          /* harmony export */
        });
        /* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");

        class Project {
          constructor(name, data) {
            this.name = name;
            this.todos = [] || 0;
          }
          addToDo(title, desc, dueDate, priority) {
            this.todos.push(
              new _toDoClass_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(
                title,
                desc,
                dueDate,
                priority
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/today-week.js":
      /*!***************************!*\
  !*** ./src/today-week.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ generateToday: () => /* binding */ generateToday,
          /* harmony export */ generateWeek: () => /* binding */ generateWeek,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index.js */ "./src/index.js");
        /* harmony import */ var _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./todoManagement.js */ "./src/todoManagement.js"
          );
        /* harmony import */ var _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./deletePopup.js */ "./src/deletePopup.js");
        /* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");

        const addTodoButton = document.querySelector(".add-todo");
        function generateToday() {
          const todayTodos = [];
          const today = new Date().toDateString();
          _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach(
            (project) => {
              const todos = project.todos.filter((todo) => {
                return new Date(todo.dueDate).toDateString() === today;
              });
              todayTodos.push(todos);
            }
          );
          const todayTodosFlat = todayTodos.flat();
          generateTodos2(todayTodosFlat);
        }
        function generateWeek() {
          const weekTodos = [];
          const now = new Date();
          const todayDayOfWeek = now.getDay();
          const daysUntilEndOfNextWeek = 13 - todayDayOfWeek;
          now.setHours(0, 0, 0, 0);
          const nextWeek = new Date(now);
          nextWeek.setDate(now.getDate() + daysUntilEndOfNextWeek);
          nextWeek.setHours(0, 0, 0, 0);
          nextWeek.setDate(now.getDate() + 7);
          _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach(
            (project) => {
              const todos = project.todos.filter((todo) => {
                const dueDate = new Date(todo.dueDate);
                return dueDate >= now && dueDate <= nextWeek;
              });
              weekTodos.push(todos);
            }
          );
          const weekTodosFlat = weekTodos.flat();
          generateTodos2(weekTodosFlat);
        }
        function generateTodos2(list) {
          addTodoButton.style.display = "none";
          const todoList = document.querySelector("#todo-list");
          todoList.innerHTML = "";
          list.forEach((todo) => {
            let borderColor;
            switch (todo.priority) {
              case "low":
                borderColor = "green";
                break;
              case "medium":
                borderColor = "orange";
                break;
              case "high":
                borderColor = "red";
                break;
              default:
                borderColor = "black";
            }
            const todoDiv = document.createElement("div");
            const todoTitle = document.createElement("h3");
            todoTitle.textContent = todo.title;
            todoDiv.appendChild(todoTitle);

            // if (todo.description) {
            const todoDesc = document.createElement("p");
            todoDesc.textContent = todo.description;
            todoDiv.appendChild(todoDesc);
            // }

            const todoDate = document.createElement("p");
            todoDate.textContent = todo.dueDate;
            todoDiv.style.border = `3px solid ${borderColor}`;
            todoDiv.appendChild(todoDate);
            const editButton = document.createElement("button");
            editButton.classList = "todo-button edit-button";
            editButton.innerHTML =
              '<i class="fa fa-edit" style="font-size:1.5rem;"></i>';
            editButton.addEventListener("click", () =>
              (0, _editTodo_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoPopup)(
                todo
              )
            );
            todoDiv.appendChild(editButton);
            const deleteButton = document.createElement("button");
            deleteButton.classList = "todo-button delete-button";
            deleteButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.5rem;"></i>`;
            deleteButton.addEventListener("click", () => {
              (0, _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__.deletePopup)(
                todo
              );
            });
            todoDiv.appendChild(deleteButton);
            const finishedButton = document.createElement("button");
            finishedButton.classList = "todo-button finished-button";
            finishedButton.innerHTML = '<i class="gg-check"></i>';
            finishedButton.addEventListener("click", () => {
              (0, _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__.finishTodo)(
                todo
              );
            });
            todoDiv.appendChild(finishedButton);
            todoList.appendChild(todoDiv);
          });
        }

        /***/
      },

    /***/ "./src/todoManagement.js":
      /*!*******************************!*\
  !*** ./src/todoManagement.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deleteTodo: () => /* binding */ deleteTodo,
          /* harmony export */ finishTodo: () => /* binding */ finishTodo,
          /* harmony export */
        });
        /* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./index */ "./src/index.js");
        /* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");

        function finishTodo(finishedTodo) {
          const currentTime = new Date().toLocaleString();
          _index__WEBPACK_IMPORTED_MODULE_1__.toDoList.addActivityLog(
            finishedTodo,
            currentTime,
            `finished`
          );
          _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos =
            _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos.filter(
              (todo) => {
                return todo != finishedTodo;
              }
            );
          (0, _generateTodos__WEBPACK_IMPORTED_MODULE_0__.generateTodos)();
          (0, _webstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
        }
        function deleteTodo(deletedTodo) {
          _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos =
            _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos.filter(
              (todo) => {
                return todo != deletedTodo;
              }
            );
          (0, _generateTodos__WEBPACK_IMPORTED_MODULE_0__.generateTodos)();
          (0, _webstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
        }

        /***/
      },

    /***/ "./src/webstorage.js":
      /*!***************************!*\
  !*** ./src/webstorage.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ loadStorage: () => /* binding */ loadStorage,
          /* harmony export */ saveData: () => /* binding */ saveData,
          /* harmony export */
        });
        /* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./generateNavbar.js */ "./src/generateNavbar.js"
          );
        /* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./generateTodos.js */ "./src/generateTodos.js"
          );
        /* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./index.js */ "./src/index.js");
        /* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");
        /* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");

        function saveData() {
          localStorage.setItem(
            "toDoList",
            JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList)
          );
        }
        function loadStorage() {
          let storedData = localStorage.getItem("toDoList");
          if (storedData) {
            let parsedData = JSON.parse(storedData);
            _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.activityLog =
              parsedData.activityLog;
            _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.projects =
              parsedData.projects.map((project) => {
                let newProject =
                  new _toDoProject_js__WEBPACK_IMPORTED_MODULE_4__.Project(
                    project.name,
                    project.todos
                  );
                newProject.todos = project.todos.map(
                  (todo) =>
                    new _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__.ToDo(
                      todo.title,
                      todo.description,
                      todo.dueDate,
                      todo.priority
                    )
                );
                return newProject;
              });
          }
        }

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
body button {
  cursor: pointer;
  color: black;
}
body input,
body textarea,
body select {
  font-size: 16px;
}
body input,
body select {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #333;
}
body input[type=submit] {
  border: 1px solid black;
}
body input[type=submit]:hover {
  border: 1px solid black;
  color: #ccc;
  background-color: #333;
}
body #app {
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
body #app #wrapper {
  display: flex;
  flex-grow: 1;
}
@media (max-width: 600px) {
  body #app #wrapper {
    flex-direction: column;
  }
}
body #app header {
  background-color: #343434;
  color: white;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem 0 1rem 2rem;
}
@media (max-width: 600px) {
  body #app header {
    width: 100vw;
  }
}
body #app nav {
  background-color: #dddddd;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.5rem;
  flex-grow: 1;
  width: 200px;
}
@media (max-width: 600px) {
  body #app nav {
    width: 100%;
    padding: 5px 10px;
    flex-grow: 0;
  }
}
body #app nav #projects-header {
  padding-left: 1rem;
}
@media (max-width: 600px) {
  body #app nav #projects-header {
    padding-left: 0.5rem;
    font-size: large;
  }
}
body #app nav #projects {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
body #app nav #projects button:hover {
  background-color: #cccccc;
}
@media (max-width: 600px) {
  body #app nav #projects {
    flex-direction: row;
    margin-top: 0;
    overflow: scroll;
  }
}
body #app nav #projects .project {
  cursor: pointer;
  width: 80%;
  padding: 1rem;
  border: none;
  background-color: transparent;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 600px) {
  body #app nav #projects .project {
    font-size: 12px;
    padding: 0.5rem;
    width: fit-content;
    text-align: center;
  }
}
body #app nav #projects .project div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
body #app nav #projects .project button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
body #app nav #projects .project button .active {
  background-color: #cccccc;
}
body #app nav #projects .project button:hover {
  transform: translateY(-1px);
}
body #app nav #projects .project:hover {
  background-color: #cccccc;
}
body #app nav #projects .active {
  background-color: #cccccc;
}
body #app main {
  background-color: #eeeeee;
  flex-grow: 10;
  display: flex;
  flex-direction: column;
}
@media (max-width: 600px) {
  body #app main {
    width: 100%;
  }
}
body #app main .main-wrapper {
  padding: 0.5rem 1rem;
}
body #app main .main-wrapper .buttons-main {
  display: flex;
  gap: 1rem;
}
body #app main .main-wrapper .buttons-main button {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border: none;
}
body #app main .main-wrapper .buttons-main button:hover {
  background-color: #cccccc;
}

#input-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  #input-field {
    max-width: 100px;
  }
}
#input-field input {
  align-self: center;
  box-sizing: border-box;
  border: 1px solid #858585;
  border-radius: 0.2rem;
  width: 90%;
  padding: 1rem;
}
#input-field #button-wrapper {
  align-self: center;
  gap: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#input-field #button-wrapper button {
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  min-width: fit-content;
  flex: 1;
  font-weight: 800;
}
#input-field #button-wrapper :nth-child(1) {
  border: 1px solid #77ff77;
  background-color: #aaffaa;
}
#input-field #button-wrapper :nth-child(2) {
  border: 1px solid #ff8b8b;
  background-color: #ffbebe;
}

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border-radius: 1rem;
  gap: 1.5rem;
}
.popup .submit-button {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #333;
}
@media (max-width: 600px) {
  .popup {
    width: 400px;
    height: 400px;
    gap: 0.7rem;
  }
}
.popup h2,
.popup h3 {
  margin: 0;
}
.popup form {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.popup form * {
  padding: 1rem;
}
@media (max-width: 600px) {
  .popup form * {
    padding: 0.5rem;
  }
}

.popup-button {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0;
  font-size: 1.5rem;
  background-color: transparent;
  color: black;
  font-weight: bold;
}

#todo-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.5rem;
}
@media (max-width: 600px) {
  #todo-list {
    justify-content: center;
    padding: 1rem 0 0 0;
  }
}
#todo-list div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  width: 200px;
  height: 250px;
  border-radius: 0.5rem;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}
@media (max-width: 600px) {
  #todo-list div {
    width: 45%;
  }
}
#todo-list div h3 {
  margin: 0;
  margin-top: 2rem;
}
#todo-list div p {
  height: 40px;
}
#todo-list div button {
  cursor: pointer;
}
#todo-list div .delete-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
}
#todo-list div .delete-button:hover {
  transform: scale(1.1);
}
#todo-list div .edit-button {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
}
#todo-list div .edit-button:hover {
  transform: scale(1.1);
}
#todo-list div .finished-button {
  background-color: green;
  border: 0;
  color: white;
  border-radius: 0.5rem;
  width: 80%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  animation: ease-in-out 0.2s;
}
#todo-list div .finished-button:hover {
  background-color: #007600;
}
#todo-list div div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.delete-popup {
  font-size: larger;
}
.delete-popup :nth-child(3) {
  padding: 1rem 4rem;
}

.activity-log {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 90%;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
}
.activity-log ::-webkit-scrollbar {
  display: none;
}
.activity-log .activity {
  min-width: 90%;
  border: 1px solid;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
}
.activity-log .activity * {
  margin: 0;
}`,
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/style.scss",
              "webpack://./src/_variables.scss",
            ],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '@import "./variables";\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  button {\n    cursor: pointer;\n    color: black;\n  }\n  input,\n  textarea,\n  select {\n    font-size: 16px; // Prevent zoom on focus in Safari\n  }\n  input,\n  select {\n    background-color: white;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px;\n    font-size: 16px;\n    color: #333;\n  }\n  input[type="submit"] {\n    border: 1px solid black;\n  }\n  input[type="submit"]:hover {\n    border: 1px solid black;\n    color: #ccc;\n    background-color: #333;\n  }\n  #app {\n    background-color: $background-color-app;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n\n    #wrapper {\n      display: flex;\n      flex-grow: 1;\n      @media (max-width: 600px) {\n        flex-direction: column;\n      }\n    }\n\n    header {\n      background-color: $background-color-header;\n      color: white;\n      display: flex;\n      align-items: center;\n      font-size: 2rem;\n      padding: 1rem 0 1rem 2rem;\n      @media (max-width: 600px) {\n        width: 100vw;\n      }\n    }\n    nav {\n      background-color: $background-color-nav;\n      font-weight: bold;\n      padding: 1rem;\n      font-size: 1.5rem;\n      flex-grow: 1;\n      width: 200px;\n      @media (max-width: 600px) {\n        width: 100%;\n        padding: 5px 10px;\n        flex-grow: 0;\n      }\n      #projects-header {\n        padding-left: 1rem;\n        @media (max-width: 600px) {\n          padding-left: 0.5rem;\n          font-size: large;\n        }\n      }\n      #projects {\n        button:hover {\n          background-color: #cccccc;\n        }\n        margin-top: 1rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        @media (max-width: 600px) {\n          flex-direction: row;\n          margin-top: 0;\n          overflow: scroll;\n        }\n\n        .project {\n          cursor: pointer;\n\n          width: 80%;\n          padding: 1rem;\n          border: none;\n          background-color: transparent;\n          text-align: left;\n\n          font-size: 1rem;\n          font-weight: 600;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          @media (max-width: 600px) {\n            font-size: 12px;\n            padding: 0.5rem;\n            width: fit-content;\n            text-align: center;\n          }\n          div {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 1rem;\n          }\n          button {\n            border: none;\n            background-color: transparent;\n\n            cursor: pointer;\n            .active {\n              background-color: #cccccc;\n            }\n          }\n          button:hover {\n            transform: translateY(-1px);\n          }\n        }\n        .project:hover {\n          background-color: #cccccc;\n        }\n        .active {\n          background-color: #cccccc;\n        }\n      }\n    }\n\n    main {\n      background-color: $background-color-app;\n      flex-grow: 10;\n      display: flex;\n      flex-direction: column;\n      @media (max-width: 600px) {\n        width: 100%;\n      }\n      .main-wrapper {\n        padding: 0.5rem 1rem;\n        .buttons-main {\n          display: flex;\n          gap: 1rem;\n          button {\n            cursor: pointer;\n            font-size: 1rem;\n            font-weight: 600;\n            border: none;\n          }\n          button:hover {\n            background-color: #cccccc;\n          }\n        }\n      }\n    }\n  }\n}\n#input-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  @media (max-width: 600px) {\n    max-width: 100px;\n  }\n\n  input {\n    align-self: center;\n    box-sizing: border-box;\n    border: 1px solid lighten(rgb(56, 56, 56), 30%);\n    border-radius: 0.2rem;\n    width: 90%;\n    padding: 1rem;\n  }\n  #button-wrapper {\n    align-self: center;\n    gap: 1rem;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n\n    button {\n      border: none;\n      padding: 0.7rem 1rem;\n      border-radius: 0.2rem;\n      cursor: pointer;\n      min-width: fit-content;\n      flex: 1;\n      font-weight: 800;\n    }\n    :nth-child(1) {\n      border: 1px solid darken($button-green, 10%);\n      background-color: $button-green;\n    }\n    :nth-child(2) {\n      border: 1px solid darken($button-red, 10%);\n      background-color: $button-red;\n    }\n  }\n}\n\n.popup-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  height: 600px;\n  border-radius: 1rem;\n  gap: 1.5rem;\n  .submit-button {\n    background-color: white;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px;\n    font-size: 16px;\n    color: #333;\n  }\n  @media (max-width: 600px) {\n    width: 400px;\n    height: 400px;\n    gap: 0.7rem;\n  }\n  h2,\n  h3 {\n    margin: 0;\n  }\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    // @media (max-width: 600px) {\n    //   height: 50%;\n    // }\n    * {\n      padding: 1rem;\n      @media (max-width: 600px) {\n        padding: 0.5rem;\n      }\n    }\n  }\n}\n.popup-button {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: black;\n  font-weight: bold;\n}\n#todo-list {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 2.5rem;\n  @media (max-width: 600px) {\n    justify-content: center;\n    padding: 1rem 0 0 0;\n  }\n  div {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-direction: column;\n    padding: 1rem;\n    width: 200px;\n    height: 250px;\n    border-radius: 0.5rem;\n    text-align: center;\n    animation: fadeIn 0.5s ease-in-out;\n    @media (max-width: 600px) {\n      width: 45%;\n    }\n    h3 {\n      margin: 0;\n      margin-top: 2rem;\n    }\n    p {\n      height: 40px;\n    }\n    button {\n      cursor: pointer;\n    }\n    .delete-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .delete-button:hover {\n      transform: scale(1.1);\n    }\n    .edit-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .edit-button:hover {\n      transform: scale(1.1);\n    }\n    .finished-button {\n      background-color: green;\n      border: 0;\n      color: white;\n      border-radius: 0.5rem;\n      width: 80%;\n      padding: 0.5rem 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      justify-self: flex-end;\n      animation: ease-in-out 0.2s;\n    }\n    .finished-button:hover {\n      background-color: darken($color: green, $amount: 2%);\n    }\n\n    div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n}\n.delete-popup {\n  font-size: larger;\n  :nth-child(3) {\n    padding: 1rem 4rem;\n  }\n}\n.activity-log {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  width: 90%;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n  scroll-snap-type: y mandatory;\n  .activity {\n    min-width: 90%;\n    border: 1px solid;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    * {\n      margin: 0;\n    }\n  }\n}\n',
              "$background-color-app: #eeeeee;\n$background-color-header: #343434;\n$background-color-nav: #dddddd;\n$button-green: #aaffaa;\n$button-red: #ffbebe;\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.scss":
      /*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }
            memo[target] = styleTarget;
          }
          return memo[target];
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert);
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";
          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }
          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }
          var needLayer = typeof obj.layer !== "undefined";
          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }
          css += obj.css;
          if (needLayer) {
            css += "}";
          }
          if (obj.media) {
            css += "}";
          }
          if (obj.supports) {
            css += "}";
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options);
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }
          styleElement.parentNode.removeChild(styleElement);
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === "undefined") {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
        module.exports = styleTagTransform;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1IQUFtSCxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssYUFBYSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxhQUFhLGFBQWEsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxhQUFhLFlBQVksVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdB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Q0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2FjdGl2aXR5bG9nLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9jaGVja0RhdGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9kZWxldGVQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlTmF2YmFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9DbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b2RheS13ZWVrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b2RvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvd2Vic3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXR5TG9nKCkge1xuICBjb25zdCBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJwb3B1cC1iYWNrZ3JvdW5kXCI7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1zdGFydFwiO1xuICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gXCIycmVtXCI7XG4gIHBvcHVwQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFjdGl2aXR5IExvZ1wiO1xuICBjb25zdCBxdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcXVpdC5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cC5hcHBlbmRDaGlsZChxdWl0KTtcbiAgcXVpdC50ZXh0Q29udGVudCA9IFwieFwiO1xuICBxdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2cuY2xhc3NMaXN0ID0gXCJhY3Rpdml0eS1sb2dcIjtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQobG9nKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0ID0gXCJzdWJtaXQtYnV0dG9uXCI7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xlYXJcIjtcbiAgYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IFwiYXV0b1wiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b0RvTGlzdC5hY3Rpdml0eUxvZyA9IFtdO1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICBzYXZlRGF0YSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG4gIGdlbmVyYXRlQWN0aXZpdGllcygpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXRpZXMoKSB7XG4gIGxldCBib3JkZXJDb2xvcjtcblxuICBjb25zdCBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2aXR5LWxvZ1wiKTtcbiAgbG9nLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvRG9MaXN0LmFjdGl2aXR5TG9nLnJldmVyc2UoKS5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZpdHlbMF0ucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWN0aXZpdHlEaXYuc3R5bGUuYm9yZGVyID0gYDNweCBzb2xpZCAke2JvcmRlckNvbG9yfWA7XG4gICAgYWN0aXZpdHlEaXYuY2xhc3NMaXN0ID0gXCJhY3Rpdml0eVwiO1xuXG4gICAgaWYgKGFjdGl2aXR5WzJdID09IFwiZmluaXNoZWRcIikge1xuICAgICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gYDxoMz5GaW5pc2hlZCB0b2RvOjwvaDM+ICR7YWN0aXZpdHlbMF0udGl0bGV9YDtcbiAgICB9IGVsc2UgaWYgKGFjdGl2aXR5WzJdID09IFwiZXhwaXJlZFwiKSB7XG4gICAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBgPGgzPkV4cGlyZWQgdG9kbzo8L2gzPiAke2FjdGl2aXR5WzBdLnRpdGxlfWA7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZURpdi5pbm5lckhUTUwgPSBgPGg0Pm9uPC9oND4gJHthY3Rpdml0eVsxXX1gO1xuICAgIGFjdGl2aXR5RGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIGxvZy5hcHBlbmRDaGlsZChhY3Rpdml0eURpdik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUsIHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09IHN0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWVcbiAgKTtcblxuICBwcm9qZWN0LmFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgc2F2ZURhdGEoKTtcbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGF0ZXMoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBleHBpcmVkVG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgcmV0dXJuIHRvZGF5ID4gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB0b2RheSA8IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gICAgfSk7XG4gICAgZXhwaXJlZFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvRG9MaXN0LmFkZEFjdGl2aXR5TG9nKHRvZG8sIHRvZG8uZHVlRGF0ZS50b0xvY2FsZVN0cmluZygpLCBgZXhwaXJlZGApO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi90b2RvTWFuYWdlbWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBvcHVwKGRlbGV0ZWRUb2RvKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmU/XCI7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkRlbGV0aW5nIHRvZG8gaXMgaXJyZXZlcnNhYmxlXCI7XG5cbiAgY29uc3QgcXVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgcXVpdC50ZXh0Q29udGVudCA9IFwieFwiO1xuICBxdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICBidXR0b24uY2xhc3NMaXN0ID0gXCJzdWJtaXQtYnV0dG9uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVRvZG8oZGVsZXRlZFRvZG8pO1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHF1aXQpO1xuICBwb3B1cEJhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cCBkZWxldGUtcG9wdXBcIjtcbiAgcXVpdC5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xufVxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3MuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvKHRvZG8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdG9kby50aXRsZSA9IHRpdGxlO1xuICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgZ2VuZXJhdGVUb2RvcygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9Qb3B1cCh0b2RvKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgcG9wdXBTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZUlucHV0LnZhbHVlID0gYCR7dG9kby50aXRsZX1gO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGAke3RvZG8uZGVzY3JpcHRpb259YDtcbiAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb24gKG9wdGlvbmFsICYgbWF4IDI0IGNoYXJhY3RlcnMpXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkdWUgZGF0ZVxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGAke3RvZG8uZHVlRGF0ZX1gO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIHNlbGVjdCBmb3IgcHJpb3JpdHlcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcbiAgcHJpb3JpdGllcy5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgb3B0aW9uLnRleHQgPSBwcmlvcml0eTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkVkaXQgVG8tRG9cIjtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSk7XG4gICAgZHVlRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGlmIChkdWVEYXRlIDwgY3VycmVudERhdGUpIHtcbiAgICAgIGFsZXJ0KFwiRG9uJ3QgZ28gYmFjayB0byB0aGUgZnV0dXJlIVwiKTtcbiAgICB9IGVsc2UgaWYgKHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoID4gMzApIHtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgbXVzdCBiZSAzMCBjaGFyYWN0ZXJzIG9yIGxlc3MhXCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZS5sZW5ndGggPiAyNCkge1xuICAgICAgYWxlcnQoXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI0IGNoYXJhY3RlcnMgb3IgbGVzcyFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVRvZG8oXG4gICAgICAgIHRvZG8sXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVUb2RvcygpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIGNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmNsYXNzTGlzdCA9IFwicG9wdXAtYmFja2dyb3VuZFwiO1xuICBwb3B1cC5jbGFzc0xpc3QgPSBcInBvcHVwXCI7XG4gIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVG8tRG9cIjtcbiAgcG9wdXBTdWJ0aXRsZS50ZXh0Q29udGVudCA9IGAke3N0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWV9YDtcblxuICBwb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBwb3B1cEJ1dHRvbi5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFN1YnRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9uKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0cy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQobGlzdCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXQuaWQgPSBcImlucHV0LWZpZWxkXCI7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgbmFtZVwiO1xuXG4gIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25XcmFwcGVyLmlkID0gXCJidXR0b24td3JhcHBlclwiO1xuXG4gIGNvbnN0IGlucHV0Q29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlucHV0Q29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBpbnB1dENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBsaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgc2F2ZURhdGEoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVOYXZiYXIobGlzdCk7XG4gICAgZ2VuZXJhdGVQcm9qZWN0cygpO1xuICB9KTtcblxuICBjb25zdCBpbnB1dENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlucHV0Q2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgaW5wdXRDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbnB1dC5yZXBsYWNlV2l0aChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgfSk7XG5cbiAgaW5wdXQuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb25maXJtQnV0dG9uKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dENhbmNlbEJ1dHRvbik7XG4gIGlucHV0LmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuXG4gIGFkZFByb2plY3RCdXR0b24ucmVwbGFjZVdpdGgoaW5wdXQpO1xufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVJbnB1dCB9IGZyb20gXCIuL2dlbmVyYXRlSW5wdXRcIjtcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9nZW5lcmF0ZVByb2plY3RzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZGF5LCBnZW5lcmF0ZVdlZWsgfSBmcm9tIFwiLi90b2RheS13ZWVrXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYXZiYXIodG9Eb0xpc3QpIHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLWJ1dHRvblwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGdlbmVyYXRlSW5wdXQodG9Eb0xpc3QpKTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIGNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kYXlCdXR0b24uaWQgPSBcInRvZGF5LWJ1dHRvblwiO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgdG9kYXlCdXR0b24uaW5uZXJIVE1MID0gYDxkaXY+PGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPlRvZGF5PC9kaXY+YDtcbiAgdG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnZW5lcmF0ZVRvZGF5KCk7XG4gICAgcHJvamVjdHNEaXYuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHRvZGF5QnV0dG9uKTtcbiAgY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgd2Vla0J1dHRvbi5pZCA9IFwid2Vlay1idXR0b25cIjtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgd2Vla0J1dHRvbi5pbm5lckhUTUwgPSBgPGRpdj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci13ZWVrXCI+PC9pPldlZWs8L2Rpdj5gO1xuICB3ZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdHNEaXYuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgd2Vla0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgZ2VuZXJhdGVXZWVrKCk7XG4gIH0pO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh3ZWVrQnV0dG9uKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgcG9wdXBTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZSAobWF4IDMwIGNoYXJhY3RlcnMpXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwgJiBtYXggMjQgY2hhcmFjdGVycylcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGR1ZSBkYXRlXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJkZC5tbS5ycnJyXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAvLyBDcmVhdGUgc2VsZWN0IGZvciBwcmlvcml0eVxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5O1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkFkZCBUby1Eb1wiO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSk7XG4gICAgZHVlRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBpZiAoZHVlRGF0ZSA8IGN1cnJlbnREYXRlKSB7XG4gICAgICBhbGVydChcIkRvbid0IGdvIGJhY2sgdG8gdGhlIGZ1dHVyZSFcIik7XG4gICAgfSBlbHNlIGlmICh0aXRsZUlucHV0LnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICBhbGVydChcIlRpdGxlIG11c3QgYmUgMzAgY2hhcmFjdGVycyBvciBsZXNzIVwiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUubGVuZ3RoID4gMjQpIHtcbiAgICAgIGFsZXJ0KFwiRGVzY3JpcHRpb24gbXVzdCBiZSAyNCBjaGFyYWN0ZXJzIG9yIGxlc3MhXCIpO1xuICAgIH0gZWxzZSBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGR1ZURhdGVJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlRpdGxlIGFuZCBkdWUgZGF0ZSBhcmUgcmVxdWlyZWQhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0RvKFxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgZ2VuZXJhdGVUb2RvcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBjb25zdCBwb3B1cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjtcbiAgcG9wdXBTdWJ0aXRsZS50ZXh0Q29udGVudCA9IGAke3N0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWV9YDtcblxuICBwb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBwb3B1cEJ1dHRvbi5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFN1YnRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9uKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhclwiO1xuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGdlbmVyYXRlTmF2YmFyKHRvRG9MaXN0KTtcbiAgdG9Eb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lOyAvLyBTZXQgdGV4dENvbnRlbnQgaGVyZVxuICAgIGNvbnN0IHByb2plY3RzRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0c0RlbGV0ZS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xuICAgIHByb2plY3RzRGVsZXRlLmNsYXNzTGlzdCA9IFwicHJvamVjdC1kZWxldGUtYnV0dG9uXCI7XG4gICAgcHJvamVjdHNEZWxldGUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIHN0eWxlPVwiZm9udC1zaXplOjEuMjVyZW07XCI+PC9pPmA7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0RlbGV0ZSk7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgLy8gQXBwZW5kIHRoZSBkZWxldGUgYnV0dG9uIGFmdGVyIHNldHRpbmcgdGV4dENvbnRlbnRcblxuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNEZWxldGUuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICAgICAgfSk7XG4gICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzRGVsZXRlLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XG4gICAgICB9KTtcbiAgICAgIHByb2plY3RzRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QgPSBcInByb2plY3QgYWN0aXZlXCI7XG4gICAgfSBlbHNlIHByb2plY3REaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lLm5hbWVcbiAgICAgICk7XG4gICAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZmluaXNoVG9kbyB9IGZyb20gXCIuL3RvZG9NYW5hZ2VtZW50LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVQb3B1cCB9IGZyb20gXCIuL2RlbGV0ZVBvcHVwLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUG9wdXAgfSBmcm9tIFwiLi9lZGl0VG9kby5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb3MoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3RcIik7XG5cbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGxldCBib3JkZXJDb2xvcjtcbiAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJibGFja1wiO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgLy8gaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uIGVkaXQtYnV0dG9uXCI7XG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIHN0eWxlPVwiZm9udC1zaXplOjEuNXJlbTtcIj48L2k+JztcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZVRvZG9Qb3B1cCh0b2RvKSk7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBkZWxldGUtYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxLjVyZW07XCI+PC9pPmA7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVQb3B1cCh0b2RvKTtcbiAgICB9KTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnN0IGZpbmlzaGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaW5pc2hlZEJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uIGZpbmlzaGVkLWJ1dHRvblwiO1xuICAgIGZpbmlzaGVkQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImdnLWNoZWNrXCI+PC9pPic7XG4gICAgZmluaXNoZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGZpbmlzaFRvZG8odG9kbyk7XG4gICAgfSk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChmaW5pc2hlZEJ1dHRvbik7XG5cbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eb0xpc3QuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQb3B1cCB9IGZyb20gXCIuL2dlbmVyYXRlUG9wdXAuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zLmpzXCI7XG5pbXBvcnQgeyBsb2FkU3RvcmFnZSwgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBY3Rpdml0eUxvZyB9IGZyb20gXCIuL2FjdGl2aXR5bG9nLmpzXCI7XG5pbXBvcnQgeyBjaGVja0RhdGVzIH0gZnJvbSBcIi4vY2hlY2tEYXRlcy5qc1wiO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0KCk7XG5cbmxvYWRTdG9yYWdlKCk7XG5jaGVja0RhdGVzKCk7XG5nZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCk7XG5nZW5lcmF0ZVByb2plY3RzKHRvRG9MaXN0KTtcbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgY3VycmVudFByb2plY3Q6IHRvRG9MaXN0LnByb2plY3RzWzBdLFxufTtcbmdlbmVyYXRlVG9kb3MoKTtcblxuY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5hZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZW5lcmF0ZVBvcHVwKTtcblxuY29uc3QgYWN0aXZpdHlMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2aXR5LWxvZy1idXR0b25cIik7XG5hY3Rpdml0eUxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnZW5lcmF0ZUFjdGl2aXR5TG9nKCk7XG59KTtcbnNhdmVEYXRhKCk7XG4iLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5uYW1lICE9PSBcImdlbmVyYWwgXCIpIHtcbiAgICB0b0RvTGlzdC5wcm9qZWN0cyA9IHRvRG9MaXN0LnByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdCAhPT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QgPSB0b0RvTGlzdC5wcm9qZWN0c1swXTtcblxuICAgIGdlbmVyYXRlUHJvamVjdHMoKTtcbiAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgKHRoaXMudGl0bGUgPSB0aXRsZSksXG4gICAgICAodGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8IFwiXCIpLFxuICAgICAgKHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUpLFxuICAgICAgKHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSksXG4gICAgICAodGhpcy5maW5pc2hlZCA9IGZhbHNlKTtcbiAgfVxuICB1cGRhdGVUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuICB1cGRhdGVEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICB1cGRhdGVEdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIHVwZGF0ZVByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIHVwZGF0ZU5vdGVzKG5vdGVzKSB7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG4gIHRvZ2dsZUZpbmlzaGVkKCkge1xuICAgIHRoaXMuZmluaXNoZWQgPSAhdGhpcy5maW5pc2hlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3RvRG9Qcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJHZW5lcmFsXCIpXTtcbiAgICB0aGlzLmFjdGl2aXR5TG9nID0gW107XG4gIH1cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbiAgfVxuICBhZGRBY3Rpdml0eUxvZyhtZXNzYWdlLCB0aW1lLCBzdGF0ZSkge1xuICAgIHRoaXMuYWN0aXZpdHlMb2cucHVzaChbbWVzc2FnZSwgdGltZSwgc3RhdGVdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW10gfHwgZGF0YTtcbiAgfVxuICBhZGRUb0RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9Ebyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZmluaXNoVG9kbyB9IGZyb20gXCIuL3RvZG9NYW5hZ2VtZW50LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVQb3B1cCB9IGZyb20gXCIuL2RlbGV0ZVBvcHVwLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUG9wdXAgfSBmcm9tIFwiLi9lZGl0VG9kby5qc1wiO1xuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRvZGF5KCkge1xuICBjb25zdCB0b2RheVRvZG9zID0gW107XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcbiAgdG9Eb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLnRvRGF0ZVN0cmluZygpID09PSB0b2RheTtcbiAgICB9KTtcbiAgICB0b2RheVRvZG9zLnB1c2godG9kb3MpO1xuICB9KTtcblxuICBjb25zdCB0b2RheVRvZG9zRmxhdCA9IHRvZGF5VG9kb3MuZmxhdCgpO1xuICBnZW5lcmF0ZVRvZG9zMih0b2RheVRvZG9zRmxhdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdlZWsoKSB7XG4gIGNvbnN0IHdlZWtUb2RvcyA9IFtdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheURheU9mV2VlayA9IG5vdy5nZXREYXkoKTtcbiAgY29uc3QgZGF5c1VudGlsRW5kT2ZOZXh0V2VlayA9IDEzIC0gdG9kYXlEYXlPZldlZWs7XG4gIG5vdy5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICBjb25zdCBuZXh0V2VlayA9IG5ldyBEYXRlKG5vdyk7XG4gIG5leHRXZWVrLnNldERhdGUobm93LmdldERhdGUoKSArIGRheXNVbnRpbEVuZE9mTmV4dFdlZWspO1xuICBuZXh0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgbmV4dFdlZWsuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpICsgNyk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgICAgIHJldHVybiBkdWVEYXRlID49IG5vdyAmJiBkdWVEYXRlIDw9IG5leHRXZWVrO1xuICAgIH0pO1xuICAgIHdlZWtUb2Rvcy5wdXNoKHRvZG9zKTtcbiAgfSk7XG5cbiAgY29uc3Qgd2Vla1RvZG9zRmxhdCA9IHdlZWtUb2Rvcy5mbGF0KCk7XG4gIGdlbmVyYXRlVG9kb3MyKHdlZWtUb2Rvc0ZsYXQpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9zMihsaXN0KSB7XG4gIGFkZFRvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBsZXQgYm9yZGVyQ29sb3I7XG4gICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIC8vIGlmICh0b2RvLmRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gYDNweCBzb2xpZCAke2JvcmRlckNvbG9yfWA7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBlZGl0LWJ1dHRvblwiO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICc8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiBzdHlsZT1cImZvbnQtc2l6ZToxLjVyZW07XCI+PC9pPic7XG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVUb2RvUG9wdXAodG9kbykpO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1idXR0b24gZGVsZXRlLWJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgc3R5bGU9XCJmb250LXNpemU6MS41cmVtO1wiPjwvaT5gO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlUG9wdXAodG9kbyk7XG4gICAgfSk7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBmaW5pc2hlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmluaXNoZWRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBmaW5pc2hlZC1idXR0b25cIjtcbiAgICBmaW5pc2hlZEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJnZy1jaGVja1wiPjwvaT4nO1xuICAgIGZpbmlzaGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmaW5pc2hUb2RvKHRvZG8pO1xuICAgIH0pO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZmluaXNoZWRCdXR0b24pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZVwiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaFRvZG8oZmluaXNoZWRUb2RvKSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICB0b0RvTGlzdC5hZGRBY3Rpdml0eUxvZyhmaW5pc2hlZFRvZG8sIGN1cnJlbnRUaW1lLCBgZmluaXNoZWRgKTtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MgPSBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kbyAhPSBmaW5pc2hlZFRvZG87XG4gIH0pO1xuXG4gIGdlbmVyYXRlVG9kb3MoKTtcbiAgc2F2ZURhdGEoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oZGVsZXRlZFRvZG8pIHtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MgPSBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kbyAhPSBkZWxldGVkVG9kbztcbiAgfSk7XG4gIGdlbmVyYXRlVG9kb3MoKTtcbiAgc2F2ZURhdGEoKTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlTmF2YmFyIH0gZnJvbSBcIi4vZ2VuZXJhdGVOYXZiYXIuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zLmpzXCI7XG5pbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9Eb0NsYXNzLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vdG9Eb1Byb2plY3QuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XG4gIGxldCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKTtcbiAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICBsZXQgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgdG9Eb0xpc3QuYWN0aXZpdHlMb2cgPSBwYXJzZWREYXRhLmFjdGl2aXR5TG9nO1xuICAgIHRvRG9MaXN0LnByb2plY3RzID0gcGFyc2VkRGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zKTtcbiAgICAgIG5ld1Byb2plY3QudG9kb3MgPSBwcm9qZWN0LnRvZG9zLm1hcChcbiAgICAgICAgKHRvZG8pID0+XG4gICAgICAgICAgbmV3IFRvRG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5KVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbmJvZHkgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5ib2R5IGlucHV0LFxuYm9keSB0ZXh0YXJlYSxcbmJvZHkgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuYm9keSBpbnB1dCxcbmJvZHkgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cbmJvZHkgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5ib2R5IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbmJvZHkgI2FwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuYm9keSAjYXBwICN3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkgI2FwcCAjd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYm9keSAjYXBwIGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkgI2FwcCBoZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuYm9keSAjYXBwIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMjAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cy1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3QgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCBidXR0b24gLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cbmJvZHkgI2FwcCBtYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgZmxleC1ncm93OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5ICNhcHAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmJvZHkgI2FwcCBtYWluIC5tYWluLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbmJvZHkgI2FwcCBtYWluIC5tYWluLXdyYXBwZXIgLmJ1dHRvbnMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cbmJvZHkgI2FwcCBtYWluIC5tYWluLXdyYXBwZXIgLmJ1dHRvbnMtbWFpbiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuYm9keSAjYXBwIG1haW4gLm1haW4td3JhcHBlciAuYnV0dG9ucy1tYWluIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbiNpbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2lucHV0LWZpZWxkIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICB9XG59XG4jaW5wdXQtZmllbGQgaW5wdXQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTg1ODU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIDpudGgtY2hpbGQoMSkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzdmZjc3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOGI4YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcbn1cblxuLnBvcHVwLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucG9wdXAgLnN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wb3B1cCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ2FwOiAwLjdyZW07XG4gIH1cbn1cbi5wb3B1cCBoMixcbi5wb3B1cCBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbi5wb3B1cCBmb3JtIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG4ucG9wdXAgZm9ybSAqIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9wdXAgZm9ybSAqIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbn1cblxuLnBvcHVwLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI3RvZG8tbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgfVxufVxuI3RvZG8tbGlzdCBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICN0b2RvLWxpc3QgZGl2IHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG4jdG9kby1saXN0IGRpdiBoMyB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbiN0b2RvLWxpc3QgZGl2IHAge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4jdG9kby1saXN0IGRpdiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdG9kby1saXN0IGRpdiAuZGVsZXRlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiN0b2RvLWxpc3QgZGl2IC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuI3RvZG8tbGlzdCBkaXYgLmVkaXQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4jdG9kby1saXN0IGRpdiAuZWRpdC1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4jdG9kby1saXN0IGRpdiAuZmluaXNoZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYW5pbWF0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xufVxuI3RvZG8tbGlzdCBkaXYgLmZpbmlzaGVkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc2MDA7XG59XG4jdG9kby1saXN0IGRpdiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS1wb3B1cCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmRlbGV0ZS1wb3B1cCA6bnRoLWNoaWxkKDMpIHtcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xufVxuXG4uYWN0aXZpdHktbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogOTAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59XG4uYWN0aXZpdHktbG9nIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFjdGl2aXR5LWxvZyAuYWN0aXZpdHkge1xuICBtaW4td2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWN0aXZpdHktbG9nIC5hY3Rpdml0eSAqIHtcbiAgbWFyZ2luOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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SSxVQUFBO0VBZ0JKO0FBQ0Y7QUFmSTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQWlCTjtBQWZJO0VBQ0UsWUFBQTtBQWlCTjtBQWZJO0VBQ0UsZUFBQTtBQWlCTjtBQWZJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaUJOO0FBZkk7RUFDRSxxQkFBQTtBQWlCTjtBQWZJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaUJOO0FBZkk7RUFDRSxxQkFBQTtBQWlCTjtBQWZJO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBaUJOO0FBZkk7RUFDRSx5QkFBQTtBQWlCTjtBQWRJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWdCTjs7QUFaQTtFQUNFLGlCQUFBO0FBZUY7QUFkRTtFQUNFLGtCQUFBO0FBZ0JKOztBQWJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUlBLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBWUY7QUFqQkU7RUFDRSxhQUFBO0FBbUJKO0FBZEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0JKO0FBZkk7RUFDRSxTQUFBO0FBaUJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSxcXG4gIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gUHJldmVudCB6b29tIG9uIGZvY3VzIGluIFNhZmFyaVxcbiAgfVxcbiAgaW5wdXQsXFxuICBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG4gIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgI2FwcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWFwcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICN3cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDJyZW07XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItbmF2O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgfVxcbiAgICAgICNwcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAjcHJvamVjdHMge1xcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Qge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWFwcDtcXG4gICAgICBmbGV4LWdyb3c6IDEwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIH1cXG4gICAgICAubWFpbi13cmFwcGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgICAgLmJ1dHRvbnMtbWFpbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG4jaW5wdXQtZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4ocmdiKDU2LCA1NiwgNTYpLCAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAjYnV0dG9uLXdyYXBwZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgfVxcbiAgICA6bnRoLWNoaWxkKDEpIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGJ1dHRvbi1ncmVlbiwgMTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWdyZWVuO1xcbiAgICB9XFxuICAgIDpudGgtY2hpbGQoMikge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYnV0dG9uLXJlZCwgMTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLXJlZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucG9wdXAtYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxuICAuc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gIH1cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAvLyAgIGhlaWdodDogNTAlO1xcbiAgICAvLyB9XFxuICAgICoge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbi5wb3B1cC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xcbiAgfVxcbiAgZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dDtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgfVxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIH1cXG4gICAgcCB7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5kZWxldGUtYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG4gICAgLmVkaXQtYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcGFkZGluZzogMC43NXJlbTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgLmVkaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG4gICAgLmZpbmlzaGVkLWJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBhbmltYXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIH1cXG4gICAgLmZpbmlzaGVkLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogZ3JlZW4sICRhbW91bnQ6IDIlKTtcXG4gICAgfVxcblxcbiAgICBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcbi5kZWxldGUtcG9wdXAge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICA6bnRoLWNoaWxkKDMpIHtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgfVxcbn1cXG4uYWN0aXZpdHktbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICAuYWN0aXZpdHkge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICoge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRiYWNrZ3JvdW5kLWNvbG9yLWFwcDogI2VlZWVlZTtcXG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMzNDM0MzQ7XFxuJGJhY2tncm91bmQtY29sb3ItbmF2OiAjZGRkZGRkO1xcbiRidXR0b24tZ3JlZW46ICNhYWZmYWE7XFxuJGJ1dHRvbi1yZWQ6ICNmZmJlYmU7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsidG9Eb0xpc3QiLCJzYXZlRGF0YSIsImdlbmVyYXRlQWN0aXZpdHlMb2ciLCJwb3B1cEJhY2tncm91bmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJwb3B1cCIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicXVpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJsb2ciLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJhY3Rpdml0eUxvZyIsImJvZHkiLCJnZW5lcmF0ZUFjdGl2aXRpZXMiLCJib3JkZXJDb2xvciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwicHJpb3JpdHkiLCJhY3Rpdml0eURpdiIsImJvcmRlciIsImRhdGVEaXYiLCJzdGF0ZSIsImFkZFRvRG8iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcm9qZWN0IiwicHJvamVjdHMiLCJmaW5kIiwibmFtZSIsImN1cnJlbnRQcm9qZWN0IiwiY2hlY2tEYXRlcyIsInRvZGF5IiwiRGF0ZSIsInNldEhvdXJzIiwiZXhwaXJlZFRvZG9zIiwidG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwiYWRkQWN0aXZpdHlMb2ciLCJ0b0xvY2FsZVN0cmluZyIsImRlbGV0ZVRvZG8iLCJkZWxldGVQb3B1cCIsImRlbGV0ZWRUb2RvIiwic3VidGl0bGUiLCJUb0RvIiwiZ2VuZXJhdGVUb2RvcyIsInVwZGF0ZVRvZG8iLCJ1cGRhdGVUb2RvUG9wdXAiLCJwb3B1cFRpdGxlIiwicG9wdXBTdWJ0aXRsZSIsImZvcm0iLCJ0aXRsZUlucHV0IiwidHlwZSIsInZhbHVlIiwiZGVzY3JpcHRpb25JbnB1dCIsInBsYWNlaG9sZGVyIiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0aWVzIiwib3B0aW9uIiwidGV4dCIsInN1Ym1pdEJ1dHRvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50RGF0ZSIsImFsZXJ0IiwibGVuZ3RoIiwicG9wdXBCdXR0b24iLCJnZW5lcmF0ZU5hdmJhciIsImdlbmVyYXRlUHJvamVjdHMiLCJnZW5lcmF0ZUlucHV0IiwibGlzdCIsImFkZFByb2plY3RCdXR0b24iLCJpbnB1dCIsImlkIiwiaW5wdXRGaWVsZCIsImJ1dHRvbldyYXBwZXIiLCJpbnB1dENvbmZpcm1CdXR0b24iLCJwcm9qZWN0TmFtZSIsImFkZFByb2plY3QiLCJpbnB1dENhbmNlbEJ1dHRvbiIsInJlcGxhY2VXaXRoIiwiZ2VuZXJhdGVUb2RheSIsImdlbmVyYXRlV2VlayIsInByb2plY3RzRGl2IiwidG9kYXlCdXR0b24iLCJjaGlsZE5vZGVzIiwibm9kZSIsImFkZCIsIndlZWtCdXR0b24iLCJnZW5lcmF0ZVBvcHVwIiwiZGVsZXRlUHJvamVjdCIsImFkZFRvZG9CdXR0b24iLCJpbmRleCIsInByb2plY3REaXYiLCJwcm9qZWN0c0RlbGV0ZSIsIm9wYWNpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJkaXNwbGF5IiwiZmluaXNoVG9kbyIsInRvZG9MaXN0IiwidG9kb0RpdiIsInRvZG9UaXRsZSIsInRvZG9EZXNjIiwidG9kb0RhdGUiLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiZmluaXNoZWRCdXR0b24iLCJUb0RvTGlzdCIsIlByb2plY3QiLCJsb2FkU3RvcmFnZSIsImFkZFRvRG9CdXR0b24iLCJjb25zdHJ1Y3RvciIsImZpbmlzaGVkIiwidXBkYXRlVGl0bGUiLCJ1cGRhdGVEZXNjcmlwdGlvbiIsInVwZGF0ZUR1ZURhdGUiLCJ1cGRhdGVQcmlvcml0eSIsInVwZGF0ZU5vdGVzIiwibm90ZXMiLCJ0b2dnbGVGaW5pc2hlZCIsInB1c2giLCJtZXNzYWdlIiwidGltZSIsImRhdGEiLCJkZXNjIiwidG9kYXlUb2RvcyIsInRvRGF0ZVN0cmluZyIsInRvZGF5VG9kb3NGbGF0IiwiZmxhdCIsImdlbmVyYXRlVG9kb3MyIiwid2Vla1RvZG9zIiwibm93IiwidG9kYXlEYXlPZldlZWsiLCJnZXREYXkiLCJkYXlzVW50aWxFbmRPZk5leHRXZWVrIiwibmV4dFdlZWsiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIndlZWtUb2Rvc0ZsYXQiLCJmaW5pc2hlZFRvZG8iLCJjdXJyZW50VGltZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkRGF0YSIsImdldEl0ZW0iLCJwYXJzZWREYXRhIiwicGFyc2UiLCJtYXAiLCJuZXdQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
