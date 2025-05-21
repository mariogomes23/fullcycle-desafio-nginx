#!/bin/sh

set -e

host="$1"
shift
cmd="$@"

until mysql -h "$host" -u root -proot -e "SELECT 1" > /dev/null 2>&1; do
  echo "MySQL ainda não está pronto - esperando..."
  sleep 2
done

exec $cmd
