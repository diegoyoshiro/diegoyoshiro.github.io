# Mi Portafolio

Sitio personal estático (HTML + CSS + JS, sin dependencias). Bilingüe ES/EN, tema claro/oscuro, adaptado a móvil.

## Cómo editarlo

1. Abre **`data.js`** y reemplaza los textos de ejemplo con tu información.
2. Pon tu foto, CV e imágenes de proyectos en la carpeta **`assets/`** y escribe su ruta en `data.js`
   (ej. `photo: "assets/foto.jpg"`, `cv: "assets/cv.pdf"`).
3. Abre `index.html` con doble clic para verlo en tu navegador.

Si dejas una lista vacía (por ejemplo `testimonials: []`), esa sección desaparece sola.

## Cómo publicarlo gratis con GitHub Pages

1. Crea una cuenta en <https://github.com> si no tienes.
2. Crea un repositorio nuevo llamado **`tu-usuario.github.io`** (con tu usuario exacto) y márcalo como **Public**.
3. Sube los archivos:
   - **Sin terminal:** en el repo, “Add file → Upload files”, arrastra todo el contenido de esta carpeta y pulsa “Commit changes”.
   - **Con terminal:**
     ```bash
     git init
     git add .
     git commit -m "Primer portafolio"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
     git push -u origin main
     ```
4. En el repo ve a **Settings → Pages**, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)` y guarda.
5. En 1–2 minutos estará en **`https://tu-usuario.github.io`**.

Cada vez que edites y subas cambios, el sitio se actualiza solo.

## Dominio propio (opcional, ~10–15 USD/año)

1. Compra un dominio (ej. `tunombre.com`) en Cloudflare, Namecheap, Porkbun, etc.
2. En GitHub: **Settings → Pages → Custom domain**, escribe `tunombre.com` y guarda.
3. En tu proveedor de dominio agrega estos registros DNS:
   - 4 registros **A** para `@` apuntando a:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro **CNAME** para `www` apuntando a `tu-usuario.github.io`
4. Espera a que propague (de minutos a unas horas) y activa **Enforce HTTPS**.

## Estructura

```
index.html   ← estructura de la página
styles.css   ← diseño (colores en :root, cambia --accent para tu color)
main.js      ← genera las secciones a partir de data.js
data.js      ← TU CONTENIDO
assets/      ← foto, CV, imágenes
```
