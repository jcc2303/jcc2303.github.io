# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## requirements
eslint



## develop

yarn data
yarn dev



### security

check 
```bash
https://github.com/<repository>/security/dependabot
```



## preview

build & preview

```sh
yarn build
yarn preview
```


## heroku

### deploy develop on heroku

create
```sh
heroku git:remote -a jcc2303
```

changes
```sh
git push heroku develop:main
heroku ps:scale web=1
heroku open
# https://jcc2303.herokuapp.com/
```

heroku logs --tail


## preview in heroku local 

```sh
heroku local web
```

## preview in heroku develop

```sh
git push heroku feature/<XYZ>:main -f
```








### docker - develop 

```sh
docker build -t jcc2303 .
docker run -p 5000:3000 jcc2303   
# -> CMD ->  npm run start ->  node server -> localhost:3000
```

### deploy

#### deploy github

```sh
git commit -a --amend -m "[reason]: message" && git push -f
```

- github config env
- Environments / Configure develop-deploy / protection rules / Deployment branches
- github notification

