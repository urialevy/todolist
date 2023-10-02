# todolist
A to do list for the Odin Project

The to-do list will exist of two different kind of entries:

1. Tasks
    1. They will have optional due dates that can be edited in the DOM
    1. They can be flagged as 'done' which will remove them from the DOM
        - I will need to create a way for the user to switch their view between items marked as done and due or overdue items.



1. Projects
    1. These will have optional due dates
    1. Projects can be composed of sub-projects OR of sub-tasks; 
        - in other words, a task list is actually a project composed of several tasks.
    1. Flagging a project as done should have the same effect as flagging a task as done - but it will also remove all child elements from the DOM (regardless of their individual status)
        - Need to make sure that when a project is marked as done, all of its child components are marked as such as well, and that switching to a view of completed objects will include all of the project's children, regardless of individual status.
        - Perhaps marking a project as done will automatically mark all of its children as done? A consideration for ease of usability.