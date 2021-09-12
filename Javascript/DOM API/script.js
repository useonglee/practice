'use strict';

const DATABASE = [];

// TODO: 데이터 외부 변수에 저장하기
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  DATABASE.push(...data);
}

// TODO: 10개씩 post 불러오기
function postRequest(data, start, end) {
  for (let i = start; i < end; i++) {
    const { title, thumbnailUrl, id } = data[i];
    makePost(title, thumbnailUrl, id);
  }

  filterPost();
};

// TODO: document에는 한 번만 접근한다.
let doc = document;
const postLists = doc.getElementById('post-list');

// TODO: add post tag to post list
function makePost(postTitle, postThumbnailUrl, postId) {
  const wrap = doc.createElement('div');
  wrap.classList.add('post-wrap');

  const thumbnailUrl = doc.createElement('img');
  thumbnailUrl.classList.add('post-thumbnailUrl');
  thumbnailUrl.src = postThumbnailUrl;

  const title = doc.createElement('div');
  title.classList.add('post-title');
  title.textContent = postTitle;

  const id = doc.createElement('div');
  id.classList.add('post-id');
  id.textContent = postId;

  wrap.append(thumbnailUrl, title, id);
  postLists.appendChild(wrap);
};

// TODO: remove all post
function removeAllPost() {
  while(postLists.hasChildNodes()) {
    postLists.removeChild(postLists.firstChild);
  }
}

// TODO: submit post 
function submitPost() {
  const inputId = doc.getElementById('input__value-id');
  const inputTitle = doc.getElementById('input__value-title');
  const submitBtn = doc.getElementById('post-submit');
  
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newPost = {
      "albumId": 1,
      "id": inputId.value,
      "title": inputTitle.value,
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    DATABASE.unshift(newPost);

    removeAllPost();
    render();

    inputId.value = '';
    inputTitle.value = '';
  })
};

// TODO: 데이터 범위 전역 변수
let start = 0;
let end = 10;

// TODO: post render + infinite scroll
function render() {
  getData();
  const listEnd = doc.querySelector('.list-end');
  
  setTimeout(() => {
    postRequest(DATABASE, start, end);
  }, 500);
  
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const { target } = entry;
      console.log(target.getBoundingClientRect().y);

      if (entry.isIntersecting) {
        if (end <= DATABASE.length && target.getBoundingClientRect().y > 362) {
          start = end;
          end += 10;

          postRequest(DATABASE, start, end);
          
          console.log(start,end);
          observer.unobserve(target);
        }
      } else {
        return;
      }

      observer.observe(target);
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }

  const observer = new IntersectionObserver(
    observerCallback,
    observerOptions,
  );

  observer.observe(listEnd);
};

render();
submitPost();

// TODO: filtering
function filterPost() {
  const posts = doc.querySelectorAll('.post-title');

  posts.forEach((post) => {
    filtering(post);
  });
}

let filtered = [];

function filtering(post) {
  post.addEventListener('click', (e) => {
    const title = e.target.textContent;
    console.log(title)

    filtered = DATABASE.filter(v => v.title === title);

    removeAllPost();

    setTimeout(() => {
      postRequest(filtered, 0, filtered.length);
    }, 500)
  });
}
