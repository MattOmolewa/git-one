let favoriteBook = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBook.push(bookName);
  }
}
addFavoriteBook("the gatsby");
addFavoriteBook("the hunter");

console.log(favoriteBook);

// function print(array)
