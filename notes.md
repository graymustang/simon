# Work notes

## Simon React Part 1: routing

- Vite uses `index.html` as its entry page and loads the React entry module from
  `index.jsx`.
- `ReactDOM.createRoot` mounts the app into the `#root` element.
- `BrowserRouter`, `Routes`, and `Route` let the app switch page components
  without separate HTML files. `NavLink` provides links between those views.
- Each view can keep its own JSX and CSS under `src/<view>/`; import the CSS
  from that view component so Vite includes it in the bundle.
- CSS packages such as Bootstrap still need their stylesheet imported by the
  app. Installing a package alone does not apply its styles.
- `npm run dev` starts Vite's development server. `npm run build` creates the
  production bundle in `dist/`.
- This phase ports the page structure and routing. Game behavior and other
  reactive features belong to a later phase.
