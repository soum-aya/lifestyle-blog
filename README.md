# My first blog/website

this blog is a clone to one of my favourite blogs <https://sayyes.com/>.

I built this blog using React.js and tailwind css for the front-end.

this blog was created using wordpress headless CMS and the data is retrieved using wordpress rest api.

I used react context api for state management and react router for routing.

## the project's screenshots

the home page contains a navbar, a main post, a slider that displays featured posts and a list of posts.

### Navbar

the submenu opens on mouse over categories.  
the social media accounts (icons and url) are fetched from the back-end using wordpress rest api.

![the navbar and submenu](/src/images/navbar-submenu.PNG)

the navbar also is home to a search form to look for different posts on the blog.

![the search form](/src/images/navbar-search.PNG)

The search is accomplished through the rest api. If there is a match(the search term is found), the app returns the posts available:

![the search results](/src/images/search-results.PNG)

In the case of no match found:

![no results](/src/images/no-results.PNG)

### Main section

the main post is fetched from the back-end using a special tag.

![the hero post](/src/images/hero.PNG)

### Slider

the slider is created with the slick package, and the featured posts are fetched from the back-end using a shared tag.

![the slider](/src/images/slider.PNG)

### The list of posts

this section displays all the posts based on demand. It was accomplished through the rest api pagination and the load more functionnality.

[!the posts list](/src/images/posts-list.PNG)

[!load more button](/src/images/load-more.PNG)

### Footer

the last section is the footer:

[!footer](/src/images/footer.PNG)

To get more informations about a post, there is a read more button on every post that allows the user to display more details about the post:

[!post details](/src/images/post-details.PNG)
