'use strict';

const root = document.getElementById('root');
const DB = [];

// 데이터를 화면에 렌더링한다.
async function render() {
  try {
    root.textContent = "Loading...";
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    DB.push(...data);
    root.textContent = "";
  } catch (err) {
    console.log(err);
  }

  DB.forEach((comment) => {
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment-wrapper');

    const id = document.createElement('div');
    id.classList.add('id');
    id.textContent = comment.id;

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = comment.name;

    commentWrapper.append(id, name);
    root.appendChild(commentWrapper);

    router(commentWrapper, comment.body);
  })
};

// 해당 comment를 클릭하면 페이지를 이동한다.
function router(comment, body) {
  comment.addEventListener('click', (event) => {
    console.log(event.target.closest('div'))
    // 로컬에서 돌릴 때만 pathName에 #을 붙여준다.
    window.history.pushState(body, 'comment', '#/comment');
    renderHTML();
  });
}

// 뒤로가기를 누르면 다시 메인으로 간다.
window.onpopstate = () => {
  renderHTML();
}

// 페이지 이동 후 렌더링
// 데이터는 history.state로 가져올 수 있다.
function renderHTML() {
  root.innerHTML = JSON.stringify(history.state);
}

render();