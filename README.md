# Food Ordering

A responsive web application that allows users to browse and order food from a variety of restaurants. The app features a search function, restaurant cards with detailed information, and an intuitive UI to enhance the user experience.

## Features

- **Search Functionality**: Users can search for restaurants by name, with instant filtering based on the input.
- **Restaurant Cards**: Detailed cards displaying restaurant name, cuisine, rating, and total reviews.
- **Responsive Design**: The app is fully responsive and works seamlessly across different devices and screen sizes.
- **Error Handling**: Images have a fallback option to handle loading errors gracefully.
- **Interactive UI**: Smooth animations, transitions, and hover effects for better user experience.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **JavaScript (ES6)**: Core language for logic and interaction.
- **CSS3**: Styling and responsive layout.

## Folder Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── card.js        # Component for individual restaurant card
│   │   ├── search.js      # Search input and filtering component
│   ├── config
│   │   ├── restaurants.js # Restaurant data (mock or API integration)
│   │   ├── serverConfig.js# Cloudinary and server configuration
│   ├── App.js             # Main application entry point
│   ├── index.js           # React DOM rendering
├── README.md
├── package.json           # Project dependencies and scripts
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VENOMJ-P/Food-Ordering.git
   cd Food-Ordering
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:1234
   ```

## Usage

- **Search**: Use the search bar at the top to filter restaurants by name.
- **View Restaurant Info**: Browse through the restaurant cards, which display details like the name, cuisine type, average rating, and the number of reviews.

## Components

### `RestaurantCard`

A React component that displays individual restaurant details including name, cuisine, ratings, and an image.

### `Search`

The search component that handles input and filters the displayed restaurants based on the input text.

### `FoodCard`

Displays a collection of restaurants in a flexible, responsive layout.

## CSS

- **`.search-food`**: Styles for the search bar and submit button.
- **`.card`**: Styling for the restaurant cards, including transitions and hover effects.
- **Responsive Design**: Adjustments made for mobile devices with media queries.

## Future Improvements

- Add **API integration** for real-time restaurant data.
- Implement a **cart system** for users to order food directly through the app.
- Integrate **user authentication** and profile management.
