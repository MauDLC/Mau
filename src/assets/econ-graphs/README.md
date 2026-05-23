# Graficas economicas en TikZ

Las fuentes editables viven en `src/assets/econ-graphs/tikz/` y los SVG finales se guardan en `public/econ-graphs/`.

Para regenerarlas:

```bash
npm run graphs:build
```

El script usa `latexmk` para compilar cada `.tex` a DVI y `dvisvgm` para exportar SVG vectorial. En macOS con MacTeX puede ser necesario que Ghostscript este disponible en `/usr/local/bin/gs`.

Si prefieres convertir desde PDF manualmente:

```bash
latexmk -pdf archivo.tex
pdf2svg archivo.pdf archivo.svg
```
