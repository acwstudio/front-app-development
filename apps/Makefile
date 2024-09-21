# use vite plugin
build:
	docker build --no-cache -t front-vite .

# package.json generation
getViteGeneration:
	docker run --rm -w /app -v .:/app --user $$(id -u):$$(id -g) $(NODE_IMAGE) npm create vite@latest $(PROJECT_NAME) -- --template react

# package.json generation
getCraGeneration:
	docker run --rm -w /app -v .:/app --user  $$(id -u):$$(id -g) $(NODE_IMAGE) npx create-react-app $(PROJECT_NAME)