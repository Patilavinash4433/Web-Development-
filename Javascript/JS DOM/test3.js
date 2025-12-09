// /* Traversal Dom ==> */ 

// // Parents Element 
// var parent = document.querySelector('ul');
// console.log(parent.parentElement);

// // Children Element

// var children = document.querySelector('ul');
// console.log(children.children);
// console.log(children.childNodes);

// // Sibling Element

// var sibling = document.querySelector('li');
// if(sibling.previousElementSibling == null){
//     console.log('No previous sibling');
// }
// else{
// console.log(sibling.nextElementSibling);
// }

// appendChild() Method

// const list = document.querySelector('ul');
// const newItem = document.createElement('li');
// newItem.textContent = 'New Item';
// list.appendChild(newItem);

// removeChild() Method

// const list = document.querySelector('ul');
// list.removeChild(list.children[1]);

// replaceChild() Method

// const list = document.querySelector('ul');
// const newItem = document.createElement('li');
// newItem.textContent = 'Rose Royel';
// list.replaceChild(newItem, list.children[1]);   


// perentNode Property

// const lis = document.querySelector('ul');
// console.log(list.parentNode);
 

// firstChild Property 

// const list1 = document.querySelector('ul');
// console.log(list1.firstChild);

// lastChild Property

// const list2 = document.querySelector('ul');
// console.log(list2.lastChild);


// InnerHTML Property 

// const list = document.querySelector('li');
// list.innerHTML = '<b>This InnerHtml</b> <br> is <i>changed</i>  ';
// console.log(list);

//InnerHTML Property me + use karke add kar sakte hai Jo pahel text/Contant Tha

// const list2 = document.querySelector('li');
// list2.innerHTML += '<b>This InnerHtml</b> <br> is <i>changed</i>  '; 
// console.log(list2);

// outerHTML Property // New Element Add karne ke liye

// const list3 = document.querySelector('li');
// list3.outerHTML = '<li><b>This InnerHtml</b> </li>';





