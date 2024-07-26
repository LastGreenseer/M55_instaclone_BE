definition of done: 
    1. user is assigned a token when the successfully log in 
    2. cookies are stored in the front end 
    3. new 'favouriteImage' route is protected by token authentication

stpes:
    BE:
       1. modify 'login' to include a token
       2. include function to verify the token
       3. protect routes with verifyToken

    FE:
       1. update fetch request to store tokens
       2. update 'login.jsx' to handle jwts
