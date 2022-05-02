# PokemonTask #
All Pokemon data should be requested via the public PokeApi project: [https://pokeapi.co/](https://pokeapi.co/).

Using the database of your choice, keep track of the total number of times each Pokemon has been added to a party across all sessions. Display this value at the bottom of each Pokemon in the list.

__Note:__ We only want to see Pokemon from the 1st generation ([https://pokeapi.co/docs/v2.html#generations](https://pokeapi.co/docs/v2.html#generations))


## Front End Tasks ##

### Index page ###
| # | Task Details |
| - | ---- |
| 1 | Request the Pokemon twelve at a time and display them in a three column grid. |
| 2 | Scrolling to the bottom of the grid should trigger a request for the next twelve Pokemon. |
| 3 | Display the number of Pokemon that have been loaded at the bottom of the grid. |
| 4 | When a Pokemon is clicked, add it to the party. __*__ |
| 5 | Display the Pokemon that are currently in the party on the right hand side of the grid. |
| 6 | In the design where it says "Added to X parties", display the total number of times that Pokemon has been added to a party. (refer to back end tasks) |

__*__ The following restrictions apply to your party:

1. It can only hold up to six Pokemon at a time.
2. It cannot contain duplicates.
3. It should survive a page reload.

### Party page ###
| # | Task Details |
| - | ---- |
| 1 | Display the Pokemon that are currently in the party in a three column grid. |
| 2 | The Pokemon can be given a nickname (only applies to the Party, not the index page) by clicking on the name text. |
| 3 | The Pokemon can be removed from the party by clicking the 'X' icon. |

## Back End Tasks ##

| # | Task Details |
| - | ---- |
| 1 | Keep track of the total number of times each Pokemon has been added to a party. |