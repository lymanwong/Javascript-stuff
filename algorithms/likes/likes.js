/*You probably know the "like" system from Facebook and other pages. People
/*can "like" blog posts, pictures or other items. We want to create the text
/*that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input
array, containing the names of people who like an item. It must return the
display text as shown in the examples:*/

function likes(names) {
	var names_length = names.length;
	var ending = " likes this"
	var ending2 = " like this"
	if (names_length == 0) {
		return 'no one likes this';
	} 
	else if (names_length == 1) {
		return names[0] + ending;
	}
	else if (names_length == 2) {
		return names[0] + " and " + names[1] + ending2;
	}
	else if (names_length == 3) {
		return names[0] + ", " + names[1] + " and " + names[2] + ending2; 
	}
	else {
		return names[0] + ", " + names[1] + " and " + names[2] + " and " + (names_length - 2) + " others" + ending2;
	}
}

debug(likes([])); //'no one likes this'
debug(likes(['Peter'])); //'Peter likes this'
debug(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
debug(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
debug(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'