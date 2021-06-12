# Sprint 1

## Meeting Goal
The goal of this meeting is to plan out potential implementations for sprint 1  
and delegate them amongst our group members based on our current strengths and  
weaknesses. 

## Sprint Goal
The goal of this sprint is to complete the basic structural setup in our  
project, this includes the highest priority tickets. Work done during this  
sprint will lay the groundwork for future sprints and user stories. We will  
setup the database, and basic API calls for login/register and the ability  
to update a users information.

## Spikes
Registering an account would be a spike because it's the user story with the  
highest priority. All other user stories depend on this story and we don't know  
how much time is needed for this story because completion of this story requires  
a lot of setup of our project.  


## Team Capacity
With a group of 7 people, our team plans to dedicate 70 hours to all 24 points  
this sprint. 

## User stories
* Register account (Karam, Josh) , as a non-registered user I would like to  
register and create an account.
 * Create a register component, similar to how login is already implemented.
 * Send request to the server with the user information
 * POST request at /api/user/register to register user
 * Return 201 and a JWT as an authentication token after successful.
 * Database setup to save user email, password, and an authentication token.
* Login(Josh, Tian Yue), as a registered user I would like to login to my
account
 * Save the token returned by server as a cookie
 * POST request at /api/user/login
 * Check database for valid email and password, if exists then return 200 and  
 a JWT as an authentication token
 * If not valid email and password then return 200, and FAILURE as a 
statusMessage.
* View Homepage, as a user I would like to view the home page (Nick).
 * Show recommended section for E learning videos
 * Show recommended section for community threads
 * Show section for recent messages
* Edit User Profile, as a logged in user I want to be able to edit my profile:  
things like profile, bio, company name, etc. (Louis, Haiyang)
 * Make a profile page with fields for the user model.
 * Able to see, edit and save fields
 * Make request to save fields
 * There should be a button to save fields
 * Create a PUT /api/user/updateuser
 * If the user is authenticated (a valid token exists in the request), update  
 the user's fields in the user table
 * Return 200 if successfully updated user
* Setup navigation bar, as a user I would like to be able to navigate the site  
using a navigation bar.(Jack)
 * Link to Home, E-Learning, Community, and profile pages.     
 * If a user is not logged in, the link will lead to the login page.
 * Visible on all pages on the site, except for login and registration pages.

## Participants (7):
* Joshua
* Louis
* Karampreet
* Haiyang
* Tian
* Jack
* Nicholas



