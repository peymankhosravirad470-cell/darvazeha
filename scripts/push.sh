#!/usr/bin/env bash
# Push main to GitHub — token is read from token.github and never printed.
set -euo pipefail
cd "$(dirname "$0")/.."
TOKEN=$(cat token.github)
GIT_TERMINAL_PROMPT=0 git push \
  "https://peymankhosravirad470-cell:${TOKEN}@github.com/peymankhosravirad470-cell/darvazeha.git" \
  main 2>&1 | python3 -c "import sys; t=open('token.github').read().strip(); print(sys.stdin.read().replace(t,'***'))"
