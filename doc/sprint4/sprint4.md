## Meeting Goal
The goal of this meeting is to plan out potential implementations for sprint 4   
and delegate them amongst our group members based on our current strengths and   
weaknesses.

## Sprint Goal
The goal of this sprint is to implement the video conferencing feature, add companies  
identities to clients and refactoring company and user accounts. 

## Team Capacity: 
With a group of 7 people, our team plans to dedicate 99 hours to all 43 points   
this sprint. 

##Spike analysis: 
After analyzing our tickets for this sprint, we’ve decided that there are no spikes  
for our next development cycle.

# User Stories
* Create video conference, As a registered-user I would like to create a video   
conference for people to join.(Louis)
    * Create a conference page, similar to the thread page where threads are listed.
    * Create a "Create Conference" button that opens a dialog.
    * Implementation choice 1, dialog has
        * Link to https://zoom.us/meeting so that users can quickly create a meeting
        * Input fields for user to enter:
            * Zoom link
            * meeting ID
            * Passcode (optional)
            * At least 1 of zoom link or meeting ID is required
        * Implementation choice 2, dialog has
            * Required fields from https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate
        * Create api /api/zoom/create-conference
            * Request body contains:
                * zoomLink
                * meetingId
                * Passcode
            * Required
                * zoomLink OR meetingId
            * Create a Mongo model and collection for zoom conferences called "conference"  
            if not already done
                * Fields
                    * zoomLink
                    * expiryDate
                    * meetingId
                        * Required, parsed from zoom link if only that was provided.
                    * passcode
                    * uid (of who ever is posting)
                    * conId (Conference id)
                        * Required, generated
    * Video Conference list, As a user I would like to see a list of video conference (Karam)
        * Create a conference page, similar to the thread page where threads are listed.
        * In the conference page, create a list of conferences similar to the community thread list.
            * Use search conference api created
        * Create api /api/zoom/search-conference
        * Request body contains:
            * Fields
                * searchQuery
        * Returns all conferences matching specified query. Return all conferences that are not expired. 
    * Join video conference, As a user I would like to join a video conference (Joshua)
        * In the conference page, where conferences are listed
        * On click of any conference
            * Route to /zoom
                * As a routing parameter, have conId
                * User can choose to join meeting with their zoom client (Only if meetingLink exists)
                * User can join without a zoom account, as themselves.
                * Name in the zoom call is their  firstName + lastName
    * Search for video conferences in UI, As a user I would like to type something  
    in the search bar and search for a specific video conference. (Nick)
        *   Use the existing search bar in the header
            * /api/zoom/search-conference api to search for conferences
    * (BRUT-79) Add company users, As a user I would like to be able to create a  
    company account. (Joshua)
        * "User Profile" changed to "Account"
        * Add a "Create a company account" button somewhere in the Account page
            * Dialog  will appear asking for:
                * username: for login
                * password: for login
                * Company name (required)
                * Address (required)
                    * Address line 1
                    * City
                    * State/Province
                    * Postal code
                    * Country
                * Phone
                * Website
            * When OK is clicked, register the user and don't login
        * Refactor User model in database
            * Change field "email" to "username" and update anywhere in the repository  
            this would affect
        * Add user model fields (in database)
            * type
                * To distinguish what type of user it is (personal or company)
                * Required
            * address (composite attribute)
                * line1
                * city
                * province
                * postalCode
                * country
            * Phone
            * Website
            * companyName
            * ownerId
                * Required if type is "company"
        * Modify user model (database model)
            * firstName only required if type is "personal"
            * lastName only required if type is "personal"
        * Modify /api/user/register endpoint to allow registering companies
            * When type is company account, set the ownerId to uid of the current authenticated user.
        * Modify /api/user/update-user endpoint to
            * Completely disable updating company accounts
        * Add company identities in the client, as a user registered on a company  
        account I would like to see company information throughout the client. (Haiyang).
            * Display company name instead of firstName + lastName if logged-in as  
            company identity on thread/video postings as well as comments
            * Display company information on account page and disable updating values  
            when logged-in as a company
        * Logout, as a user I would like to logout. (Karampreet)
            * In the Account (Renamed from "User Profile") page
                * Add a logout button somewhere on the page
                    * Will delete all cookies
                    * Refresh page
                * Create /api/user/logout api
                    * Deletes the current authenticated user's jwt token from the  
                    'auths' db collection
    * Update the theme of the client. (Tian)
        * Website colour theme is updated
    * User profile images, as a user I would like to have a profile image. (Tian)
        * Display the user's profile image in all places where there is currently
        a hardcoded profile image
        * Update register in client to add a field for profileImage
        * Add profileImage to the user model
        * Modify the register endpoint so that it can accept a profileImage
## Participants
    * Joshua
    * Louis
    * Karampreet
    * Haiyang
    * Tian
    * Jack
    * Nicholas

                    







                    






    



            




