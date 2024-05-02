function loadPosts(page, filteredPosts = datapost) {
  $('#postContainer').empty();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex).reverse();
  postsToDisplay.forEach(function(post) {
    const tags = post.tags.split(',');
    let tagButtons = '<div class="btn-group flex-wrap">';
    tags.forEach(function(tag) {
      tagButtons += `<button class="btn btn-sm btn-outline-primary tag-btn" data-tag="${tag.trim()}">${tag.trim()}</button>`;
    });
    tagButtons += '</div>';
    $('#postContainer').prepend(`
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
