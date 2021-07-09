
# Sprint 3

## Meeting Goal
The goal of this meeting is to plan out potential implementations for sprint 3  
and delegate them amongst our group members based on our current strengths and  
weaknesses. 

## Sprint Goal
The goal of this sprint is to implement the E-Learning section of our project, specifically implementing videos.

## Team Capacity
With a group of 7 people, our team plans to dedicate 101 hours to all 45 points this sprint. 

## User stories (also documented on Jira)
* Comment on community threads, as a logged in user, I would like to provide feedback/comment on community threads.(Louis, Haiyang)
	* After viewing a specific thread, add a comment section to the bottom of the thread information.
	* For commenting use specified endpoint provided by server
	* Add a /api/threads/comment endpoint that receives in the request, a string for the comment content, and a thread id.
	* In specified thread, add a comment in the DB.
* Upload E-Learning Videos, as a logged in user I would like to upload e-learning videos.(Tian Yue)
	 * Upload button similar to "Create Thread" on community page, see mockup.
	 * The dialog asks for a link to the video and categories (select categories with checkboxes).
	 * Use server provided endpoint to get categories before loading the dialog
	 * Use server provided endpoint to create video
	 * Create an endpoint /api/videos/upload that receives a link to a video, a categories list, a title and a description, then adds it to the DB.
* Seek through E-learning videos, as a user, after I clicked a category of videos, I would like to see a list of videos that I can watch.(Nick)
	 * In a subpage from the Learning page, there should be a page that lists all the videos.
		 * /learning/"category-name-here"
	* Use the server api to get the video list
	* End point created called /api/videos/search
		* HTTP Request body: query, category
		* If no category is present, just search by query.
		* If request with category, return all videos matching the query and category

* Search for E-learning videos, As a logged in user I want to be able to locate Learning videos relevant to my business (Jack)
	 * Add a search bar to the elearning videos page, and allow users to search for videos by title.
	 * Use endpoint provided by server
* Error states and user feedback, As a user I would like to know if the website is currently in an error state and I would like to get feedback from when errors occur in the website. (Group effort)
	 * Login failed, should provide proper feedback
	 * Register failed should provide proper feedback
	 * Thread create should have proper error states of fields 	
		 * (OK button disabled until title and body are filled out)
		 * Proper feedback so user knows title and body are required
	 * Upload video should have proper error states of fields 	
		 * (OK button disabled until fields are filled out)
		 * Proper feedback so user knows which fields are required	
	 * Comment on thread should have proper error states of fields 	
		 * (Comment button disabled until comment body is filled out)
		 * Proper feedback so user knows which fields are required
* View E-Learning video, As a user I would like to see the specific video page for an e-learning video. (Josh)
	* Create a subpage /learning/{category-name}/{video-id} where the video page will be 	
		* Navigate to this page when clicking on a video in the list on /learning/{category-name} page
	* Style the page very similar to thread view page, but include the video embed in the page.
	* Create a api endpoint /api/videos/get-video that receives a video id and returns the video information (link, title, description, like info, etc)


## Participants (7):
* Joshua
* Louis
* Karampreet
* Haiyang
* Tian
* Jack
* Nicholas
