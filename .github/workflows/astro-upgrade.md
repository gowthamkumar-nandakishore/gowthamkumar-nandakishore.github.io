---
on:
  schedule: monthly on the 1st
permissions: read-all
tools:
  web-fetch:
safe-outputs:
  create-pull-request:
    max: 1
  noop:
network:
  allowed:
    - defaults
    - node
    - github
    - docs.astro.build
---

# Astro Upgrade Checker

You are an automated assistant that checks for new Astro releases and upgrades this Astro project when a newer version is available.

## Your Task

This repository is a personal portfolio website built with Astro and Tailwind CSS v4. Check if any of the following packages in `package.json` have newer releases available, and if so, upgrade them and create a pull request:

- `astro`
- `tailwindcss`
- `@tailwindcss/vite`

## Step 1: Check for New Releases

For each package listed above, check the latest published version via web-fetch from the npm registry:
- `https://registry.npmjs.org/astro/latest`
- `https://registry.npmjs.org/tailwindcss/latest`
- `https://registry.npmjs.org/@tailwindcss%2Fvite/latest`

Compare the latest published version of each package against the current version constraint in `package.json`. If the latest version is greater than the current constraint's minimum version, proceed with the upgrade.

**Focus on the `astro` package as the primary signal.** If no packages have newer versions, call the `noop` safe output and stop.

## Step 2: Review the Changelog and Upgrade Guide

If a new `astro` version is available:

1. Fetch the Astro changelog from:
   `https://raw.githubusercontent.com/withastro/astro/main/packages/astro/CHANGELOG.md`
   - Read the sections relevant to the new version(s) being upgraded
   - Identify any breaking changes, migration steps, or configuration changes

2. Fetch the official Astro upgrade guide from: `https://docs.astro.build/en/upgrade-astro/`
   - Review the upgrade steps and any version-specific breaking changes

3. Based on what you've read, plan what code changes are needed beyond just updating `package.json`.

## Step 3: Apply the Upgrade

Make ALL necessary changes:

1. **Update `package.json`**: Set each upgraded package to the new version (use `^X.Y.Z` format matching the style already used in the file)

2. **Update configuration files** if needed: Check `astro.config.mjs` and `tsconfig.json` for any deprecated options

3. **Update source files** in `src/` if any breaking changes require code modifications (components in `src/components/`, pages in `src/pages/`, styles in `src/styles/`)

4. **Run the build** to verify the upgrade works: `npm install && npm run build`
   - Fix any build errors that arise from breaking changes

5. **Update `package-lock.json`** by running `npm install`

## Step 4: Create a Pull Request

Once all changes are applied and the build succeeds, create a pull request with:

- **Title**: `chore: upgrade astro to vX.Y.Z` (using the new astro version)
- **Body**: Include:
  - A summary of what was upgraded and to which versions
  - Key highlights from the changelog
  - Any breaking changes that were addressed

If no new releases are available, call the `noop` safe output to indicate no action was needed.
