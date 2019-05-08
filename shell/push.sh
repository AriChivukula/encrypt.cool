set -e

export TF_VAR_BRANCH=$TRAVIS_BRANCH
yarn outdated || true
bash shell/test.sh
