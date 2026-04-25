.PHONY: dev build preview install clean check lighthouse screenshots

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

# Build, run preview, and capture full-page screenshots (mobile + desktop).
# Output: .screenshots/mobile.png and .screenshots/desktop.png
screenshots: build
	@mkdir -p .screenshots
	@echo "▶ starting preview server..."
	@npm run preview > .screenshots/preview.log 2>&1 & echo $$! > .screenshots/preview.pid
	@sleep 3
	@echo "▶ capturing mobile (390x844)..."
	@"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
		--headless=new --no-sandbox --hide-scrollbars \
		--window-size=390,844 \
		--screenshot=.screenshots/mobile.png \
		http://localhost:4321/ > /dev/null 2>&1 || true
	@echo "▶ capturing desktop (1440x900)..."
	@"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
		--headless=new --no-sandbox --hide-scrollbars \
		--window-size=1440,900 \
		--screenshot=.screenshots/desktop.png \
		http://localhost:4321/ > /dev/null 2>&1 || true
	@kill `cat .screenshots/preview.pid` 2>/dev/null || true
	@rm -f .screenshots/preview.pid
	@echo "✓ screenshots at .screenshots/mobile.png and .screenshots/desktop.png"
