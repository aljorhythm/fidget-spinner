setup:
	git config core.hooksPath ./githooks

build:
	npm run build
	make copy-public-to-docs
	
copy-public-to-docs:
	rm -rf docs
	mkdir docs
	cp -r ./public/. ./docs/