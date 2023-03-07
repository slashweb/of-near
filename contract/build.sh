#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/contracts/Content.ts build/content.wasm
