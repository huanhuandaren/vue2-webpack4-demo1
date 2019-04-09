import './sty/footer.styl'
export default {
  data(){
    return{
      author:'Cheryy',
    }
  },
  render() {
    return (
      <div id='footer'>written by {this.author}</div>
    )
  }
}