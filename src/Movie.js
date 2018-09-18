import React, { Component } from 'react';

export default class Movie extends Component {
  render(){
    return(
      <div>
      	<h2>{this.props.movieName}</h2>
      	{if(this.props.users.length < 1){
      		<p>No users liked this movie</p>
    		}else{
              <ul>
                {this.props.users.map(user => (
                 <li key={user.id}>user.name</li>
                 ))}  
              <ul>
            }
  		}//close js	
      </div>
    )
  }
}