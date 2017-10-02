#!/bin/bash

prettier --single-quote --trailing-comma all --jsx-bracket-same-line --write "{public,src,*}/**/*.{js,jsx,json,css}"
