# Javascript2CaTest

## API Functionality
The API supports the following actions, required actions are marked with a *:

### Endpoint
How to CA - https://v2.api.noroff.dev/docs/static/index.html#/

Posts - https://docs.noroff.dev/docs/v2/social/posts
Format:

{
  "data": {
    "id": 0,
    "title": "string",
    "body": "string",
    "tags": ["string"],
    "media": {
      "url": "https://url.com/image.jpg",
      "alt": "string"
    },
    "created": "2022-09-04T08:08:38.830Z",
    "updated": "2022-09-04T08:08:38.830Z",
    "author": {
      "name": "string",
      "email": "user@example.com",
      "bio": "string",
      "avatar": {
        "url": "https://url.com/image.jpg",
        "alt": "string"
      },
      "banner": {
        "url": "https://url.com/image.jpg",
        "alt": "string"
      }
    },
    "reactions": [
      {
        "symbol": "string",
        "count": 0,
        "reactors": ["string"]
      }
    ],
    "comments": [
      {
        "body": "string",
        "replyToId": null, // or number if comment is reply to another comment
        "id": 0,
        "postId": 0,
        "owner": "string",
        "created": "2022-09-04T08:17:59.383Z",
        "author": {
          "name": "string",
          "email": "user@example.com",
          "bio": "string",
          "avatar": {
            "url": "https://url.com/image.jpg",
            "alt": "string"
          },
          "banner": {
            "url": "https://url.com/image.jpg",
            "alt": "string"
          }
        }
      }
    ],
    "_count": {
      "comments": 0,
      "reactions": 0
    }
  },
  "meta": {}
}



## Required
· Register new user*

· Login user*

· Create post*

· Get single post*

· Get many posts*

· Edit post*

· Delete post*


## Optional
· Follow / Unfollow user

· Get posts of a user

· Get posts from followed users

· Search posts

· Comment on post

· Reply to a comment

· React to a post

## API Stories

To complete this assignment, the following API features must be present in the repository and working without runtime errors:

¨ Register function that allows for the creation of new users

¨ Login function that allows for existing users to login with a token

¨ Create post function that allows a logged in user to make a new post entry

¨ Edit post function that allows a logged in user to edit an existing post

¨ Delete post function that allows a logged in user to remove an existing post

¨ Get post function that allows a logged in user to view a post


## UI Stories

To complete this assignment, the following UI features must be present in the repository and working without runtime errors:

¨ Register form allows a user to create a new account

¨ Login form allows a user to access an existing account

¨ Logout button that clears the token from the browser

¨ Post form that allows a user to create or edit a post

¨ Delete button that allows a user to remove a post

¨ Listing page showing 12 recent posts

¨ Listing page for a single specific post by ID




## Process 

1. Accept the GitHub Classroom invitation here.

2. Clone the repository to your work computer.

3. Create or update the HTML pages required. 4. Commit regularly and push your work using meaningful commit messages.

5. Using GitHub projects, list the functions your project requires.

6. Create or update JavaScript files and functions to meet the stories.

7. Update your plan with each accomplishment.

8. Test your work, track and process bugs in the Issues tab.

9. Refactor your code, looking for areas for improvement.

10. Document all required functions using JS Docs



## Level 2

In addition to the required features detailed above, the following optional features add deeper functionality to the application for those who want an extra challenge:

¨ Emoji menu allows a user to react to a post

¨ Comment form allows a user to comment on a post

¨ Reply comment form allows a user to reply to a comment on a post

¨ Follow button allows a user to follow another user

¨ Unfollow button allows a user to unfollow another user

¨ Pagination system allows for any number of results pages

¨ Search bar allows a user to find posts based on a keyword

¨ Use TypeScript instead of JavaScript

¨ Create unit tests for your key functions



## Restrictions!!!

To complete this assignment, please observe the following technical restrictions:

¨ Use of a JavaScript client-side framework or UI library is not permitted. This includes React, VueJS, Svelte, Angular or similar libraries.

¨ Please check with your teacher about group working


