<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

Angular-Friends
===============

##Objective
Learn Basic Angular Concepts by creating a searchable, filterable list of friends

##Part 1

###Step 1: Install Angular
The Angular script has already been included in the project.
In step one, you will create an app variable and your friendController. We have already provided the appropriate files and outlined a structure for you. 
* Create an app variable for your angular app in app.js (this should be one line). You can name your app whatever you'd like.
* Create a controller in the friendController.js file called "friendController"
* Add the `ng-app` and `ng-controller` attributes to index.html in order to attach your controller to your HTML.
* Test your controller by adding a scope variable called `test` with the value 'Hello World' and then bind the variable in index.html {{test}} to see if your controller is working.

###Step 2: Load the friend Information
In step two, we'll paste the fake data into our application.
* In the friendController copy the data from friend-data.json into a scope variable called `friends` in your friendController.
* Add a {{friends}} to the HTML page and refresh so that you can see all of your friend data show up.
* Delete {{friends}} from your HTML.

###Step 3: Display friend information
* Use ng-repeat to create a new li for each person in the person array
* Use `{{variable.property}}` bindings to fill the user's picture and data into the li content

## Part 2

###Step 4: Add a search filter on the friends
Let's add a filter that will take a user-provided string and only display models that contain that string. 
Note that the filter searches all attributes of the model recursively.
* Use ng-model (on the input) to add an attribute called searchTerm to your FriendController scope to store the value of the search term inputted by the user
* Add a filter to your ng-repeat attribute to filter on the search term

###Step 5: Split the filters into 2: name and location
Let's make our search more specific. Our input from Step 4 will now search only the name.
We will also create a location search input.
* Refactor the search you implemented in Step 4 to only search on a friend's name.
* Create a second input and searchTerm variable for a friend's location.
* Add the location-specific filter.

###Step 6: Make the list sortable
* Create two variables in your friendController, one for the attribute to sort on and another boolean for an ascending vs descending sort.
* Bind the variables to their respective select elements using ng-model.
* Add the ordering logic to your filter.
** Sample syntax  `| orderBy: propertyName : isReversed`
** See https://docs.angularjs.org/api/ng/filter/orderBy

###Step 7: Black Diamond
* Use ng-options and an array to create the filter options
* With the current format any friend with a null value on current_location is filtered out and lost as soon as any filter is applied.  The data we gave you was an example you may find yourself with coming from a 3rd party where the data is not consistent across objects.  Write a for loop or use the .map function on array to find and replace any missing current location properties with an empty object with a property that matches the property you are using for your location filter.
```javascript
  //IE - If I was filtering by current\_location.name I would find current\_location: null and replace it with
  current_location: {     
    name: ''
  }
```

##Helpful Resources
* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright
© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
