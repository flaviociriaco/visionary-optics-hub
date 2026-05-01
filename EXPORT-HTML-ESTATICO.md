# 📦 Como exportar como HTML estático

Este projeto usa **TanStack Start** (SSR). Para gerar HTML 100% estático
(que você pode subir em qualquer hospedagem — Hostinger, GitHub Pages,
Netlify, FTP, etc.), siga um destes 2 caminhos.

---

## ✅ Caminho A — Mais simples (recomendado)

### 1. Exporte o projeto pro GitHub e clone no PC

No editor Lovable: **GitHub → Connect to GitHub → Create Repository**.
No seu PC:

```bash
git clone <url-do-seu-repo>
cd <pasta-do-projeto>
bun install   # ou: npm install
```

### 2. Faça o build

```bash
bun run build   # ou: npm run build
```

Isso gera a pasta **`dist/client/`** com o site pronto:
- `index.html`
- `assets/` (JS, CSS, imagens com hash)

### 3. Suba `dist/client/` em qualquer hospedagem

- **Hostinger / cPanel**: arraste todo o conteúdo de `dist/client/`
  pra dentro de `public_html/` via FTP ou Gerenciador de Arquivos.
- **GitHub Pages**: crie um repo, suba o conteúdo de `dist/client/`
  na branch `gh-pages`.
- **Netlify / Vercel**: arraste a pasta `dist/client/` no painel deles.

> ⚠️ Suba o **conteúdo** de `dist/client/`, não a pasta inteira.
> O `index.html` precisa ficar na raiz do servidor.

---

## ⚙️ Caminho B — Forçar SPA puro (sem servidor)

Se quiser garantir que **não há nenhuma dependência de servidor edge**,
substitua estes 2 arquivos no projeto local antes de rodar o build:

### `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
});
```

### `index.html` (criar na raiz)

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ótica GuaruluxÓtica — Óculos premium em Guarulhos</title>
    <meta name="description" content="Ótica premium em Guarulhos com armações exclusivas e laboratório próprio." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/main.tsx` (criar)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Features } from "@/components/site/Features";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { useReveal } from "@/hooks/use-reveal";

function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Remova (não precisa mais)

- `src/router.tsx`
- `src/routes/` (toda a pasta)
- `src/routeTree.gen.ts`
- `wrangler.jsonc`

### Ajuste o `package.json`

Remova as deps: `@tanstack/react-router`, `@tanstack/react-start`,
`@tanstack/router-plugin`, `@cloudflare/vite-plugin`,
`@lovable.dev/vite-tanstack-config`.

Depois:

```bash
rm -rf node_modules bun.lockb
bun install
bun run build
```

A pasta **`dist/`** já contém o HTML estático puro pronto pra subir.

---

## 🧪 Testar localmente antes de subir

```bash
bunx serve dist        # Caminho B
# ou
bunx serve dist/client # Caminho A
```

Abra http://localhost:3000

---

## ❓ Qual escolher?

- **Não sabe / quer rápido** → Caminho A
- **Hospedagem só aceita HTML/CSS/JS** (FTP simples) → Caminho A também funciona, basta subir `dist/client/`
- **Quer remover toda a complexidade do TanStack** → Caminho B
