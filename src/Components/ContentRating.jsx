
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes:0,
        dislikes:0,
        totalRatings:0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes +1,
                totalRatings: prevState.totalRatings + 1
            }));
        },

        handleDislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }))
        },
    }
        }
  render() {
    return (
     <div className='content-rating'>
        <h1>Dance Monkey</h1>
        <p text-align: justify>"Dance Monkeeyy" is a song by Australian singer Tones and I, released on 10 May 2019 as the second single (first in the US) from Tones and I's debut EP, The Kids Are Coming. 
        The song was produced and mixed by Konstantin Kersting.
        "Dance Monkey" topped the official singles charts in over 38 countries and peaked within the top ten of many others, including the United States. 
        The song broke the record for the most weeks at number one on the Australian singles chart at 24 non-consecutive weeks. 
        It also broke the record for the most weeks spent at the top of the UK Singles Chart by a female artist with 11 weeks at the top. 
        When it hit number four in the US, it became the first top-five hit solely written by a woman in over eight years. On Spotify, as of March 2024, the song is the most streamed by a female artist and the thirteenth-most overall, with over 3 billion streams. 
        The song was also the first song by a female artist to reach 3 billion streams.</p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})            
            </button>
        <p>Total Ratings ({this.state.totalRatings})</p>
        </div>
     </div>
    );
  }
}

export default ContentRating;
