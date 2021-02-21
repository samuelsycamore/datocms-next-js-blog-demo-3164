module.exports = (dato, root, i18n) => {
  // inside a "src/articles" directory...
  root.directory("src/articles", (articlesDir) => {
    // ...iterate over the "Blog post" records...
    dato.blogPosts.forEach((article) => {
      // ...and create a markdown file for each article!
      articlesDir.createPost(
        `${article.slug}.md`, "yaml", {
          frontmatter: { 
            title: article.title, 
          },
          content: article.content
        }
      );
    });
  });
};