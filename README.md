## How to run React application:
1. Clone the market-data-app repository. The market-data-app holds the Express/React application.
  - `git clone https://github.com/jason-ng3/market-data-app.git`
3. Add your MongoDB Atlas URI to an `.env` file in the `market-data-app/server` directory.
  - `MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.<cluster-shard>.mongodb.net/<database>?retryWrites=true&w=majority`
4. Start the Express web server from the `market-data-app/server` directory.
  - `npm run start`
2. Start the React dev server from the `market-data-app/react-frontend` directory.
  - `npm run dev`
3. From your web browser, navigate to `http://localhost:5173/` to view the React frontend.
