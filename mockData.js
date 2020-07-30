"use strict";

var booklist = [
  { id: 1, title: "Girl, The", author: "Theodora Cramer" },
  { id: 2, title: "Panama Hattie", author: "Lauraine Clamo" },
  {
    id: 3,
    title: "Ernest Film Festival, The",
    author: "Kingsly Jezzard",
  },
  { id: 4, title: "Grace of Monaco", author: "Pooh Clancey" },
  { id: 5, title: "Drinking Buddies", author: "Dru Raddish" },
  { id: 6, title: "Rent-a-Cat", author: "Mack Lomond" },
  {
    id: 7,
    title: "Demons 2 (Dèmoni 2... l'incubo ritorna)",
    author: "Bertrand Tallis",
  },
  { id: 8, title: "Clockwatchers", author: "Markos Fleeming" },
  {
    id: 9,
    title: "Ciao, Professore! (Io speriamo che me la cavo)",
    author: "Chucho Pert",
  },
  { id: 10, title: "Staying Together", author: "Ashla Colquyte" },
  {
    id: 11,
    title: "Great Dictator, The",
    author: "Berny Petruszka",
  },
  {
    id: 12,
    title: "Hunting Party, The",
    author: "Coralyn Laverty",
  },
  { id: 13, title: "Get Out of My Room", author: "Nat Sphinxe" },
  { id: 14, title: "How About You...", author: "Pierce Ruperto" },
  {
    id: 15,
    title: "On My Way (Elle s'en va)",
    author: "Willis Deakin",
  },
  { id: 16, title: "Simon", author: "Yovonnda Eveque" },
  {
    id: 17,
    title: "Bullet to the Head",
    author: "Franky Callard",
  },
  { id: 18, title: "Lucky Break", author: "Nedi Ducrow" },
  { id: 19, title: "Rose, The", author: "Cleo Wollaston" },
  { id: 20, title: "Great Directors", author: "Paddie Garvagh" },
];

const BOOKS_PER_PAGE = 6;
const numberOfPages = Math.ceil(data.length / BOOKS_PER_PAGE);
const lastPageIndex = numberOfPages - 1;
let currentPage = 0;
 
const getTableElement = () => document.getElementsByTagName("table")[0];

function insertTableRow(id, title, author){
  const table = getTableElement();

  const row = table.insertRow();

  const idCell = row.insertCell(0);
  const titleCell = row.insertCell(1);
  const authorCell = row.insertCell(2);

  idCell.innerHTML = id;
  titleCell.innerHTML = title;
  authorCell.innerHTML = author;
};

function insertAllRows(books){
  books.forEach(book => insertTableRow(book.id, book.title, book.author));
};

insertAllRows(booklist);
console.log(bookist);
