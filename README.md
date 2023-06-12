# Elephant List 🐘

## Purpose and Goals

This app was born out of the void I found when trying to find ways to donate baby related items that my child had outgrown; items that were in perfect condition, but would be better served in the hands of those who could use them. It was surpringly difficult to find people or organizations that would accept diapers, clothes, or other pregenancy/post-partum items.

That is why Elephant-List was born. The mission is to connect those who have the means with those who have the need. It is 100% donation-based. Using the app is free and all posts for items are done so on the basis to be claimed by someone who needs it for no cost.

The name Elephant-List comes from the social construct of the elephant herd; working together as a community to raise each other's young. You can read more about the elephant social construct [HERE](https://herd.org.za/blog/elephants-their-families-the-importance-of-social-structures-within-a-herd/), but I feel the moral of it can be summed up in the quote below...

_"Due to the high level of responsibility it takes to raise each individual calf, all of the mothers within the herd ensure that every young elephant is raised with the utmost love, guidance, protection, support and care."_

## Overview

Elephant-List utilizes a Rails API and a React frontend. It has been styled with Material UI, uses a Postgres databse and has been deployed [HERE](https://elephant-list.onrender.com) on [Render](https://render.com/).

It is an interface designed to build a community for parents to donate quality items related to parenthood as well as find items that may be helpful for you or your children. Anything from diapers that no longer fit your child who is growing so fast to breast-pumps, baby bottles, toys, or books. If you have anything that might be helpful in the hands of a family with young children, Elephant-List is here to help you get connected.

## Getting Started

- Fork and Clone this project
- `cd` into the project directory
- Run `bundle`
- Run `npm i && npm start -prefix client`

## Usage

- Upon opening the app, you are greeted with a Home page that lists goals and additional resources for Elephant-List. From here, you can navigate to a login page or scroll through the available donations currently on Elephant-List.

- On the Donations page, if you see a post you are interested in, click the "I'm Interested" button in order to message the owner of the post. However, you must be signed in to do so. Don't worry though! If you are not signed in, you will be prompted to do so OR create your account.

- In the messages component of this app, you can navigate between different chatrooms of users. If both parties agree, you can use the dropdown menu to officailly donate the item to that user, prompting them to write a review for your profile and update the post so that other users know the item is now "off the market"

- Reviews help future donation accepters know that it is safe to interact with this individual. So, please help contribute to the validity of each user when you accept a donation!
