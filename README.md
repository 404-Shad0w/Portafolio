# Portfolio Webpage

This project is a personal portfolio webpage designed to showcase all of my projects from GitHub. The webpage features a dark color scheme for a modern and sleek appearance.

## Project Structure

```
portfolio-webpage
├── src
│   ├── index.html          # Main HTML document for the portfolio
│   ├── styles
│   │   └── dark-theme.css  # CSS styles for the dark color scheme
│   ├── scripts
│   │   └── github-projects.js # JavaScript for fetching and displaying GitHub projects
│   └── assets              # Directory for images and other media assets
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Features

- Dark color scheme for improved aesthetics and readability.
- Dynamic fetching of GitHub projects using JavaScript.
- Responsive design to ensure compatibility across devices.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-webpage
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Open `src/index.html` in your web browser to view the portfolio.

## Usage

The portfolio automatically fetches projects from my GitHub account and displays them on the webpage. Ensure that the `github-projects.js` file is correctly configured with your GitHub username to display your projects.

## License

This project is licensed under the MIT License.