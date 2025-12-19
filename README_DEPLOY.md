Objetivo

Instrucciones para preparar el repositorio y que las dependencias estén disponibles para deploy (offline o como artifact).

Uso local

1. Asegúrate de tener `composer` y `pnpm` instalados.
2. Ejecuta el script de empaquetado:

```bash
bash scripts/prepare_deploy.sh
```

Resultado: se generará un archivo ZIP en `deploy_bundle/` que contiene `vendor`, `public/build` y los lockfiles.

Uso con GitHub Actions

Se incluye el workflow `.github/workflows/package-deps.yml` que crea un artefacto `dependencies-bundle` con:

- `vendor`
- `node_modules`
- `public/build`
- `composer.lock`
- `pnpm-lock.yaml`
- `package.json`

Puedes descargar ese artefacto y desplegarlo en tu servidor sin necesidad de reinstalar dependencias desde Internet.

Notas

- Si deseas que `vendor` o `node_modules` estén versionados en el repo, crea un commit después de ejecutar `scripts/prepare_deploy.sh` y añade los directorios al control de versiones (no recomendado por tamaño).
- Ajusta la versión de PHP y `pnpm` en el workflow según tu stack.
