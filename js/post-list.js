var datapost = [
  {
    title: "پست 6",
    link: "#"
  },
  {
    title: "پست 5",
    link: "#"
  },
  {
    title: "پست 4",
    link: "#"
  },
  {
    title: "پست 3",
    link: "#"
  },
  {
    title: "پست 2",
    link: "#"
  },
  {
    title: "پست 1",
    link: "#"
  }
];

var navPostUl = $("#nav-post-ul");
var lastFivePosts = datapost.slice(0, 5).reverse();
$.each(lastFivePosts, function(index, post) {
  var listItem = $("<li>")
    .addClass("nav-item mb-2")
    .append($("<a target='_blank'>")
      .addClass("nav-link p-0 text-body-secondary")
      .attr("href", post.link)
      .text(post.title)
    );
  navPostUl.append(listItem);
});
