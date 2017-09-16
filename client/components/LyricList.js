import React, { Component } from 'react';

class LyricList extends Component {

   onLike(id) {
     console.log(id);
   }

   renderLyrics() {
        return this.props.lyrics.map( ({id,content}) => {
          return (
                <li key={id} className="collection-item">
                  {content}
                  <i
                  onClick = { () => this.onLike(id) }
                  className="material-icons">thumb_up</i>
                </li>
              );
        });
      }

  render() {

    return(
      <div>
        <ul>
         {this.renderLyrics()}
        </ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricList;
