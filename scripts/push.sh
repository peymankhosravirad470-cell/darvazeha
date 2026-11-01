#!/usr/bin/env bash
# Push main to GitHub.
# Authentication is delegated to the local git credential helper
# (scripts/git-credential-darvazeha) — no token appears in the command,
# the URL, or the output. See docs/GITHUB.md for the setup.
set -euo pipefail
cd "$(dirname "$0")/.."
GIT_TERMINAL_PROMPT=0 git push origin main
