# README

* This will be a javascript application that will fetch movie data from an api, namely omdbapi.com.
* Will use axios for fetching data from outside sources.
* For some of the styling I will be using the Bulma framework as well as custom css.
* The app will have a search function that should include autocomplete.
* Establish search and autocomplete criteria along with rules associated therewith.
* The app will display a poster of the movie along with any search parameters.
* Build the autocomplete widget from scratch
* ...

Search Widget:
* Default State = empty input
* After input completes make request to api
* Show a menu of search results which will include an img of the movie
* If not results - hide the menu
After completion:
* Allow user to select from the images to indicate their selection.
* Update text
* If user clicks outside the dropdown, close menu
Refactor of debouncing the input:

Config for AutoComplete: index.js
* fetchData() - function to find movies
* renderOption() - function that knows how to render a movie
* onOptionSelect() - function that gets invoked when a user clicks an option
* root - element that the autocomplete should be rendered into

AutoComplete: autocomplete.js
* Function that will take the autocomplete config and render an autocomplete on the screen.
