# rest-api

Route | HTTP | Header(s) | Body | Description |
------|------|-----------|------|-------------|
/api/hello?name={name} | GET | none | none | Print hello, {name} !|
/api/users | GET | none | none | Get all the users info (Admin only)|
/api/users | POST | none | name:string (Required), password:string (Required), email:string (Required), role:string (Required) | Create a user (Admin only)|
/api/users/:id | GET | none | none | Get a single user (Admin and Authenticated user only)|
/api/users/:id | PUT | none | name:string (Required), password:string (Required), email:string (Required), role:string (Required)  | Update a user with a new info (Admin and Authenticated user only)|
/api/users/:id | DELETE | none | none | Delete a single user (Admin only)|
/api/signup | DELETE | none | name:string (Required), password:string (Required), email:string (Required), role:string (Required)  | Sign Up with new user info |
/api/signin | DELETE | none | none | Sign in and get an access token based on credentials |