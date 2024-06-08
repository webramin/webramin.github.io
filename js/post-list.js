$(document).ready(function() {
  var navPostUl = $("#nav-post-ul");

  const lastFivePosts = data.posts.slice(0, 5);
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
      const navPostUl = $("#nav-post-ul");

      // دریافت پنج پست آخر
      const lastFivePosts = datapost.slice(0, 5);

      // ایجاد آیتم‌های لیست
      lastFivePosts.forEach(post => {
        const listItem = $("<li>").addClass("nav-item mb-2");
        const link = $("<a>")
          .addClass("nav-link p-0 text-body-secondary")
          .attr("href", post.link)
          .attr("target", "_blank")
          .text(post.title);

        listItem.append(link);
        navPostUl.prepend(listItem);
      });
    });
