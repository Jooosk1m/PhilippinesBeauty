window.addEventListener('load', function(){
    var img = this.localStorage.getItem('img')
    var p = this.localStorage.getItem('p')
    var title = this.localStorage.getItem('title')

    this.document.getElementById('ned1').src = img
    this.document.getElementById('ned2').innerHTML = p
    this.document.getElementById('ned3').innerHTML = title
})