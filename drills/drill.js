// Question 3.
//Assuming the books are an array of objects with both title and decimal properties

const books = 
[
{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];
function searchDecimal(
    arr,
    decimal,
    title,
    start = 0,
    end = arr.length - 1,
  ) {
    let index = Math.floor((start + end) / 2);
    let item = arr[index];
    if (item.dewey === decimal && item.title === title) {
      return `${item.title} was found.`;
    } else if (item.dewey === decimal && item.title !== title) {
      return searchDecimal(arr, decimal, title, index + 1, end);
    } else if (item.dewey < decimal) {
      return searchDecimal(arr, decimal, title, index + 1, end);
    } else if (item.dewey > decimal) {
      return searchDecimal(arr, decimal, title, start, index - 1);
    }
  }
  console.log(searchDecimal(books, '005.133', 'Teach Yourself C++ In 21 Days'))

//   Question 4. Searching in a BST

