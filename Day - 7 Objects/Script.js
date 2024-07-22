// Activity 1 - Object Creation and Access

// Task 1
const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
console.log(book);

// Task 2
console.log(book.title, book.author);

// Activity 2 - Object Methods

// Task 3
const book2 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book2.getSummary());

// Task 4
const book3 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    bookYear: function(newYear) {
        this.year = newYear;
    }
}
book3.bookYear(2004);
console.log(book3.year);

// Activity 3 - Nested Objects

// Task 5
const library = {
    name: "City Library",
    location: "Downtown",
    books: [
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            year: 1997
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            year: 1937
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ],
}
console.log(library);

// Task 6
console.log(library.books[0].title, library.books[1].title, library.books[2].title);

// Activity 4 - The This Keyword

// Task 7
const book4 = {
    title: "48 Laws of Power",
    author: "Robert Greene",
    year: 1998,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book4.getSummary());

// Activity 5 - Object Iterations

// Task 8
const book5 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
for (const property in book5) {
    console.log(`${property}: ${book5[property]}`);
}

// Task 9
const book6 = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    year: 2001
}
console.log(Object.keys(book6), Object.values(book6));