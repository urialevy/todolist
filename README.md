# todolist
A to do list for the Odin Project


### Basic design ideas: 

The to-do list will exist of two different kind of entries:

1. `task`s
    1. They will have optional due dates that can be edited in the DOM
    1. They can be flagged as 'done' which will remove them from the DOM
        - I will need to create a way for the user to switch their view between items marked as done and due or overdue items.
    1. Two types of `task`s: `note` and `checkList-item`.
    1. `task`s can be deleted without marking them as complete. Irreversible.

1. Projects
    1. These will have optional due dates
    1. Projects can be composed of sub-projects OR of sub-tasks; 
        - in other words, a task list is actually a project composed of several tasks.
    1. Flagging a project as done should have the same effect as flagging a task as done - but it will also remove all child elements from the DOM (regardless of their individual status)
        - Need to make sure that when a project is marked as done, all of its child components are marked as such as well, and that switching to a view of completed objects will include all of the project's children, regardless of individual status.
        - Perhaps marking a project as done will automatically mark all of its children as done? A consideration for ease of usability.
    1. Projects can be deleted without marking them as complete. Irreversible.

### Specific qualities of projects and individual tasks:

`task`s will have the following properties:

1. Title
1. Description (optional)
1. Due date (optional)
1. `del` button
1. `complete` button.
1. `collapse` button which displays only the title in the DOM
1. `expand` button which reveals the full task in the DOM

`project`s will have the following properties:

1. Title
1. Description (optional)
1. Due date (optional)
1. `del` button
1. `complete` button.
1. `addChild` button
    - Will give the user the ability to choose between 4 types of children: `checkList`, `note`, `task` and `project`.
        - a `taskList` is composted of multiple `checkList-item` objects.
        - a `note` is a text input
        - a `task` is a single `task` object
        - a `project` is a child `project` item. It's projects all the way down.
1. `collapse` button which displays only the title in the DOM
1. `expand` button which reveals the full project in the DOM


### Mutability of the DOM by the user:

1. The user should be able to drag objects around the DOM
1. Ability to filter object based on whether it's overdue
1. Ability to filter obejcts based on whether they're completed.