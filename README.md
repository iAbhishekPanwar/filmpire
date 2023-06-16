![Screenshot 2023-06-16 090002](https://github.com/iAbhishekPanwar/luckyflix/assets/104500166/9f53652f-2fea-4e24-af4d-be45e30e0cfc)
# LuckyFlix

LuckyFlix is a movie app built using React, Material-UI, and the TMDB API. It allows users to explore a vast collection of movies, add them to their watchlist or favorites, watch trailers, and view cast member details on IMDb. The app is fully responsive and provides an immersive movie-watching experience.

## Features

- Seamless integration with the TMDB API to fetch movie data, including details, images, trailers, and cast information.
- User-friendly interface with a visually appealing design using Material-UI.
- Fully responsive layout, ensuring an optimal viewing experience on various devices and screen sizes.
- Axios is used for handling HTTP requests, enabling seamless communication with the TMDB API.
- TMDB authentication is implemented to access authorized endpoints and provide personalized movie recommendations.
- Users can add movies to their watchlist to keep track of films they want to watch later.
- Favorite movies feature allows users to save their preferred films for easy access and reference.
- Movie trailers are available for viewing directly within the app, enhancing the movie-watching experience.
- Cast member details are fetched from IMDb, providing additional information about the actors and actresses.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/iabhishekpanwar/luckyflix.git
   ```

2. Change to the project directory:

   ```shell
   cd luckyflix
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Obtain an API key from the [TMDB website](https://www.themoviedb.org/) by creating an account and generating an API key.

2. Add your TMDB API key to the project by creating a `.env` file in the root directory and adding the following line:

   ```
   REACT_APP_TMDB_API_KEY=your_api_key
   ```

   Replace `your_api_key` with the actual API key obtained from TMDB.

3. Start the development server:

   ```shell
   npm start
   ```

   This will launch the application in your default browser at [http://localhost:3000](http://localhost:3000).

4. Explore the LuckyFlix app and enjoy its various features, including browsing movies, adding them to your watchlist or favorites, watching trailers, and exploring cast member details.

## Configuration

The project does not require any further configuration as it is designed to work out of the box. However, if you need to modify any settings or environment variables, you can refer to the following files:

- `.env`: Contains environment variables used in the project.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code adheres to the project's coding conventions and includes appropriate tests.

## License

The LuckyFlix project is open-source and released under the [MIT License](LICENSE).

## Acknowledgments

- The LuckyFlix project was inspired by the love for movies and the desire to create a user-friendly movie app experience.
- Special thanks to the TMDB API for providing comprehensive movie data and making it accessible to developers.
- Appreciation goes to the contributors and maintainers of the libraries used in this project for their valuable contributions and efforts.
