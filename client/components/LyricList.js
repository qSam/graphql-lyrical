import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {

   onLike(id) {
     this.props.mutate({
       variables: { id: id }
     });
   }

   renderLyrics() {
        return this.props.lyrics.map( ({id,content, likes}) => {
          return (
                <li key={id} className="collection-item">
                  {content}
                  <div className="vote-box">
                  <i
                  onClick = { () => this.onLike(id) }
                  className="material-icons">thumb_up</i>
                  {likes}
                  </div>
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

export default graphql(mutation)(LyricList);
