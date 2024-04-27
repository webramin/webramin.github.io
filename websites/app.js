let currentPage = 1;
const postsPerPage = 10;
let totalPages;
let posts = [];
let filteredPosts = [];

// بارگیری پست‌ها از فایل JSON
$.getJSON('posts.json', function(data) {
  posts = data;
  filteredPosts = posts;
  totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  displayPosts(currentPage);
  displayPageNumbers();
});

// نمایش پست‌ها در صفحه
function displayPosts(page) {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex);

  $('#posts-container').empty();
  postsToDisplay.forEach(function(post) {
    const tagElements = post.tags.split(',').map(function(tag) {
      return `<button class="btn btn-sm btn-outline-primary mr-2">${tag.trim()}</button>`;
    }).join('');

    const postElement = `
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${post.image}" class="card-img" alt="${post.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
              <div class="mb-2">${tagElements}</div>
              <a href="${post.link}" class="btn btn-primary">مطالعه بیشتر</a>
            </div>
          </div>
        </div>
      </div>
    `;
    $('#posts-container').append(postElement);
  });
}

// نمایش شماره صفحات
function displayPageNumbers() {
  $('#page-numbers').empty();

  // نمایش حداکثر 5 شماره صفحه
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    const pageElement = `<button class="btn btn-outline-primary ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    $('#page-numbers').append(pageElement);
  }

  // نمایش شماره صفحه اول و آخر
  if (startPage > 1) {
    $('#page-numbers').prepend(`<button class="btn btn-outline-primary" onclick="goToPage(1)">1</button>`);
  }
  if (endPage < totalPages) {
    $('#page-numbers').append(`<button class="btn btn-outline-primary" onclick="goToPage(${totalPages})">${totalPages}</button>`);
  }
}

// رفتن به صفحه مورد نظر
function goToPage(page) {
  currentPage = page;
  displayPosts(currentPage);
  displayPageNumbers();
}

// جستجو در پست‌ها
$('#search-btn').click(function() {
  const searchTerm = $('#search-input').val().toLowerCase();
  filteredPosts = posts.filter(function(post) {
    return post.title.toLowerCase().includes(searchTerm) ||
           post.description.toLowerCase().includes(searchTerm) ||
           post.tags.toLowerCase().includes(searchTerm);
  });
  totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  currentPage = 1;
  displayPosts(currentPage);
  displayPageNumbers();
});

// رفتن به صفحه قبلی
$('#prev-btn').click(function() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
});

// رفتن به صفحه بعدی
$('#next-btn').click(function() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
});
