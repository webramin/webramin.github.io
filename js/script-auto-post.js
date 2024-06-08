 $(document).ready(function() {
  const navPostUl = $("#naw-post-ul");
  // دریافت پنج پست آخر
  const lastFivePosts = datapost.slice(-5).reverse();
  // ایجاد آیتم‌های لیست
  lastFivePosts.forEach(post => {
    const listItem = $("<li>").addClass("nav-item mb-2");
    const link = $("<a>")
      .addClass("nav-link p-0 text-body-secondary")
      .attr("href", post.link)
      .attr("target", "_blank")
      .text(post.title);
    listItem.append(link);
    navPostUl.append(listItem);
  });
});


let currentPage = 1;
const postsPerPage = 15;

function loadPosts(page, filteredPosts = datapost) {
  $('#postContainer').empty();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice().reverse().slice(startIndex, endIndex);

  postsToDisplay.forEach(function(post) {
    const tags = post.tags.split(',');
    let tagButtons = '<div class="btn-group flex-wrap">';
    tags.forEach(function(tag) {
      tagButtons += `<button class="btn btn-sm btn-outline-primary tag-btn" data-tag="${tag.trim()}">${tag.trim()}</button>`;
    });
    tagButtons += '</div>';

    $('#postContainer').append(`
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${post.image}" class="card-img-top" alt="${post.title}">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.description}</p>
            <div class="row">
              <div class="col-6 col-sm-12 text-start">
                ${tagButtons}
              </div>
              <div class="col-6 col-sm-12 text-end">
                <i class="bi bi-calendar"></i> ${post.date}
                <a href="${post.link}" class="btn btn-primary">مشاهده بیشتر</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  generatePagination(page, Math.ceil(filteredPosts.length / postsPerPage));
}

function generatePagination(currentPage, totalPages) {
  $('#pagination').empty();
  for (let i = 1; i <= totalPages; i++) {
    $('#pagination').append(`
      <li class="page-item ${i === currentPage ? 'active': ''}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 150,
      behavior: 'smooth'
    });
  }

  $('.page-link').click(function(e) {
    e.preventDefault();
    currentPage = $(this).data('page');
    loadPosts(currentPage);
    scrollToTop();
  });
}

$('.search-input').on('input', function() {
  const searchTerm = $(this).val().toLowerCase();
  let filteredPosts;
  if (searchTerm.startsWith('#')) {
    const tag = searchTerm.slice(1).trim();
    filteredPosts = datapost.filter(post => post.tags.toLowerCase().includes(tag));
  } else {
    filteredPosts = datapost.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm)
    );
  }
  loadPosts(1, filteredPosts);
});

$('.tag-btn').click(function() {
  const selectedTag = $(this).data('tag');
  const filteredPosts = datapost.filter(post => post.tags.includes(selectedTag));
  loadPosts(1, filteredPosts);
  $('.tag-btn').removeClass('btn-primary').addClass('btn-outline-primary');
  $(this).removeClass('btn-outline-primary').addClass('btn-primary');
});

loadPosts(currentPage);
