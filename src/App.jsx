import './sass/App.scss'

function App() {

  return (
    <>
      <div className="App">
        <div className="section1">
          <h1 className="header">Join our community</h1>
          <p className="caption my-1">30-day, hassle-free money back guarantee</p>
          <p className="description">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="section2">
          <h1 className="header">Monthly Subscription</h1>
          <p className="price">$29 <span className="duration">per month</span></p>
          <p className="description">Full access for less than $1 a day</p>
          <button className="signup">Sign Up</button>
        </div>
        <div className="section3">
          <h1 className="header">
            Why us
          </h1>
          <p className="description">
            Tutorials by industry experts <br />
            Peer & expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week
          </p>
        </div>
      </div>
      <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/lexzee">Lexzee</a>.
    </p>
  </footer>
    </>
  )
}

export default App
