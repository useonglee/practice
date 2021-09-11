'use strict';

// TODO: 10개씩 post 불러오기
function postRequest(data, start, end) {
  for (let i = start; i < end; i++) {
    const { title, thumbnailUrl } = data[i];
    makePost(title, thumbnailUrl);
  }
};

// TODO: document에는 한 번만 접근한다.
let doc = document;

// TODO: add post tag to post list
function makePost(postTitle, postThumbnailUrl) {
  const postLists = doc.getElementById('post-list');
  const wrap = doc.createElement('div');
  wrap.classList.add('post-wrap');

  const title = doc.createElement('div');
  title.classList.add('post-title');
  title.textContent = postTitle;
  
  const thumbnailUrl = doc.createElement('img');
  thumbnailUrl.classList.add('post-thumbnailUrl');
  thumbnailUrl.src = postThumbnailUrl;

  wrap.append(thumbnailUrl, title);
  postLists.appendChild(wrap);
};

// TODO: remove all post
function removeAllPost() {
  while(postLists.hasChildNodes()) {
    postLists.removeChild(postLists.firstChild);
  }
}

// TODO: 데이터 범위 전역 변수
let start = 0;
let end = 10;

// TODO: post render + infinite scroll
async function render() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  const listEnd = doc.querySelector('.list-end');
  
  postRequest(data, start, end);
  
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const { target } = entry;

      if (entry.isIntersecting) {
        if (end <= data.length && target.getBoundingClientRect().y > 457) {
          start = end;
          end += 10;

          postRequest(data, start, end);
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
}

render();