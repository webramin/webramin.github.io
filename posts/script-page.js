let currentPage = 1;
const postsPerPage = 10;

function loadPosts(page, filteredPosts = datapost) {
  $('#postContainer').empty();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex);

  postsToDisplay.forEach(function(post) {
    const tags = post.tags.split(',');
    let tagButtons = '';
    tags.forEach(function(tag) {
      tagButtons += `<button class="btn btn-outline-primary tag-btn" data-tag="${tag.trim()}">${tag.trim()}</button>`;
    });
    $('#postContainer').append(`
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${post.image}" class="card-img-top" alt="${post.title}">
          <div class="card-body">
            <h5 class="card-title toggle">${post.title}</h5>
            <p class="card-text enl">${post.description}</p>
            ${tagButtons}
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
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `);
  }

  $('.page-link').click(function(e) {
    e.preventDefault();
    currentPage = $(this).data('page');
    loadPosts(currentPage);
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

$('.toggle').click(function() {
  $(this).toggleClass('text-primary');
  $(this).next('.enl').toggleClass('d-none');
});

loadPosts(currentPage);
