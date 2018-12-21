set -e

export TF_VAR_BRANCH=$TRAVIS_BRANCH
yarn outdated
bash shell/test.sh
