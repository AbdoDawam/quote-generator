import './App.css'
import React, { useState } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

const App = () => {
  const url = 'https://api.quotable.io/random'
  let quoteData = {
    content: 'Let time be your only competitor.',
    author: 'Ahmed Saber',
  }
  const [quote, setQuote] = useState(quoteData)

  const shareURL = `${quote.content}  => BY ${quote.author}`
  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuote(data)
      })
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + ' once said: ' + quote.content)
    alert('copied')
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn copy">
            Copy
          </button>
          <button className="generate" onClick={generateQuote}>
            Generate Another Quote
          </button>
          <button className="share" onClick={() => setShowModal(!showModal)}>
            Share
          </button>
        </div>
      </div>
      {showModal && (
        <div className="share-container">
          <div className="share-box">
            <h1>Social Media Platforms</h1>
            <div className="social">
              <FacebookShareButton url={shareURL}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton url={shareURL}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton url={shareURL}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </div>
            <button className="close" onClick={() => setShowModal(!showModal)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
