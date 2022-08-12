document.addEventListener('DOMContentLoaded', getData);

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';
const blogList = document.querySelector('#blog-list');
const blogDetail = document.querySelector('#blog-detail');

// fetch data
function getData() {
	fetch(baseURL)
		.then((res) => res.json())
		.then((data) => dataFeeder(data));
}

function dataFeeder(array) {
	array.forEach(createList);
	renderDetail(array[array.length - 1]);
}

function createList(blog) {
	const listItem = document.createElement('li');
	listItem.dataset.id = blog.id;
	listItem.textContent = blog.title;
	blogList.append(listItem);
}

function renderDetail(blog) {
	const blogTitle = document.createElement('h2');
	const blogContent = document.createElement('p');
	blogTitle.textContent = blog.title;
	blogContent.textContent = blog.body;
	blogDetail.append(blogTitle, blogContent);
}

function handleClick(event) {
	let targetId = event.target.dataset.id;
	fetch(baseURL + targetId)
		.then((res) => res.json())
		.then((data) => renderDetail(data));
}

blogList.onclick = handleClick;
// render data
// - make li of blog title
// - render most recent blog in "show"
