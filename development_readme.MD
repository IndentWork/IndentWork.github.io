# Development Guide

## Local Development

### Preview the Website Locally

To preview the GitHub Pages site locally before publishing:

1. Navigate to the docs folder:
   ```bash
   cd docs
   ```

2. Start a local web server using Python:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

4. To stop the server, press `Ctrl+C` in the terminal.

### Alternative: Using a different port

If port 8000 is already in use, specify a different port:
```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`

### Requirements

- Python 3.x (pre-installed on most systems)
- A modern web browser

## Making Changes

1. Edit the HTML, CSS, or JavaScript files in the `/docs` folder
2. Refresh your browser to see changes
3. Commit and push to GitHub when ready to publish
