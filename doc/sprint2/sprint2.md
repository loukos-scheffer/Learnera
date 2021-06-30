# Meeting Goal
The goal of this meeting is to plan out potential implementations for sprint 2   
and delegate them amongst our group members based on our current strengths and   
weaknesses. 

# Sprint Goal
The goal of this sprint is to implement the community  threads part of our project  
including client work to make these features look good, and the server apis.

## Team Capacity: 
With a group of 7 people, our team plans to dedicate 90 hours to all 35 points this  
sprint. 

## User stories
* Navigate through e-learning categories, as a user I would like to see a list of  
e learning categories for videos.(Karam, Jack)
    * In the elearning page, use the server api to get all the categories and list  
    them out on the page.
    * Make the list of  categories look appealing, with 2 column
    * Create a GET api /api/videos/get-categories
    * Return all the categories we will be advertising

* Post community thread, as a logged in user, I would like to post a community   
thread.(Louis, Haiyang)
    * On the community page (where the list of threads is), add a button to post  
    the community thread.
        * A form will appear with fields to fill out
            * Form is in a dialog box
        * Submit form using the endpoint provided by the server.
    * Add a /api/threads/post endpoint that receives thread information in the   
    request information.
    * Save a new thread to the threads collection
* Community thread list, as a user I would like to go to the community thread page,  
and see a list of community threads.(Josh, Karam)
    * Ensure that the community page is created.
    * Create a list of threads
        * Make it look presentable
    * Use server provided endpoint to get paginated list of threads
    * Create /api/threads/search which takes in a search query and returns a paginated  
    list of threads. (search by title)
        * Empty search query means return anything

* View community thread, As a user I would like to view a community thread. (Tian)
    * After clicking on a thread in the thread list on /community page, it should   
    direct the user to a page for the thread.
    * Display information such as thread title, thread content, date posted, etc.
    * User server api and search for the specific thread
    * Create /api/threads/get-thread. Get thread id from request, return full thread  
    information.
* Comment on community threads, As a logged in user, I would like to provide   
feedback/comment on community threads.(Haiyang, Louis)
    * After viewing a specific thread, add a comment section to the bottom of the  
    thread information.
    * For commenting use specified endpoint provided by server
    * Add a /api/threads/comment endpoint that receives the request, a string for  
    the comment content, and a thread id.
    * In the specified thread, add a comment in the db
* Search Community Threads, As a non-registered user I would like to find and read  
community threads that discuss a topic I search. (Nick)
    * Add search bar functionality to search for threads by title.

# Participants:
* Joshua
* Louis
* Karampreet
* Haiyang
* Tian
* Jack
* Nicholas


