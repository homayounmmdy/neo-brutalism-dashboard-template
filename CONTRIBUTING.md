# Contributing to Neo Brutalism UI 🎨

First of all, thank you for your interest in contributing to Neo Brutalism UI! Contributions of all kinds are welcome, including new components, bug fixes, accessibility improvements, documentation, and design enhancements.

Our goal is to build a reusable Neo-Brutalist UI library that developers can explore and understand through Storybook.

## 📋 Before You Start

- Read our [Code of Conduct](CODE_OF_CONDUCT.md).
- Review our [Security Policy](SECURITY.md).
- Check existing issues and pull requests before starting significant work.
- For major changes, open an issue first to discuss your proposal.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Fork the Repository

Fork the repository on GitHub, then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/neo-brutalism-ui.git
cd neo-brutalism-ui
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Run Storybook

```bash
npm run storybook
```

Storybook is typically available at [http://localhost:6006](http://localhost:6006).

Use Storybook to explore existing components, preview your changes, and verify that your contributions behave as expected.

> If a script is unavailable, check the `scripts` section of `package.json` for the commands supported by the project.

## 🧩 Contributing Components

When creating or improving components, please follow these guidelines:

- **Reusability:** Build components that can be used across different pages and layouts.
- **Consistency:** Follow the existing Neo-Brutalist design language, including borders, shadows, colors, spacing, and typography.
- **Customization:** Expose appropriate props for configurable behavior and appearance.
- **Responsiveness:** Ensure components work across different screen sizes.
- **Accessibility:** Use semantic HTML, accessible labels, keyboard navigation, and visible focus states where appropriate.
- **TypeScript:** Provide clear and accurate types for component props.
- **Simplicity:** Keep components focused and avoid unnecessary dependencies.

### Storybook Stories

When adding a component, include or update its Storybook stories where appropriate.

Stories should demonstrate:

- The component's default appearance.
- Available variants and sizes.
- Important prop combinations.
- Relevant interactive states.
- Responsive behavior, when applicable.

Storybook should make it easy for other developers to understand what a component does and how to use it.

## 🐛 Reporting Bugs

Before reporting a bug, check whether it has already been reported.

When opening an issue, include:

- A clear and descriptive title.
- Steps to reproduce the problem.
- Expected behavior and actual behavior.
- Screenshots or a Storybook example, if relevant.
- Browser, operating system, or device details when relevant.

Use GitHub Issues to report bugs and track improvements.

## 💡 Suggesting Features

Feature suggestions are welcome! Please explain:

- The problem or use case the feature addresses.
- Your proposed solution.
- How it fits the Neo-Brutalist design system.
- Examples or references, if available.

For major additions, discuss the idea in an issue before submitting a pull request.

## 🔀 Submitting a Pull Request

1. Create a branch for your changes:

   ```bash
   git checkout -b feat/component-name
   ```

2. Make your changes following the project's existing conventions.

3. Run the application and Storybook to verify your work.

4. Run any relevant tests or checks configured by the project.

5. Commit your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "feat: add new UI component"
   ```

6. Push your branch:

   ```bash
   git push origin feat/component-name
   ```

7. Open a pull request against the original repository's default branch.

### Pull Request Checklist

Before submitting, make sure that:

- [ ] The change has a clear purpose.
- [ ] Components follow the existing design system.
- [ ] Storybook stories are added or updated where appropriate.
- [ ] The UI is responsive and accessible where applicable.
- [ ] Relevant tests and checks pass.
- [ ] No unrelated files or changes are included.
- [ ] Documentation is updated when necessary.

## 📝 Commit Message Guidelines

Use descriptive commit messages. Conventional Commits are encouraged:

| Prefix | Purpose |
|---|---|
| `feat:` | Add a feature or component |
| `fix:` | Fix a bug |
| `docs:` | Update documentation |
| `style:` | Make styling changes |
| `refactor:` | Improve code without changing behavior |
| `test:` | Add or update tests |
| `chore:` | Maintenance tasks |

Examples:

```bash
git commit -m "feat: add badge component"
git commit -m "fix: improve button responsiveness"
git commit -m "docs: update Storybook examples"
```

## 🔒 Security

Please do not submit real credentials, API keys, passwords, or other sensitive information.

For security-related concerns, follow our [Security Policy](SECURITY.md).

Remember that Neo Brutalism UI is primarily a UI library and demonstration project. Authentication and other security-sensitive example pages may not implement production-grade security.

## 📜 License

By contributing to Neo Brutalism UI, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

## 🙌 Thank You

Every contribution helps improve Neo Brutalism UI. Whether you're fixing a small visual issue, adding a reusable component, improving accessibility, or updating documentation, your help is appreciated.

**Explore the library:** [Neo Brutalism UI on Storybook](https://homayounmmdy.github.io/neo-brutalism-ui/)

Thank you for helping make the project better!
