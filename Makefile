.PHONY: dev build preview install clean check lighthouse

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

# Build, run preview in background, and score it with Lighthouse (mobile + desktop).
# Reports: .lighthouse/mobile.html and .lighthouse/desktop.html
lighthouse: build
	@mkdir -p .lighthouse
	@echo "▶ starting preview server..."
	@npm run preview > .lighthouse/preview.log 2>&1 & echo $$! > .lighthouse/preview.pid
	@sleep 3
	@echo "▶ running Lighthouse (mobile)..."
	@npx --yes lighthouse http://localhost:4321/ \
		--chrome-flags="--headless=new --no-sandbox" \
		--chrome-path="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
		--only-categories=performance,accessibility,best-practices,seo \
		--output=html --output-path=.lighthouse/mobile.html --quiet || true
	@echo "▶ running Lighthouse (desktop)..."
	@npx --yes lighthouse http://localhost:4321/ \
		--chrome-flags="--headless=new --no-sandbox" \
		--chrome-path="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
		--preset=desktop \
		--only-categories=performance,accessibility,best-practices,seo \
		--output=html --output-path=.lighthouse/desktop.html --quiet || true
	@kill `cat .lighthouse/preview.pid` 2>/dev/null || true
	@rm -f .lighthouse/preview.pid
	@echo "✓ reports at .lighthouse/mobile.html and .lighthouse/desktop.html"
