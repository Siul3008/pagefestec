# FESTEC 2026 · SJO

Sitio estático reconstruido desde el sitio público de FESTEC SJO 2026. No requiere dependencias ni framework.

## Estructura

- `index.html`: inicio, categorías y agenda semanal.
- `actividad.html`: vista individual para cada actividad usando `?id=`.
- `assets/js/data.js`: contenido editable de actividades y agenda.
- `assets/images/`: imágenes recuperadas del sitio original.

## Vista previa

Abrí `index.html` desde un servidor web estático. Por ejemplo, con Python instalado:

```powershell
python -m http.server 8000
```

Luego visitá `http://localhost:8000`.

## GitHub Pages

1. Creá un repositorio vacío en GitHub.
2. Subí el contenido de esta carpeta a la rama `main`.
3. En **Settings → Pages**, elegí **Deploy from a branch**.
4. Seleccioná `main` y la carpeta `/(root)`.
5. Guardá y esperá la URL de GitHub Pages.

No hay paso de compilación: GitHub Pages sirve los archivos directamente.
