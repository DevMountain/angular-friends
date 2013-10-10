Angular-Friends
==============


##Objectives
Learn Basic Angular Concepts by creating a searchable, filterable list of friends

##Day 1

###Step 1: Install Angular
The angular script has already been included in the project.
In step one will to create an app variable and your FriendController. We have already provided the appropriate files and included them in a specific order (remember the order of your javascript is really imporatnt). 
* Create an app variable for your angular app in app.js (this should be one line). You can name your app whatever your want
* Create a FreiendController in the FriendController.js file
* Add the ng-app and ng-controller attributes to index.html in order to attach your controller to your html 
* Test your controller by adding an attribute its scope variable called 'test' with the value 'Hello World' and then } bind the variable in index.html {{test}} to see if your controller is working

###Step 2: Load the friend Information
In step two we will use ajax to load the friend json from a remote server practice debugging angular
* In the FriendController use jquery to load Tyler's friends' data from this url:
https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json
* Create a new attribute to your FriendController scope variable called friends and assign it to the value of your the array you 
received from the ajax call
* Practice debugging and test that your data is correctly  scoped and available to your view using the Chrome insepector. Highlight a DOM element within your FriendController and paste "angular.element($0).scope().friends" and "angular.element($0).scope().friends.length" into your console to assure that your friends variable is working and that it is an array


###Step 3: Display friend information
* Use ng-repeat to create a new li for each person in the person array
* use {{variable.property}}  bindings to fill the user's picture and data into the li content


##DAY 2

###Step 4: Add a search filter on the friends
In Step 4 we are adding a filter that will take a user inputted string and only display models that contain that string. 
Note that the filter searches all attributes of the model recurively.
* Add an attribute called searchTerm to your FriendController scope variable to store the value of a search term inputted by the user
* Bind the searchTerm variable to the search input using ng-model
* Add a filter to your ng-repeat attribute to filter on the search term

###Step 5: Split the filters into 2: name and location
In Step 5 we are making our search more specific. Our input from Step 4 will now search only the name.
We will also create a location search input.
* Refactor the search you implemented in Step 4 to only search on a friend's name 
* Create a second input and searchTerm variable for a friend's location
* Add the location specific filter 


###Step 6: Make the list sortable
* Create two variables in your friend controller, one for the attribute to sort on and another boolean for an ascending vs descending sort
* Bind the variables to their respective select elements using ng-model
* Add the ordering logic to your filter

###Step 7 EXTRA CREDIT
* Use ng-options and an array to create the filter options
* Connect the facebook api to your app so that it can use anyone's friends

##Resources
