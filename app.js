const app = Vue.createApp({
   data() {
       return {
           url: 'http://www.google.com',
           showBooks: true,
           books: [
               {
                   title: 'name of the wind',
                   author: 'patrick rothfuss',
                   img: 'assests/SarahMoeAboutImg.jpg',
                   isFav: true
               },
               {
                   title: 'the way of kings',
                   author: 'brandon sanderson',
                   img: 'assests/SarahMoeAboutImg.jpg',
                   isFav: false
               },
               {
                   title: 'the final empire',
                   author: 'brandon sanderson',
                   img: 'assests/SarahMoeAboutImg.jpg',
                   isFav: true
               }
           ]
       }
   },
   methods: {
       toggleShowBooks(){
           this.showBooks = !this.showBooks
       },
       handleEvent(e, data) {
           console.log(e, e.type)
           if (data) {
               console.log(data)
           }
       },
       handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
       },
       toggleFav(book) {
           book.isFav = !book.isFav
       }
   }
})

app.mount('#app')

// Challenge - Add to Favs 
// - attach a click event to each li tag (for each book)
// - when a user clicks an li, toggle 'isFav' property of that book