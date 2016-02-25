#!/usr/bin/env bash
set -e
cd /var/lib/tugboat/docroot
drush config-import
drush cc all