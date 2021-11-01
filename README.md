# Parrot Software

Parrot is Mexico's technological solution for restaurants in the digital age. Parrot is a software that centralizes: All menus, sales channels, brands and branch offices on a single platform.

## Login

## Store

## Mobile Version (Responsive Design)

## Testing Coverage

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

### Tets

```
yarn run test
```

## Notes about project

- The application was created using: Lerna, React, Next.JS, SWR, react-hook-form, Material-ui, HTML, CSS-in-JS ,Javascript, Jest, @testing-library/react.

- The application use an user and password to login and it provide feedback when an error happen.

- The login page does not show again during the session lifetime.

- Each product can be enable or disabled.

- The session lifetime is 25 minutes, but with the possibility to expand it each 25 minutes. If the session is not expanded it will close after 5 minutes.

- The application has a real time experience, if any products change in the back-office the frontend will show the change.
