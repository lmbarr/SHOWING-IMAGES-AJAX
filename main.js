// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
// 
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
$(".btn").click(function() {
  console.log("triggered event");
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true", 
    success: function(data) {
      console.log(data);
      const children = data.data.children;
      console.log(children);
      for (let child of children) {
        $('.text').append(`<img src=${child.data.thumbnail} />`);
      };
    }
  })
})
