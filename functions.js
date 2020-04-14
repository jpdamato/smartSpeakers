const sadFunctions = {
  // Take out the quote and return author as well as quote
  getBadNew: function(badNews, source) {
    console.log("Getting into getBadNew");

    // Get random author if author is not defined
    if (source === undefined) {
      var totalauthors = Object.keys(badNews).length;
      var rand = Math.floor(Math.random() * totalauthors);

      // random author name
      source = Object.keys(badNews)[rand];
    }

    // check the author if it exists, and have a single author name
    switch (source) {
     
      case "news":
        source = "news";
        break;
      case "story":
        source = "story";
        break;
      default:
        source: "Unknown";
    }

    // Get total quotations for the source from the Quotes object
    var totalquotations = badNews[source].length;

    // Select a random new
    var randNew = Math.floor(Math.random() * totalquotations);
    var news = badNews[source][randNew];

    console.log("Return source and data");

    // return both the author name and the quote as an array
    return [source, news];
  }
};

module.exports = sadFunctions;