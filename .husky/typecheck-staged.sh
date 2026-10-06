#!/bin/sh
set -e

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

# Export exactly what is in the index (tracked + staged files only)
git checkout-index -a --prefix="$tmp/"

# Reuse installed deps instead of reinstalling
ln -s "$PWD/node_modules" "$tmp/node_modules"

cd "$tmp"
pnpm_config_verify_deps_before_run=false pnpm run typecheck
