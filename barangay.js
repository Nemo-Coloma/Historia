document.getElementById('scrollContainer').addEventListener('wheel', function(event) {
    this.scrollLeft += event.deltaY * 5;
});


