# Notes

## Simon React Part 1: routing

- Vite uses `index.html` as its entry page and loads the React entry module from
  `index.jsx`.
- `ReactDOM.createRoot` mounts the app into the `#root` element.
- `BrowserRouter`, `Routes`, and `Route` lets the app switch page components
  without separate HTML files. `NavLink` gives links between those views.
- Each view can keep its own JSX and CSS under `src/<view>/`; import the CSS
  from that view component so Vite includes it in the bundle.
- CSS packages like Bootstrap have to have their stylesheet imported by the
  app. Installing a package alone does not apply its styles.