# Agent Development Guide

## Commands
- **Build**: `npm run build` or `ionic build`
- **Lint**: `npm run lint` or `ng lint`
- **Test**: `npm test` or `ng test`
- **Test single file**: `ng test --include='**/path/to/file.spec.ts'`
- **Serve**: `npm start` or `ionic serve`
- **Android**: `npm run android`

## Code Style
- **Framework**: Angular 20 + Ionic 8 + TypeScript 5.8
- **Components**: Use standalone components with `imports` array
- **Styling**: SCSS + TailwindCSS v4
- **Selectors**: Components use `app-` prefix with kebab-case
- **Naming**: PascalCase for components/classes, camelCase for functions/variables
- **Dependency Injection**: Use `inject()` function instead of constructor injection
- **Icons**: Use Ionicons via `addIcons()` in component constructors
- **Types**: Strict TypeScript enabled, use proper interfaces from `src/app/services/interfaces.ts`

## Project Structure
- Pages: `src/app/[feature]/[feature].page.ts`
- Components: `src/app/components/[component]/[component].component.ts`
- Services: `src/app/services/[service].service.ts`
- Interfaces: `src/app/services/interfaces.ts`
- Assets: `src/assets/mock/` contains JSON mock data