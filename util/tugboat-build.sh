#!/usr/bin/env bash
set -e
cd ../docroot
drush config-import -y
drush cache-rebuild