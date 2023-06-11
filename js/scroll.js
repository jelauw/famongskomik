var currentPage = 1;
var isLoading = false;

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight && !isLoading) {
    isLoading = true;
    currentPage++;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var newContent = this.responseText;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newContent;

        var nextPageContent = tempDiv.querySelector('.main-content').innerHTML;
        document.querySelector('.main-content').innerHTML += nextPageContent;

        isLoading = false;
      }
    };
    xhttp.open('GET', 'ch' + currentPage + '.html', true);
    xhttp.send();
  }
});
