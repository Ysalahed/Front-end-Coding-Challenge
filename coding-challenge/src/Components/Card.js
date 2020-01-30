import React from 'react'

export default function Card( props ) {
    const { avatar, title, description, stars, issues, userName } = props;
    return (
        <div className="repo-card col-12">
          <div className="row">
            <div className="avatar col-12 col-md-4 col-lg-3">
              <img src={ avatar } alt="profile"/>
            </div>
            <div className="data col-12 col-md-8 col-lg-9">
              <h3 className="repo-title"> { title } </h3>
              <div className="repo-description"> { description } </div>
              <div className="row">
                <div className="repo-stats">
                  <div className="repo-stars"> { stars } Stars </div>
                  <div className="repo-issues"> { issues }  Issue</div>
                  <div className="repo-owner">2 days ago by { userName }.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
