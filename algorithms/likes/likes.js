/*You probably know the "like" system from Facebook and other pages. People
/*can "like" blog posts, pictures or other items. We want to create the text
/*that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input
array, containing the names of people who like an item. It must return the
display text as shown in the examples:*/

function likes(names) {
  // TODO
}

debug(likes([])); //'no one likes this'
debug(likes(['Peter'])); //'Peter likes this'
debug(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
debug(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
debug(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'