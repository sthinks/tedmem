import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import splash from '../../assets/images/splash-blue.png'
import BrushAnimation from '../../components/brush-anim/BrushAnimation'
import './css/homeOneTwitter.css'

const HomeOneTwitter = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center twitter-text-header">
              <BrushAnimation title={"Tedmem'den Tweetler"} />
            </div>
          </div>
        </div>
      </div>
      <div className="twitter">
        <div className="container">
          <div className="row">
            <div className="twitter-cards">
              <div className="col-lg-4">
                <TwitterTweetEmbed
                  options={{
                    cards: 'hidden',
                    hideCard: true,
                    hideThread: false,
                  }}
                  tweetId={'1598302542454489088'}
                />
              </div>
              <div className="col-lg-4">
                <TwitterTweetEmbed
                  options={{
                    cards: 'hidden',
                    hideCard: true,
                    hideThread: false,
                  }}
                  tweetId={'1598302542454489088'}
                />
              </div>
              <div className="col-lg-4">
                <TwitterTweetEmbed
                  options={{
                    cards: 'hidden',
                    hideCard: true,
                    hideThread: false,
                  }}
                  tweetId={'1598302542454489088'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeOneTwitter
