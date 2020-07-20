#!/bin/bash

if [ ! -f data/krad.zip ]; then
	curl ftp://ftp.monash.edu/pub/nihongo/kradzip.zip -o data/krad.zip
	unzip data/krad.zip -d data;
	# iconv -f euc-jp -t utf-8 data/radkfile2 -o data/radkfile3
	iconv -f euc-jp -t utf-8 data/kradfile2 -o data/kradfile3
fi
