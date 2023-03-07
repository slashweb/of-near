#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/contracts/CreatorsContent.ts build/creators-content.wasm
