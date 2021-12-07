## Getting Started

First, you should install dependencies:

```bash
npm install
```

Create `.env` file with params from `example.env`;

In `package.json` change `<SECRET>` in command `migration`
to ***secret from hasura project***.

Then you can run the development server:

```bash
npm run full:dev
```

Or if you want to run prod build:

```bash
npm run full:prod
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
