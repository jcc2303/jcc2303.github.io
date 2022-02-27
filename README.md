# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## requirements
eslint



## develop

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


## preview in heroku local 

```sh
heroku local web
```


### deploy on dev

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

