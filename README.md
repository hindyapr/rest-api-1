# rest-api

Route | HTTP | Header(s) | Body | Description |
------|------|-----------|------|-------------|
/api/todos | GET | token:string | none | Get all the user's todos (Authenticated user only)|
/api/todos | POST | token:string | title:string, description:string | Create a todo (Authenticated user only)|
/api/todos/:id | GET | token:string | none | Get a single todo (Owners only)|
/api/todos/:id | PUT | token:string | title:string, description:string  | Update a todo with a new info (Owners only)|
/api/todos/:id | DELETE | token:string | none | Delete a single todo (Owners only)|
/api/signup | POST | none | email:string, password:string  | Sign Up with new user info |
/api/signin | POST | none | email:string, password:string | Sign in and get an access token based on credentials |