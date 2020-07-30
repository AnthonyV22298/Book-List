const booklist = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY75_.jpg"},
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657._SY75_.jpg" },
  { id: 3, title: "Romeo and Juliet", author: "William Shakespeare", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572098085l/18135._SY75_.jpg" },
  { id: 4, title: "The Catcher in the Rye", author: "J.D. Sallinger", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107._SY75_.jpg" },
  { id: 5, title: "Lord of the Flies", author: "William Golding", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327869409l/7624._SY75_.jpg" },
  { id: 6, title: "Of Mice and Men", author: "John Steinbeck", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511302904l/890._SX50_.jpg" },
  { id: 7, title: "Hamlet", author: "William Shakespeare", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351051208l/1420._SY75_.jpg" },
  { id: 8, title: "Clockwatchers", author: "Markos Fleeming", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404810944l/12296._SY75_.jpg" },
  { id: 9, title: "The Scarlet Letter", author: "Nathaniel Hawthorne", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404810944l/12296._SY75_.jpg" },
  { id: 10, title: "Staying Together", author: "Ashla Colquyte", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982._SY75_.jpg" },
  { id: 11, title: "Animal Farm", author: "Geroge Orwell", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448._SY75_.jpg" },
  { id: 12, title: "Macbeth", author: "William Shakespeare", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459795224l/8852._SY75_.jpg" },
  { id: 13, title: "Get Out of My Room", author: "Nat Sphinxe", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1520093244l/22628._SY75_.jpg"},
  { id: 14, title: "How About You...", author: "Pierce Ruperto", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498841231l/35031085._SY75_.jpg" },
  { id: 15, title: "On My Way (Elle s'en va)", author: "Willis Deakin", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390173285l/1381._SY75_.jpg" },
  { id: 16, title: "Simon", author: "Yovonnda Eveque", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865._SY75_.jpg" },
  { id: 17, title: "1984", author: "George Orwell", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX50_.jpg" },
  { id: 18, title: "Brave New World", author: "Aldous Huxley", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575509280l/5129._SY75_.jpg" },
  { id: 19, title: "Rose, The", author: "Cleo Wollaston", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885._SY75_.jpg" },
  { id: 20, title: "Night", author: "Elie Wiesel", photo: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575073611l/1617._SY75_.jpg" },
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
const getTableElement = () => document.getElementsByTagName("table")[0];

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  const table = getTableElement();
   
  const topRow = table.insertRow();
  topRow.insertCell(0).innerHTML = "Id";
  topRow.insertCell(1).innerHTML = "Title";
  topRow.insertCell(2).innerHTML = "Author";
  topRow.insertCell(3).innerHTML = "Photo";
  
  wrapper.appendChild(topRow);
	for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    //let item_element = document.createElement('div');
    
    
    const row = table.insertRow();

    const idCell = row.insertCell(0);
    const titleCell = row.insertCell(1);
    const authorCell = row.insertCell(2);
    const photoCell = row.insertCell(3)

    idCell.innerHTML = item.id;
    titleCell.innerHTML = item.title;
    authorCell.innerHTML = item.author;
    photoCell.innerHTML = "<img src='" + item.photo+"' alt='book image'></img>"
		
    wrapper.appendChild(row);
    //wrapper.appendChild(authorCell);
  }
  
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(booklist, list_element, rows, current_page);
SetupPagination(booklist, pagination_element, rows);