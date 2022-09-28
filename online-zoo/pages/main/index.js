const progressRange = document.querySelector('.testimonials__range');
progressRange.addEventListener('input', function() {
  const value = this.value;
  this.style.background = 
      `linear-gradient(to right, #FE9013 0%, #FE9013 ${value}%, #fff ${value}%, white 100%)`;
})
console.log('hello world!');
 