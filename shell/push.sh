set -e

export TF_VAR_BRANCH=$TRAVIS_BRANCH
bash shell/test.sh
