# use vite plugin
build:
	docker build --no-cache -t front-vite .

# package.json generation
getPackage:
	docker run --rm -w /app -v .:/app --user $$(id -u):$$(id -g) $(NODE_IMAGE) npm create vite@latest $(PROJECT_NAME) -- --template react && \
	mv $(PROJECT_NAME) ../../apps