import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

export default class CardsList extends Component {

    constructor( props ) {
        super( props );
        this.date = null;
        this.state = {
            page : 1,
            data : []
        }           
    }

    async componentDidMount() {
        this.setDate();
        this.getRepos();
    }

    setDate = () => {
        try {
            let date = new Date();
            date.setMonth( date.getMonth() - 1 );
            date = date.toISOString();
            date = date.split( 'T' )[ 0 ];
            this.date = date;
        } catch ( e ) {
            console.error( 'Couldn\'t get the current date' );
        }
    }

    getRepos = async() => {
        try {
            const { page } = this.state;
            const { date } = this;
            console.log(date)
            const result = await axios.get(`https://api.github.com/search/repositories?q=created:>${ date }&sort=stars&order=desc&page=${ page }`);
            if ( result.status === 200 ) {
                if ( result.data && result.data.items ) {
                    let data = this.state.data;
                    data.push( ...result.data.items );
                    await this.setState({
                        data
                    })
                }
            }
        } catch ( e ) {
            console.error( 'An error has occurred while fetching the repositories list' );
        }
    }

    mapToCards = () => {
        const { data } = this.state;
        if ( data.length > 0 ) {
            const list = data.map( ( item, index) => {
                return (
                    <Card
                        key={ index }
                        avatar={ item.owner.avatar_url }
                        userName={ item.owner.login }
                        title={ item.name }      
                        description={ item.description }
                        stars={ item.stargazers_count }
                        issues={ item.open_issues_count }
                        creationDate={ item.created_at }        
                    />
                )
            });
            if ( list.length > 0 ) {
                return (
                    <div className="container">
                        { list }
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return null;
        } 
    }

    render() {
        return this.mapToCards();
    }
}
