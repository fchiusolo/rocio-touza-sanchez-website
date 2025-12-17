module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("politica-privacidad.html");
  eleventyConfig.addPassthroughCopy("en/privacy-policy.html");

  // Add custom filters
  eleventyConfig.addFilter("split", function(str, separator) {
    if (typeof str === "string") {
      return str.split(separator);
    }
    return str;
  });

  eleventyConfig.addFilter("trim", function(str) {
    if (typeof str === "string") {
      return str.trim();
    }
    return str;
  });

  eleventyConfig.addFilter("nl2br", function(str) {
    if (typeof str === "string") {
      return str.replace(/\n/g, "<br>");
    }
    return str;
  });

  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
