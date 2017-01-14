# nodeshopis

a [Sails](http://sailsjs.org) application

## Create user - POST
```
  {
  "username": "tjwebb",
  "email": "me@traviswebb.com",
  "password": "test1234",
  ...otherParamHere
  }
```

### Create user success
```
{
  "username": "duminhtam4",
  "email": "duminhtam4@gmail.com",
  "age": 30,
  "company": "chotot",
  "codeName": "tamdu",
  "identifier": "duminhtam3@gmail.com",
  "createdAt": "2017-01-13T18:10:36.796Z",
  "updatedAt": "2017-01-13T18:10:36.796Z",
  "id": 6,
  "gravatarUrl": "https://gravatar.com/avatar/3079b7f698b7c5b6b00d96b85c680ce6"
}
```

### Create user error
```
{
  "originalError": {
    "error": "E_VALIDATION",
    "status": 400,
    "summary": "1 attribute is invalid",
    "invalidAttributes": {
      "email": [
        {
          "message": "Error.Passport.Email.Exists"
        }
      ]
    }
  },
  "reason": "NaN attributes are invalid",
  "code": "E_VALIDATION",
  "status": 400,
  "invalidAttributes": {
    "email": [
      {
        "message": "Error.Passport.Email.Exists"
      }
    ]
  },
  "message": ""
}
```

##Login - POST
```
  {
  "identifier": "me@traviswebb.com",
  "password": "test1234"
  }
```
###Login Success - 200
```
  {
    "owner": 5,
    "username": "duminhtam3",
    "email": "duminhtam3@gmail.com",
    "age": 30,
    "company": "chotot",
    "codeName": "tamdu",
    "identifier": "me@traviswebb.com",
    "createdAt": "2017-01-13T18:06:28.606Z",
    "updatedAt": "2017-01-13T18:06:28.628Z",
    "id": 5,
    "gravatarUrl": "https://gravatar.com/avatar/c16314adf1834c9a61329a36d1f48493"
  }
```
### Login Failed - 403
null body

https://hellosails.com/sails-permissions/
