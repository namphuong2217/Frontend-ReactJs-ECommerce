![images](https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/project-logo.png)

# Frontend-ReactJs-ECommerce

A GUI for a E-Commerce website.

#### Demo Link

https://e-commerce-private.netlify.app/

#### Overview

The example application is a E-Commerce site. It uses a custom API for seeding initial data. [API Products endpoint](https://course-api.com/react-store-products)

**General functionality:** 

1. Authenticate users via OAuth2
2. GET and display paginated lists of product items
3. Search and sort products by keywords, colors, prices and so on.
4. Add to cart and shopping cart general functionality.


**The general page breakdown looks like this:**

* Home page (URL: /)
  * List of initial featured items
  * Simple introduction and subscription form
* OAuth Login Page (URL: /OAuth default page)
* About page (URL: /about)
* Products page (URL: /products)
  * List of all products
  * Filter of products by sorting criteria such as category, color,...
* Single product page
  * Display a product details
* Cart page (URL: /cart)
  * List of selected items with functionality like increase quantity and remove item

