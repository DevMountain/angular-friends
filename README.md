# Angular Friends
<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

### Introduction

We will be creating a searchable, filterable list of friends.

![alt text](https://github.com/DevMountain/angular-friends/blob/master/preview.png?raw=true, "Preview Image")

### Setup

Fork and clone this repo

* Include an angular script tag
* Create an `app.js` and `FriendCtrl.js` file
* Create a module in `app.js` with the name `myApp`
* Create a controller named `FriendCtrl`
* Add `ng-app` and `ng-controller` to index.html
* Use `$scope` and `{{ }}` to ensure your app is running properly

**Details**

Add a script tag below the two script tags currently in `index.html`. Grab the href from angularjs.org (Don't worry about the other two script tags, they are there for styling purposes.)

Create a file named `app.js`. Add the script tag for your new file to `index.html`. Inside this file, call angular's `module` method and pass in a name of `myApp` and an empty array. Without the empty array argument, angular would try to find the `myApp` module instead of creating a new module. Add the `ng-app` attribute to the `body` element in your html.

Create a file named `FriendCtrl.js`. After calling the `module` method with only its name, call the controller method giving it the name `FriendCtrl` and a function. Add the `ng-controller` attribute to the div with the class `friends`.

Let test your app setup. Add a scope variable called `test` with the value `'Hello World'`. Then bind the variable inside your controller element with `{{test}}` to see if your controller is working.

**Code**
<details>
  <summary>`app.js`</summary>

  ```js
  angular.module('myApp', []);
  ```
</details>

<details>
  <summary>`FriendCtrl.js`</summary>

  ```js
  angular.module('myApp').controller('FriendCtrl', function($scope){
    $scope.test = 'Hello World';
  })
  ```
</details>

<details>
  <summary>`index.html`</summary>

  ```html
  <body ng-app="myApp">
    <h1>The <strong>facebook</strong> Friend Machine</h1>
    <div class="friends" ng-controller="FriendCtrl">

    <!-- included html code -->

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.js"></script>
    <script src="./app.js"></script>
    <script src="./FriendCtrl.js"></script>
  </body>
  ```
</details>

### Load Friend Information

Below is some fake data — an array of objects representing our friends. Copy and paste this array assigning it to a property on `$scope` called `friends`.
<details>
  <summary>DATA</summary>
  ```js
  [{
    name: 'Preston McNeil',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/albert-einstein-profile-picture-133x133.PNG',
    location: { city: 'Houston', state: 'Texas', country: 'United States', zip: '' },
    status: null,
    friend_count: 628
  },{
    name: 'Ryan Rasmussen',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/bruce-lee-profile-picture-133x133.PNG',
    location: { city: 'New York', state: 'New York', country: 'United States', zip: '' },
    status: null,
    friend_count: 994
  },{
    name: 'Terri Ruff',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/chuck-norris-profile-picture-133x133.PNG',
    location: { city: 'Sandy', state: 'Utah', country: 'United States', zip: '' },
    status: 'Cannot wait for Hawaii! Excited to b away from work! I\'m getting tired of all the drama!! Big news coming soon!!!',
    friend_count: 268
  },{
    name: 'Lindsey Mayer',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/alf-profile-picture-133x133.PNG',
    location: null,
    status: null,
    friend_count: 870
  },{
    name: 'Peter John Renslow',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/justin-bieber-profile-picture-133x133.PNG',
    location: { city: 'West Lafayette', state: 'Indiana', country: 'United States', zip: '' },
    status: 'The movie Gravity: decent. The orbital mechanics in the movie Gravity: not so much.',
    friend_count: 549
  },{
    name: 'Craig Carroll',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/magnum-pi-profile-picture-133x133.PNG',
    location: { city: 'Tempe', state: 'Arizona', country: 'United States', zip: '' },
    status: null,
    friend_count: 249
  },{
    name: 'Jesse Morrison',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/doc-profile-picture-133x133.PNG',
    location: null,
    status: 'I\'m pretty excited at the prospect of having the option for cold water out of the faucet. Not just turning it all the way to the right and getting \'less hot\' water',
    friend_count: 393
  },{
    name: 'Michelle Key',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/mr-acid-man-profile-picture-133x133.PNG',
    location: null,
    status: null,
    friend_count: 928
  },{
    name: 'Abe Itty',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/leo-dicaprio-profile-picture-133x133.PNG',
    location: null,
    status: null,
    friend_count: 1427
  },{
    name: 'Ken Peng',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG',
    location: { city: 'Tucson', state: 'Arizona', country: 'United States', zip: '' },
    status: null,
    friend_count: 376
  },{
    name: 'John Dohyung Kwon',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01262014/images/walking-dead-rick-profile-picture-133x133.PNG',
    location: null,
    status: null,
    friend_count: 79
  },{
    name: 'Dan Sullivan',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/eagle-profile-picture-133x133.PNG',
    location: { city: 'Cambridge', state: 'Massachusetts', country: 'United States', zip: '' },
    status: null,
    friend_count: 527
  },{
    name: 'Chad Bennett',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01262014/images/wolf-profile-picture-133x133.PNG',
    location: null,
    status: null,
    friend_count: 1885
  },{
    name: 'Kirk Hill',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/furby-profile-picture-133x133.PNG',
    location: { city: 'Pearland', state: 'Texas', country: 'United States', zip: '' },
    status: null,
    friend_count: 185
  },{
    name: 'Joseph Moses Craven',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/mr-bean-profile-picture-133x133.PNG',
    location: { city: 'Ardmore', state: 'Oklahoma', country: 'United States', zip: '' },
    status: null,
    friend_count: 708
  },{
    name: 'Jeremy James',
    pic_square: 'http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_246.png',
    location: { city: 'Provo', state: 'Utah', country: 'United States', zip: '' },
    status: null,
    friend_count: 555
  },{
    name: 'Heather Clouse',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/painted-kitten-profile-picture-133x133.PNG',
    location: { city: 'Orem', state: 'Utah', country: 'United States', zip: '' },
    status: 'Last night I had a dream that my mother-in-law Angie Clouse unexpectedly stopped by my house and gave me a cleaning to do list.  Apparently it is time to clean my bathroom.',
    friend_count: 366
  },{
    name: 'Joel Gardner',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/lamborghini-profile-picture-133x133.PNG',
    location: { city: 'Provo', state: 'Utah', country: 'United States', zip: '' },
    status: null,
    friend_count: 518
  },{
    name: 'Lance Winward',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/purple-tiger-profile-picture-133x133.PNG',
    location: { city: 'American Fork', state: 'Utah', country: 'United States', zip: '' },
    status: null,
    friend_count: 482
  },{
    name: 'JD Clark',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/darthvader-profile-picture-133x133.PNG',
    location: { city: 'Provo', state: 'Utah', country: 'United States', zip: '' },
    status: 'Internet, why you so distracting?? Stahhp',
    friend_count: 665
  },{
    name: 'Spencer Mooso',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/sponge-bob-profile-picture-133x133.PNG',
    location: { city: 'Lehi', state: 'Utah', country: 'United States', zip: '' },
    status: null,
    friend_count: 579
  },{
    name: 'Andrew Wiggins',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG',
    location: { city: 'Salt Lake City', state: 'Utah', country: 'United States', zip: '' },
    status: null,
    friend_count: 658
  },{
    name: 'Brittany Brown',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/kat-von-d-profile-picture-133x133.PNG',
    location: null,
    status: 'Any of my wondeful friends know how to change a water pump on a ford explorer?? :) I will pay and provide delicious treats',
    friend_count: 690
  },{
    name: 'Nick Petersen',
    pic_square: 'http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_290.png',
    location: { city: 'Jupiter', state: 'Florida', country: 'United States', zip: '' },
    status: 'Very grateful for the wisdom shared during the conferences of the church #ldsgeneralconference',
    friend_count: 707
  },{
    name: 'Jeffrey Swindle',
    pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/pumba-profile-picture-133x133.PNG',
    location: { city: 'Ann Arbor', state: 'Michigan', country: 'United States', zip: '' },
    status: null,
    friend_count: 1167
  },{
    name: 'Travis Epperson',
    pic_square: 'http://free-profile-pics.com/images/bbm_avatar_107.png',
    location: { city: 'Phoenix', state: 'Arizona', country: 'United States', zip: '' },
    status: null,
    friend_count: null
  },{
    name: 'Matt LeGare',
    pic_square: 'http://free-profile-pics.com/images/bbm_avatar_117.png',
    location: null,
    status: null,
    friend_count: 350
  },{
    name: 'Karla Jensen Pratt',
    pic_square: 'http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_175.png',
    location: null,
    status: null,
    friend_count: 855
  }]
  ```
</details>

Add `{{friends}}` to the html page and refresh to see all of your friend data. Remove it afterwards.

**Code**
<details>
  <summary>`FriendCtrl.js`</summary>
  ```js
  angular.module('myApp').controller('FriendCtrl', function($scope){
    $scope.friends = [] // <-- replace this array with the data above
  })
  ```
</details>

### Display Friend Information

You now have a list of friends on your scope.  Display that list of friends on the screen.  There is some html code already in the index.html to help you get the look right.

Your data contains a url for an image for each friend.  Make sure the image shows up as well!

**Details**

* Use ng-repeat on the `li` element to create a new `li` element for each friend in the friends array.

* Use `{{}}` bindings to fill the user's picture and data into the li content.
When doing this you can walk down objects using dot notation.

* For the images use ng-src not src. This prevents the browser from trying to load the image before angular has a chance to load it.

**Code**
<details>
  <summary>`index.html`</summary>
  ```html
  <ul>
      <li class='friend' ng-repeat="friend in friends">
          <img class="profile-pic" ng-src='{{friend.pic_square}}'>
          <h3>{{friend.name}}</h3>
          <div class="location">
              Location: {{friend.location.city}}, {{friend.location.state}}, {{friend.location.country}},
          </div>
          <div class="status">
              Status: {{friend.status.message}}
          </div>
          <div class="num-friends">
              Friends: {{friend.friend_count}}
          </div>
      </li>
  </ul>
  ```
</details>

### Add a search filter on the friends

A filter that will take a user-inputted string and only display models that contain that string.

Note that the filter searches all attributes of the model recursively.
* Use ng-model (on the input) to add an attribute called `searchTerm` to your FriendCtrl scope to store the value of the search term inputted by the user.
* Add a filter to your ng-repeat attribute to filter on the search term.

**Code**
<details>
  <summary>`index.html`</summary>
  ```html
  <input
    class="form-control"
    placeholder="Search Anything About Your Friends"
    ng-model="friendFilter"
  >
  <!-- other html code -->
  <li ng-repeat="friend in friends | filter: friendFilter">
  ```
</details>

### Split the Filter By Name and Location

Replace the current input element with two new inputs:
```html
<input class="form-control" placeholder="Search Name">
<input class="form-control" placeholder="Search State">
```

Change your filter so that you are filtering by `name` or `state` specifically, instead of by all fields.

**Details**

Let's make our search more specific.
* Create a filter object and use two properties on that object.  One for the name and one for the location.
* Refactor the search you implemented in Step 4 to only search on a friend's name.
* Use our uncommented second input to add a friend's location to our filter object.
* Use our filter object in our ng-repeat filter.

Filtering works by matching the exact structure of the data you're searching. This includes both the property name and the value of that property.  This can also be nested and include child objects.  Searching on nested objects would mean your filter needs to be nested as well.

**Code**
<details>
  <summary>`index.html`</summary>
  ```html
    <input
      class="form-control"
      placeholder="Search Name"
      ng-model="friendFilter.name"
    >
    <input
      class="form-control"
      placeholder="Search By State"
      ng-model="friendFilter.location.state"
    >
    <!-- other html code -->
    <ul>
      <li ng-repeat="friend in friends | filter: friendFilter">
  ```
</details>

### Make the list sortable

Make your list sortable using the provided sort drop-down.

**Details**

* Create two variables in your friend controller, `sortProp` for the attribute to sort on and `sortDirection` for an ascending vs descending sort.
* Add a value attribute (```value="something"```) to each item in the list of options. This value needs to equal the value of the property, on each friend object in your array, that you want to sort by.
* Bind the variables to their respective `<select>` elements using ng-model.
* Add the ordering logic to your filter.

Sample syntax `| orderBy: isReversed + propertyName`
See https://docs.angularjs.org/api/ng/filter/orderBy for more details.

**Code**
<details>
  <summary>`index.html`</summary>
  ```html
  <select class="input-medium" ng-model="sortProp">
      <option value="name">Name</option>
      <option value="friend_count">#Friends</option>
      <option value="location.city">City</option>
      <option value="location.state">State</option>
      <option value="location.country">Country</option>
  </select>

  <select class="input-medium" ng-model="sortDirection">
      <option value="-">Descending</option>
      <option value="+">Ascending</option>
  </select>
  <!-- other html code -->
  <ul>
      <li ng-repeat="friend in friends | filter: friendFilter | orderBy: sortDirection + sortProp ">
        <!-- other html code -->
      </li>
  </ul>
  ```
</details>

### Black Diamond

Use ng-options and an array to create the filter options

## Resources

* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
