$(document).ready(function() {
  var navPostUl = $("#nav-post-ul");

  const lastFivePosts = datapost.slice(0, 5);
  $.each(lastFivePosts, function(index, post) {
    var listItem = $("<li>")
      .addClass("nav-item mb-2")
      .append($("<a target='_blank'>")
        .addClass("nav-link p-0 text-body-secondary")
        .attr("href", post.link)
        .text(post.title)
      );
    navPostUl.prepend(listItem);
  });
});
