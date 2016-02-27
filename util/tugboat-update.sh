#!/usr/bin/env bash
set -e
cd /var/lib/tugboat/docroot
drush config-import -y
drush updb -y
