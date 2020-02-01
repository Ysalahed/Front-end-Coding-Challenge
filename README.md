# Front-end-coding-challenge
![](https://i.imgur.com/UiFdQoF.png)

 ![](https://img.shields.io/badge/node-12.13.0-a0c334) ![](https://img.shields.io/badge/npm-6.12.0-c72c41) ![](https://img.shields.io/badge/react-16.12.0-3282b8)
>This is a coding challenge that was created by [Gemography](https://www.gemography.com/).

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
## Features
    As a User I should be able to list the most starred Github repos that were created in the last 30 days.
    As a User I should see the results as a list. One repository per row.
    As a User I should be able to see for each repo/row the following details :
        Repository name
        Repository description
        Number of stars for the repo.
        Number of issues for the repo.
        Username and avatar of the owner.
    As a User I should be able to keep scrolling and new results should appear (pagination).
## Prerequisites
This app is using reactjs therefore to run it in dev mode or to build the production version you will need to have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed

## Installation
```
git clone https://github.com/Ysalahed/Front-end-Coding-Challenge.git
npm install
```
## Usage
```bash
# Sstart the development mode
npm start
# Or build the production version
npm run build
npm install -g serve
serve -s build
```
## Npm modules
* **[bootstrap](https://www.npmjs.com/package/bootstrap)**
* **[moment](https://www.npmjs.com/package/moment)** 
* **[node-sass](https://www.npmjs.com/package/node-sass)**
* **[sass-loader](https://www.npmjs.com/package/sass-loader)**
* **[axios](https://www.npmjs.com/package/axios)**
## Documentation
The app mainly consists of two components cardslist and card
the cardslist is responsible about fetching the data on page 
load or when the scroll hits the bottom of the page and mapping 
it into another component called card

The Card component takes 7 props
```javascript
     <Card
        avatar={ "Link_to_owners_avatar" }
        userName={ "owners_username" }
        title={ "repo_title" }      
        description={ "repo_desciption" }
        stars={ "the_repos_stars_count" }
        issues={ "the_repos_issues_count" }
        creationDate={ "the_repos_creation_date" }        
    />
```
Converting the creation date to a relative one
```javascript
    import moment from 'moment';
    let timeInterval = creationDate.split( 'T' )[ 0 ];
    timeInterval = moment( creationDate, "YYYY-MM-DD" ).fromNow();
```
## Contribution
This project is not open for contribution it's just a part of a test therefore if you wanna add something to the existing code feel free to clone the existing code edit and upload it to your personal repo as i won't be managing nor accepting pull requests :)
