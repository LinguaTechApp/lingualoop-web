.PHONY: dev build preview install clean check

dev:
	npm run dev

build:
	npm run build

preview: build
	npm run preview

install:
	npm install

clean:
	rm -rf dist/ .astro/

check:
	npx astro check
