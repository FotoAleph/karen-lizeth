#!/usr/bin/env bash
set -euo pipefail

echo "Preparando dependencias para deploy..."

if ! command -v composer >/dev/null 2>&1; then
  echo "ERROR: composer no está disponible en PATH." >&2
  exit 2
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "ERROR: pnpm no está disponible en PATH." >&2
  exit 2
fi

echo "Instalando dependencias PHP (sin dev)..."
composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction --no-scripts

echo "Instalando dependencias JS (producción)..."
pnpm install --frozen-lockfile --prod

echo "Construyendo assets front..."
pnpm run build

TS=$(date +%Y%m%d%H%M%S)
BUNDLE_DIR="deploy_bundle"
mkdir -p "$BUNDLE_DIR"

echo "Empaquetando: vendor, public/build, composer.lock, pnpm-lock.yaml, package.json"
ZIP_NAME="$BUNDLE_DIR/deps_${TS}.zip"
zip -r "$ZIP_NAME" vendor public/build composer.lock pnpm-lock.yaml package.json >/dev/null || true

echo "Empaquetado completado: $ZIP_NAME"
echo "Sube ese .zip al servidor o úsalo como artefacto de deploy."

exit 0
