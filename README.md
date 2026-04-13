# Antiblaze Web

Base tecnica inicial para la nueva landing one-page de Antiblaze.

## Stack

- Next.js 16 con App Router
- TypeScript
- ESLint
- Tailwind CSS v4
- next-intl
- next-themes
- motion
- react-hook-form + zod
- lucide-react
- clsx + tailwind-merge + class-variance-authority

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Estructura base

```text
src/
  app/[locale]/
  components/
    layout/
    sections/
    ui/
  i18n/
  lib/
  messages/
  providers/
  styles/
```

## Base actual

- i18n con `es` por defecto y `en` como segundo idioma
- Theme switcher light/dark con `next-themes`
- Header, hero y footer minimos para arrancar la landing
- Tokens de diseno con variables CSS y Tailwind
- Demo minima de formulario para validar integracion con `react-hook-form` + `zod`

## Siguiente paso recomendado

Construir las secciones reales de la landing: propuesta de valor, beneficios, aplicaciones, prueba social, FAQ y formulario final de contacto o cotizacion.
