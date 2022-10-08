#!/bin/bash
docker build --build-arg git_commit=$1 --build-arg image_version=$2 -t sandbox:$2 .