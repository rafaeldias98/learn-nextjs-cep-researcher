# CEP Researcher [Learning NextJS]
This repository is a self-implementation of [Create a Next.js App Tutorial][1]

![][6] ![][8] ![e2e tests][10]

## :top: Project
![][2]

## :ballot_box_with_check: Requirements
* [Node.js][13] installed, version 10.13 or later

## :construction: Start Development Server
```sh
$ cp .env.example .env
$ npm run dev
```

## :skull: Run Tests
#### E2E tests:
```sh
$ npm run test:e2e
```

## :rocket: Deploy ![][7]
This repository has CI/CD configured with Github Actions + Vercel.

- For each commit pushed to any branch, Vercel performs a Preview Deployment and provides a Preview URL used to perform all tests. If the tests pass, the code can be merged into the `master` branch

- For each commit pushed to `master`, Vercel deploy the code in Production environment.

## :newspaper: Project Dependencies
This project depends of [BrasilAPI][3], a project by [Filipe Deschamps][11] (a person who inspires me)

## :wrench: Contributing
![contributions welcome][12]

If you find any problem or have a suggestion, please [open an issue][4].

## :computer: Author
* **Rafael Dias** - *Software Developer*

## :pencil: License
![][9]
- This project is licensed under the MIT License - see the [LICENSE][5] file for more details.

<!-- LINKS -->
[1]:https://nextjs.org/learn/basics/create-nextjs-app
[2]:docs/cep-researcher.png
[3]:https://github.com/filipedeschamps/BrasilAPI
[4]:https://github.com/rafaeldias98/learn-nextjs-cep-researcher/issues/new
[5]:LICENSE
[6]:https://badgen.net/github/commits/rafaeldias98/learn-nextjs-cep-researcher
[7]:https://badgen.net/badge/icon/Vercel/black?icon=zeit&label
[8]:https://img.shields.io/github/contributors/rafaeldias98/learn-nextjs-cep-researcher
[9]:https://badgen.net/badge/license/MIT/black
[10]:https://github.com/rafaeldias98/learn-nextjs-cep-researcher/workflows/e2e%20tests/badge.svg?branch=master&event=deployment_status
[11]:https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw
[12]:https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat
[13]:https://nodejs.org/
