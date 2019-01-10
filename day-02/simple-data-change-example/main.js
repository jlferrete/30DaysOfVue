new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'José Luis Ferrete',
    city: 'Seville'
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
       'What is up!' :
       'Hello World!';
    }
  }
});
