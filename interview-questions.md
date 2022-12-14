# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The best way to update is to create a new column and migrate it into the database. The foreign key is cohort_id. 

Researched answer: To add or update anything in the database, it is best to create a new column and migrate it into the database. The foreign key is what links the cohort and student model and provides a connection between two tables. In this case, the foreign key would be cohort_id andit is a part of the student model.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes must always need params are show, edit, update, amd destroy. With create, it requires strong params to ensure that the database stores only the desired data. The controlloer will be able to figure out which id to fetch on to create data when the params are then passed. 

Researched answer: Additionally, all routes require an id in order for them to run. 

3. Name three rails generator commands. What is created by each?

Your answer: Model, migration, and controller.
- Model: Allows user to create a new table in the database that includes columns and the data type they want.
-Migration: It will add any columns that were created in the previous model.
-Controller: Allow user to create or view database

Researched answer: Model is also knwon as CRUD. Model allows user to add, update or remove data from a database, similar to using excel. Migration allows the user to alter the schema and database independently without having to manually enter. Controlloer adds methods to a file that was generated and can be defined the outcome of what the user wants when the method is specified. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
    -  Display all instances of students and is linked to the index method

action: "POST" location: /students
    - Allows user to create new students in the database and is linked to the create method

action: "GET" location: /students/new
    - Allows user to view some form to create a new student and is linked to the new method

action: "GET" location: /students/2
    - Displays the student with the id of 2 and is linked to the show method

action: "GET" location: /students/2/edit
    - Displays a form to edit the student with the id of 2 and is linked to the edit method

action: "PATCH" location: /students/2
    - Allows the user to directly cahnge any values of the student with id 2 and is linked to the update method

action: "DELETE" location: /students/2
    - Deletes the entire instants of student id 2 and is linked to the destroy method.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
    - As a dev, I want to create a to do list and save it in the database.
    - As a dev, I want to see and display all entries in the data
    - As a dev, I want to pull a specific entry from the information list
        - task_name:string
        - task_time:string
        - task_day:Date
    - As a dev, I want to add a new entry to the database
    - As a dev, I want to view the new entry that was created.
    - As a dev, I want to update the new entry task to laundry instead of shopping
    - As a dev, I want to destroy some previous task entries.
    - As a dev, I want to see the updated list
    - As a dev, I want to go to a specific page 
    - As a dev, I want to run a list of all completed tasks during a specific date. 