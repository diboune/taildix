# Taildix Colors

A tailwindcss plugin that brings all the @radix-ui/colors scales.

Install:

```bash
npm install @taildix/colors
```

Use:

This gets you all the @radix-ui/colors scales.

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  // ...
  plugins: [require("@taildix/colors")],
} satisfies Config;
```

If you wish to hand pick your scales.

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import taildix from "@taildix/colors";

export default {
  // ...

  // typesafe choice
  plugins: [taildix({ colors: ["amber", "ruby"] })],
} satisfies Config;
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
