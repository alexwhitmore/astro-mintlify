# Contributing

Thanks for your interest in contributing to [Astro Mintlify](https://astro-mintlify.vercel.app/). We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@theAlexWhitmore](https://x.com/theAlexWhitmore).

## Structure

This repository is structured as follows:

```
src
  ├── components
      ├── docs
      ├── layout
      └── ui
  ├── config
  ├── content
  ├── layouts
  ├── lib
  ├── pages
  ├── scripts
  ├── styles
  └── types
```

| Path                   | Description                              |
| ---------------------  | ---------------------------------------- |
| `src/components/docs`  | The components to be used inside `.mdx` files. |
| `src/components/layout`| The layout components to be used inside `layouts` such as header and footer. |
| `src/components/ui`    | The components to be used inside anywhere inside the application. |
| `src/config`    | Site configuration for pages to be created and metadata.         |
| `src/content`         | The `.md` or `.mdx` content for docs or blogs.                |
| `src/layouts`         | The top level layouts for pages.               |
| `src/lib`         | All utility functions.               |
| `src/pages`         | All astro pages to be created.               |
| `src/scripts`         | Reusable scripts to run on the client (may move this into `/public`).              |
| `src/styles`         | Global stylsheet.              |
| `src/content`         | All utility functions.               |
| `src/types`         | All types to be used in various parts of the application.              |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/astro-mintlify.git
```

### Navigate to project directory

```bash
cd astro-mintlify
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
npm install
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests

If you have a request for a new component or feature, please open a discussion on GitHub. We'll be happy to help you out.
