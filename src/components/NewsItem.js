// type rce to get react class based component
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

        return (
          <div className="my-3">
            <div className="card" style={{width:'23rem'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
                  <span class="badge rounded-pill bg-danger"> {source}</span> 
                </div>
                <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title}...</h5>
                    <p className="card-text"> {description}... </p>
                    <p class="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
          </div>
        )
    }
}

export default NewsItem