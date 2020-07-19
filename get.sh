#!/bin/bash

test -f data/krad.zip || curl ftp://ftp.monash.edu/pub/nihongo/kradzip.zip -o data/krad.zip; unzip data/krad.zip -d data;