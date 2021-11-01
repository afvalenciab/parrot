# Parrot Software

Parrot is a Mexican technological solution for restaurants in the digital age. Parrot is a software that centralizes: All menus, sales channels, brands and branch offices on a single platform.

## Login
<img width="1437" alt="Screen Shot 2021-11-01 at 8 10 20" src="https://user-images.githubusercontent.com/22135167/139685272-e39c0c74-ef97-4e68-b2f4-b616384c59d0.png">

## Store
<img width="1439" alt="Screen Shot 2021-11-01 at 8 10 47" src="https://user-images.githubusercontent.com/22135167/139685289-7485fa4c-67e5-48b7-a8ca-468892ad3524.png">

## Mobile Version (Responsive Design)
<img width="935" alt="Screen Shot 2021-11-01 at 8 22 01" src="https://user-images.githubusercontent.com/22135167/139686924-744f2376-f667-45b9-9417-11707d45c3e5.png">


## Testing Coverage
<img width="1287" alt="Screen Shot 2021-11-01 at 8 27 30" src="https://user-images.githubusercontent.com/22135167/139687826-bdd0d1d9-416e-4b96-91b1-2de1a76c8210.png">

# Documentation

### Install

#### Monorepo dependencies

```
yarn install
```

> Suggestion: use current node version (v16.13.0) or node version > v13.0.0

#### Package dependencies

```
yarn bootstrap
```

#### Clean package dependencies

```
yarn clean
```

### Environment Variables

Rename '.env.example' file to '.env'

### Execution

```
yarn run dev
```

Open http://localhost:3000

**Credentials to test the app:**

```
user: android-challenge@parrotsoftware.io
pass: 8mngDhoPcB3ckV7X
```

### Tests

```
yarn run test
```

## Notes about project

- The application was created using: Lerna, React, Next.JS, SWR, react-hook-form, Material-ui, HTML, CSS-in-JS ,Javascript, Jest, @testing-library/react.

- The application uses an user and password to login and it provides feedback when an error happens.

- The login page will not be displayed again for the session lifetime.

- Each product can be enable or disabled.

- The session lifetime is 25 minutes, but with the possibility to expand it each 25 minutes. If the session is not expanded it will be closed after 5 minutes.

- The application has a real time experience, if any product changes in the back-office the frontend will show the change.
