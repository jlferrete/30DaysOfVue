new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'José Luis Ferrete',
    city: 'Seville',
    cityImage: 'https://sevillasecreta.co/wp-content/uploads/2016/05/Sevilla2.jpg'
  },
  methods: {
    changeCity() {
      if (this.city === 'Seville') {
        this.city = 'New York';
        this.cityImage = 'https://cdn.atrapalo.com/common/photo/vv/64739/6/ticr_640_350.jpg';
      } else {
      	this.city = 'Seville';
        this.cityImage = 'https://sevillasecreta.co/wp-content/uploads/2016/05/Sevilla2.jpg';
      }
    }
  }
});
